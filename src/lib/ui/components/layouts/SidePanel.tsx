// src/lib/ui/components/layouts/SidePanel.tsx
import LikeCounter from '@/lib/ui/components/dataDisplay/LikeCounter'; // Assuming this path
import ThemeToggle from '@/lib/ui/components/interactives/ThemeToggle'; // Assuming this path
import LanguageSwitcher from '@/lib/ui/components/interactives/LanguageSwitcher'; // Assuming this path

export default function SidePanel() {
  // You might need to pass a specific contentId to the LikeCounter based on the page
  // For a fixed side panel, you might use a general contentId or manage it differently.
  // For simplicity here, we'll use a placeholder 'general-likes'.
  // You will need to adjust this based on how you want likes to function across your site.
  const contentIdForLikes = 'general-likes';

  return (
    <div   className="fixed right-0 top-1/2 transform -translate-y-1/2 p-0.5 bg-[#ffd900b5]  border-0.5 border-r-0 border-t-0 border-b-0 border-[#fff200]   shadow-lg rounded-l-lg flex flex-col items-center space-y-3 z-50">
      {/* Like Counter - You'll need to fetch initialLikes here or in a parent component */}
      {/* For a fixed panel, fetching initial likes for a general ID might be suitable */}
      {/* Or you might conditionally render/update the LikeCounter based on the current page */}
      <LikeCounter contentId={contentIdForLikes} initialLikes={0} /> {/* initialLikes needs to be fetched */}

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Language Switcher */}
      <LanguageSwitcher />
    </div>
  );
}