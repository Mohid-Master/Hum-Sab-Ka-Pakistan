// src/components/dataDisplay/LikeCounter.tsx
'use client';

import { useState, useEffect } from 'react';
import { incrementLike } from '@/app/actions/Likes'; // Import Server Action
import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '@/lib/firebase/firebaseConfig'; // Your Firebase init
import { gsap } from 'gsap';

interface LikeCounterProps {
    contentId: string;
    initialLikes: number;
}

export default function LikeCounter({ contentId, initialLikes }: LikeCounterProps) {
    const [likes, setLikes] = useState(initialLikes);

    // Real-time listener for updates
    useEffect(() => {
        const docRef = doc(firestore, 'likes', contentId);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const newLikes = docSnap.data().Likes || 0;
                // Animate only if the number actually changed and increased
                if (newLikes > likes) {
                    gsap.fromTo('.like-count', { scale: 1, color: '#000' }, {
                        scale: 1.2, color: '#FF0000', duration: 0.2, yoyo: true, repeat: 1, onComplete: () => {
                            gsap.set('.like-count', { scale: 1, color: '#000' }); // Reset
                        }
                    });
                }
                setLikes(newLikes);
            }
        });
        return () => unsubscribe(); // Cleanup listener on unmount
    }, [contentId, likes]); // Added likes to dependency array to trigger animation correctly

    const handleLike = async () => {
        const MAX_LIKES_PER_CONTENT = 50;
        const localStorageKey = `likes_${contentId}`;
        const currentLikes = parseInt(localStorage.getItem(localStorageKey) || '0', 10);

        if (currentLikes >= MAX_LIKES_PER_CONTENT) {
            alert(`You can like this content a maximum of ${MAX_LIKES_PER_CONTENT} times.`);
            return; // Prevent further actions if limit is reached
        }

        // Optimistic update
        setLikes(prev => prev + 1);

        // Increment local storage count
        localStorage.setItem(localStorageKey, (currentLikes + 1).toString());

        const result = await incrementLike(contentId);
        if (!result.success) {
            // Rollback if there was an error (optional, but good practice)
            setLikes(prev => prev - 1);
            console.log('Failed to record like. Please try again.',result);
        }
    };

    return (
        <button
            onClick={handleLike}
            className="flex items-center space-x-2 p-2 rounded-lg bg-[#808080] -100 hover:bg-[#808080] -200 transition-colors"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
            <span className="like-count font-bold">{likes}</span>
        </button>
    );
}