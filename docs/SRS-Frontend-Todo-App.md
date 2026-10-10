# Software Requirements Specification
## Frontend Todo App with Persistence

---

## 1. Purpose

The purpose of this application is to provide a simple, client-side Todo application demonstrating modern frontend practices using React and TypeScript, including state management, persistence via browser storage, and accessible UI patterns. The project is intended as a portfolio artifact.

---

## 2. Scope

This application allows users to create, manage, filter, and persist a list of todo tasks entirely in the browser using `localStorage`. No backend or authentication is included in scope.

---

## 3. Users

* **Primary User**: Individual end user managing personal tasks
* **Secondary User**: Hiring managers/reviewers evaluating frontend code quality

---

## 4. Functional Requirements

### 4.1 Task Management

* FR-1: The system **shall** allow a user to create a new task with a required title.
* FR-2: The system **shall** generate a unique identifier for each task.
* FR-3: The system **shall** allow a user to mark a task as completed or incomplete.
* FR-4: The system **shall** allow a user to delete a task.

### 4.2 Filtering

* FR-5: The system **shall** allow filtering tasks by:
  * All
  * Active (incomplete)
  * Completed

### 4.3 Persistence

* FR-6: The system **shall** persist tasks to `localStorage`.
* FR-7: The system **shall** restore tasks from `localStorage` on page reload.

### 4.4 UI States

* FR-8: The system **shall** display a clear empty state when no tasks exist.

---

## 5. Non-Functional Requirements

* NFR-1: The application **shall** be responsive using a mobile-first layout.
* NFR-2: The application **shall** use semantic HTML elements.
* NFR-3: The application **shall** support keyboard navigation for all interactive elements.
* NFR-4: The application **shall** be implemented using React with TypeScript.
* NFR-5: The application **shall** load in under 1 second on a typical local development environment.

---

## 6. Data Requirements

### 6.1 Task Data Model

Each task **shall** include:

* `id` (string or UUID)
* `title` (string, required)
* `completed` (boolean)
* `createdAt` (ISO timestamp string)

---

## 7. External Interfaces

* Browser `localStorage` API for persistence
* DOM APIs via React

---

## 8. Constraints and Assumptions

* No backend services are available.
* Data persistence is limited to a single browser/device.
* Application runs in modern evergreen browsers.

---

## 9. Acceptance Criteria

* A user can add, complete, uncomplete, delete, and filter tasks.
* Tasks persist after page refresh.
* Empty state is shown when task list is empty.
* Application passes TypeScript compilation with no errors.
* UI is usable on mobile and desktop screen sizes.

---

## 10. Out of Scope / Future Enhancements

* User authentication
* Backend synchronization
* Due dates or priorities
* Drag-and-drop reordering
* Cloud persistence

---

## 11. Repo Plan

**Repository Name:** `frontend-todo-app`

### Recommended Folder Structure

```
src/
 ├─ components/
 ├─ hooks/
 ├─ types/
 ├─ utils/
 ├─ App.tsx
 ├─ main.tsx
 └─ index.css
public/
README.md
```

### README Outline (Headings Only)

* Project Overview
* Tech Stack
* Features
* Setup Instructions
* Usage
* Accessibility Notes
* Future Improvements

---

## 12. MVP Build Plan

1. Initialize Vite + React + TypeScript project
2. Define Task type and localStorage utility
3. Implement task creation and listing
4. Implement complete/incomplete toggle
5. Implement delete functionality
6. Implement filtering logic
7. Add persistence layer
8. Add empty state and responsive styling
9. Final cleanup and README

---

## 13. Definition of Done

* [ ] All functional requirements implemented
* [ ] No TypeScript errors or warnings
* [ ] Tasks persist correctly in localStorage
* [ ] Filters work as expected
* [ ] README completed
* [ ] Repo pushed with clean commit history
