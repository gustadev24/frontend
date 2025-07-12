# Project structure

In this project, we use the screaming architecture, which is a common pattern in software development. The project is divided into several directories, each serving a specific purpose. The main directory are named `modules` within the `src` directory. Each module, except the `core` and `auth` modules, contains its own set of files and directories divided by role (`admin` or `student`) and its general set of files and directories, which are organized as follows:

```bash
src/
├── modules/
│   ├── module1/
│   │   ├── components
│   │   ├── ui
│   │   ├── layouts
│   │   ├── hooks
│   │   ├── lib
│   │   ├── constants
│   │   ├── types
│   │   ├── tests
│   │   ├── admin/
│   │   │   ├── components
│   │   │   ├── ui
│   │   │   ├── layouts
│   │   │   ├── hooks
│   │   │   ├── lib
│   │   │   ├── constants
│   │   │   ├── types
│   │   │   ├── tests
│   │   ├── student/
│   │   │   ├── components
│   │   │   ├── ui
│   │   │   ├── layouts
│   │   │   ├── hooks
│   │   │   ├── lib
│   │   │   ├── constants
│   │   │   ├── types
│   │   │   ├── tests
```

The `components` directory contains reusable components that can be used across the module. The `ui` directory contains the user interface components, such as buttons, forms, and other elements that make up the visual part of the module. The `layouts` directory contains the layout components that define the structure of the module's pages. The `hooks` directory contains custom hooks that can be used to manage state and side effects in the module. The `lib` directory contains utility functions that can be used across the module. The `constants` directory contains constants that are used in the module. The `types` directory contains TypeScript types that are used in the module. Finally, the `tests` directory contains tests for the module.

In this project, we have several modules, each serving a specific purpose:

- `core`: Contains the core functionality of the application.
- `auth`: Handles user authentication and authorization.
- `dashboard`: Contains the main dashboard components and logic.
- `courses`: Manages course-related features.
- `student-progress`: Tracks student progress and performance.
- `text-based`: Contains features about write and show text-based content.
- `video-based`: Contains features about video content.
- `workbench`: Provides a workspace for students to interact with course materials.

Furthermore, in the `src` directory, we have the following additional directories:

```bash
src/
├── assets/         # Contains static assets like images, fonts, etc.
├── utils/          # Utility functions and helpers
```
