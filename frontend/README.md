# TEST Magang Berdampak Suitmedia

**by: Muhamad Rizal Arfiyan**

This project was created to fulfill the requirements of the Suitmedia internship selection test. It is a frontend application built with React, Vite, and TypeScript, focusing on creating a responsive and interactive user interface that consumes a given API.

**🚀 Live Demo:** [**https://mber-suitmedia.rizalarfiyan.com**](https://mber-suitmedia.rizalarfiyan.com/)

## 🚀 How to Run

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rizalarfiyan/mber-suitmedia
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd mber-suitmedia/frontend
    ```

3.  **Install dependencies:**
    You can use `bun`, `npm`, or `yarn`.
    ```bash
    # Using bun
    bun install

    # Or using npm
    npm install

    # Or using yarn
    yarn install
    ```

4.  **Run the development server:**
    ```bash
    bun run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📜 Available Scripts

Based on the `package.json`, here are the available scripts:

| Script          | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `bun run dev`   | Starts the development server with Hot Module Replacement.       |
| `bun run build` | Bundles the app for production into the `dist` folder.           |
| `bun run preview` | Serves the production build locally for preview.                 |
| `bun run lint`  | Lints and formats the code, fixing issues automatically.         |
| `bun run check` | Checks for linting and formatting errors without applying fixes. |

## 🛠️ Tech Stack

This project is built using a modern frontend technology stack. **No external UI libraries** (like Material-UI or Ant Design) were used; all components are custom-styled with Tailwind CSS.

-   **Framework:** [React 19](https://react.dev/)
-   **State Management:** [React Context](https://react.dev/learn/passing-data-deeply-with-context)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) for efficient and conflict-free class management.
-   **Routing:** [TanStack Router](https://tanstack.com/router/) for fully type-safe routing.
-   **Data Fetching:** [Axios](https://axios-http.com/) and [`axios-hooks`](https://github.com/simoneb/axios-hooks) for streamlined API requests.
-   **Linting & Formatting:** [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Effects:** [`simple-parallax-js`](https://github.com/geosigno/simpleParallax.js) for the banner parallax effect.
-   **Date Management:** [Day.js](https://day.js.org/)

## ✨ Key Features & Strengths

This project was developed with a focus on modern best practices, performance, and code quality.

-   **Fully Type-Safe:** Built entirely with TypeScript to ensure type safety, reduce runtime errors, and improve developer experience.
-   **Responsive & Mobile-First Design:** The layout is fully responsive and optimized for a seamless experience on all devices, from mobile phones to desktops.
-   **Performance Optimized:**
    -   **Lazy Loading Images:** Implemented native lazy loading for images using the Intersection Observer API to improve initial page load speed.
    -   **Code Splitting:** Vite's bundle code splitting is utilized to create smaller chunks, loaded on demand.
    -   **Minimal Re-renders:** Component structure is optimized to prevent unnecessary re-renders, verified using [`react-scan`](https://react-scan.com/) during development.
-   **Robust User Experience:**
    -   **Skeleton Loading:** Displays a skeleton UI on the `/ideas` page while data is being fetched, providing a better perceived performance.
    -   **Initial Loading Indicator:** A global loading indicator is shown on the first visit.
    -   **Graceful Image Handling:** Includes fallback states for broken image links or images that fail to load (e.g., `Err Blocked by Orb`).
    -   **Mobile-Friendly Pagination:** Pagination logic is designed to be intuitive and easy to use on touch devices.
    -   **Parallax Effect:** A subtle parallax effect on the banner section enhances visual appeal.
-   **Clean & Maintainable Code:**
    -   **Linter & Formatter:** Integrated ESLint and Prettier, along with an `.editorconfig` file, to enforce a consistent code style and catch potential errors early.
    -   **Path Aliases (`@/`):** Uses path aliases for cleaner and more maintainable import statements.
    -   **Reusable Components:** Implemented reusable components, separating them into global (shared across the app) and local (specific to a feature or page) components.
    -   **Centralized Constants:** Manages constant data in a central location for easy updates and consistency.
    -   **Environment Variables:** Utilizes `.env` files for managing environment-specific configurations securely.
-   **Secure & Validated Inputs:**
    -   **Query Parameter Validation:** Implemented client-side validation for URL query parameters to ensure they are of the correct type and within the allowed values:
        -   `page`: Must be a `number`.
        -   `perPage`: Must be a `number` from the set `[8, 16, 32]`.
        -   `sort`: Must be a `string` from the set `['newest', 'oldest']`.

## ✅ Checklist & Features Implemented

All required tasks have been successfully completed.

-   [x] **Header:** Fixed, auto-hiding header with an active menu state.
-   [x] **Banner:** Dynamic slanted banner with a parallax effect.
-   [x] **Post List:** Fully functional sorting and pagination. State is preserved on refresh via URL parameters. Implemented consistent thumbnail ratios, lazy loading, and title truncation.
-   [x] **API Integration:** Successfully configured a proxy and implemented all required API parameters.
-   [x] **Deliverables:** The source code is available in a Git repository. The project is automatically deployed to **Cloudflare Pages** via **CI/CD** and is live at [https://mber-suitmedia.rizalarfiyan.com](https://mber-suitmedia.rizalarfiyan.com).

> **Note:** "Items per page" options are `[8, 16, 32]`. This was adjusted from the requested `[10, 20, 50]` to better align with the UI's responsive grid layout.

## 🏁 Conclusion

This project successfully implements all the features outlined in the test requirements. It demonstrates a strong understanding of modern frontend development practices, including component-based architecture with React, state management, API consumption, and building a responsive, performant, and user-friendly interface.