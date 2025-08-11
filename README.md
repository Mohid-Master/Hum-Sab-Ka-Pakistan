# Pakistan Independence Day Celebration (August 14th)

Welcome to the **Pakistan Independence Day Celebration** project! This web application is a heartfelt tribute to Pakistan's journey to independence, showcasing its rich history, fascinating facts, and vibrant culture through interactive animations and a beautiful design.

## Live Demo

[hum-sab-ka-pakistan.vercel.app](https://hum-sab-ka-pakistan.vercel.app/) (Placeholder, **replace with your actual deployed link on Vercel**)

## Features

*   **Interactive Homepage:** Engaging animations with text pop-out effects (GSAP).
*   **History Page:** A curated timeline of Pakistan's historical milestones presented in an elegant card layout with dynamic language switching.
*   **Facts Page:** Discover intriguing facts about Pakistan, also presented in a dynamic card layout with interactive language switching.
*   **Multi-language Support:** Seamless English to Urdu translation for history and facts content, with a beautiful swipe animation for text transitions (GSAP).
*   **Live Likes Counter:** Show appreciation for specific content with a real-time, animated like button (powered by Firebase Firestore, with anonymous access and no sign-in required).
*   **Dynamic Theming:** Switch between 'Light', 'Dark', and a special 'Pakistani' theme (green & white aesthetic) with smooth, animated transitions.
*   **Animated Navigation & Footer:**
    *   A sleek, responsive Navbar with an animated entrance, mobile hamburger menu, integrated theme toggle, and language switcher.
    *   A stylish Footer with subtle entrance animations (GSAP) and Lucide React icons.
*   **Thematic Audio Experience:**
    *   **Draggable CD Player:** (Planned) Interactive component to play various Qaumi Tarana (national anthems) and Nagmas (patriotic songs).
    *   **Siren Baja:** A classic 14 August sound effect to evoke the festive street atmosphere.
*   **3D GLB Integration:** (Planned) Incorporate stunning 3D models for an immersive visual experience.
*   **Parallax Effects:** (Planned) Add depth and visual interest to scrolling sections.

## Technologies Used

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animations:** GSAP (GreenSock Animation Platform), Framer Motion
*   **Smooth Scrolling:** Lenis (Planned for integration)
*   **3D Graphics:** React Three Fiber / Drei (Planned for integration)
*   **Backend (for Likes):** Firebase Firestore (Serverless Database)
*   **Icons:** Lucide React
*   **Deployment:** Vercel

## Project Structure

The project follows a modular and scalable structure using Next.js App Router conventions and a clear separation of concerns:



## Getting Started

Follow these steps to set up and run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hum-sab-ka-pakistan.git
    cd hum-sab-ka-pakistan
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up Firebase (for Likes Feature):**
    *   Go to [console.firebase.google.com](https://console.firebase.google.com/) and create a new project.
    *   Add a web app to your Firebase project and copy its configuration details.
    *   Enable **Firestore Database** in your Firebase project.
    *   **Crucially, set up Firestore Security Rules** to allow reads by anyone and *only* allow increments to the `totalLikes` field in your `likes` collection. This prevents unauthorized write access. (Refer to your project's `PLAN.md` or Firebase documentation for example rules).
    *   Create a `.env.local` file in the root of your project and add your Firebase configuration (replace placeholders with your actual keys):
        ```
        NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="hum-sab-ka-pakistan.firebaseapp.com"
        NEXT_PUBLIC_FIREBASE_PROJECT_ID="hum-sab-ka-pakistan"
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="hum-sab-ka-pakistan.appspot.com"
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789012"
        NEXT_PUBLIC_FIREBASE_APP_ID="1:123456789012:web:abcdef1234567890abcdef"
        NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-XXXXXXXXXX"
        ```
        **Remember to add `.env.local` to your `.gitignore` file.**

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/).

1.  **Push your code to a Git repository** (GitHub, GitLab, Bitbucket).
2.  **Import your project on Vercel.**
3.  **Add Environment Variables** in your Vercel project settings (under Project Settings > Environment Variables). Copy all `NEXT_PUBLIC_FIREBASE_...` variables from your `.env.local` file. Ensure they are set for "Production", "Preview", and "Development" environments.
4.  Vercel will automatically detect your Next.js project and deploy it.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE). (Consider creating a `LICENSE` file in your project root).

## Acknowledgements

*   Inspired by the spirit of Pakistan's Independence Day.
*   Built with Next.js, React, TypeScript, and Tailwind CSS.
*   Special thanks to GSAP, Framer Motion, Lucide React, and Firebase.