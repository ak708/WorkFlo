# Task Management App

## Overview

Welcome to the Task Management App! This modern application is designed to help you organize your tasks efficiently using a Kanban-style board. Built with React and Next.js, this app supports drag-and-drop functionality to manage tasks across different statuses, including **To Do**, **In Progress**, **Under Review**, and **Finished**.

## Features

- **Drag and Drop Interface**: Easily move tasks between columns and reorder tasks within the same column using an intuitive drag-and-drop system.
- **Task Management**: Add, update, and delete tasks with ease.
- **Local Storage**: Tasks are saved to local storage, ensuring data persistence between sessions.
- **Responsive Design**: Optimized for both desktop and mobile devices to provide a seamless user experience.

## Installation

To get started with the Task Management App, follow these steps:

1. **Clone the Repository**

   Open your terminal and clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

   #Usage
   ##Board Context
   The application uses React's Context API to manage the state of the task board. The BoardContext provides access to the board's state and dispatch function throughout the app.

##Board Provider
Wrap your application with the BoardProvider component to supply the board state to the rest of your app.

##Task Reducer
The boardReducer function is responsible for handling various actions that affect the board's state, such as adding, moving, or removing tasks.

#Contributing
Contributions to the Task Management App are welcome! If you wish to contribute, please fork the repository, create a feature branch, and submit a pull request. Ensure that you include tests and documentation for any new features or changes.

#License
This project is licensed under the MIT License. For more details, see the LICENSE file in the repository.
