# Architecture Documentation

## Overview
The TruEstate Retail Sales Management System is built using a modern decoupled architecture. The frontend is developed in React (Vite) and backend is powered by Django REST Framework. This ensure clear separation of concerns and high maintainability.

## Backend Architecture
The backend is structured as a standard Django project with a single app `sales`.
- **API Design**: We uses RESTful principles for data communication. The `SalesListView` handles GET requests.
- **Database**: SQLite is used for development simple storage. The `Transaction` model stores all sales records.
- **Filtering**: We implemented `django-filter` to handle complex queries efficiently. This allow users to filter by multiple fields.

## Frontend Architecture
The frontend is a Single Page Application (SPA) built with React.
- **Component Diagram**: The app is divided into functional components like `Header`, `FilterPanel` and `TransactionTable`.
- **State Management**: We uses React `useState` and custom hooks for managing data flow. This keeps the logic centralized.
- **Styling**: Vanilla CSS is used to keep the design minimal and clean. No external UI libraries is dependency.

## Data Flow
1. User interacts with the UI (e.g., types in search bar).
2. React state updates and triggers the `useSales` hook.
3. The hook sends a GET request to Django API with query parameters.
4. Django filters the database and returns JSON response.
5. Frontend updates the table with new data.

## Folder Structure
```
root/
├── backend/
│   ├── sales/ (Django App)
│   └── truestate_backend/ (Project Config)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── hooks/
└── docs/
```

## Module Responsibilities
- **Sales App**: Handles database interactions and business logic.
- **Frontend App**: Manages user interface and API integration.
- **Import Script**: Responsible for loading initial dataset into database.

This architecture provides a solid foundation for future scalability.
