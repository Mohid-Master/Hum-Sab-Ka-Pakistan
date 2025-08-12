// app/actions/likes.ts
'use server'; // Marks this file as a Server Action

import { firestore } from '@/lib/firebase/firebaseConfig'; // Your Firebase init
import { doc, getDoc, increment, runTransaction } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

export async function incrementLike(contentId: string) {
  const docRef = doc(firestore, 'likes', contentId);

  try {
    await runTransaction(firestore, async (transaction) => {
      const sfDoc = await transaction.get(docRef);
      if (!sfDoc.exists()) {
        transaction.set(docRef, { Likes: 1 }); // Changed from totalLikes
      } else {
        transaction.update(docRef, { Likes: increment(1) }); // Changed from totalLikes
      }
    });
    console.log(`Like incremented for ${contentId}`);
    revalidatePath('/'); // Revalidate any pages that might display the total count
    return { success: true };
  } catch (error: unknown) { // Explicitly type error as unknown
    console.error(`Error incrementing like for ${contentId}:`, error);
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
}

export async function getLikes(contentId: string) {
  const docRef = doc(firestore, 'likes', contentId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().Likes || 0; // Changed from totalLikes
  } else {
    return 0;
  }
}