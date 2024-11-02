# 🚀 Getting Started

To run and build the project you need to install nodejs (https://nodejs.org/en)

- To install the project run `npm install`
- To start dev server run `npm run dev` (server will start on http://127.0.0.1:5173)
- To build the project run `npm run build`

That's it!

# 🗄️ Project Structure

Most of the code lives in the `src` folder and is organized as follows:

- **pages**: Contains individual pages, each built from various components, representing distinct sections of the application. Each page folder can include its own components, hooks, and context files that are specific to that page, supporting modular and self-contained page development. Pages are accessible through the `@pages` alias.

- **shared**: A collection of reusable resources that can be used throughout the app. This folder is divided into several subdirectories:
  - **api**: Contains API calls and functions for interacting with external services or backend endpoints.
  - **assets**: Holds static assets such as images, fonts, and other media.
  - **components**: Stores reusable UI components, enabling consistent design and functionality across pages.
  - **constants**: Contains constant values or configurations that are used across multiple parts of the application.
  - **context**: Defines React context providers and hooks to manage global state and shared logic.
  - **hooks**: Custom React hooks that encapsulate logic for reuse across components.
  - **routes**: Defines the application’s routing, allowing navigation between different pages.

Additional aliases are set up for quick imports, including `@pages` for the `pages` directory and `@shared` for `shared` resources.
