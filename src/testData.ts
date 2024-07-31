import { Task, TaskList } from "./types/types";

export const todos: Task[] = [
  {
    id: "1",
    title: "Implement Authentication",
    desc: "Set up user authentication and authorization using JWT.",
    listId: 1,
    status: "To Do",
    priority: "High",
    deadline: "2023-08-10",
    email: "user1@example.com",
  },
  {
    id: "2",
    title: "Design Database Schema",
    desc: "Create the initial database schema for the project using MongoDB.",
    listId: 2,
    status: "In Progress",
    priority: "Medium",
    deadline: "2023-08-15",
    email: "user2@example.com",
  },
  {
    id: "3",
    title: "Build API Endpoints",
    desc: "Develop RESTful API endpoints for CRUD operations.",
    listId: 3,
    status: "Under Review",
    priority: "High",
    deadline: "2023-08-12",
    email: "user3@example.com",
  },
  {
    id: "4",
    title: "Write Unit Tests",
    desc: "Write unit tests for the API using Jest and Supertest.",
    listId: 4,
    status: "Finished",
    priority: "Low",
    deadline: "2023-08-08",
    email: "user4@example.com",
  },
];

export const initialState: TaskList = {
  "To Do": [
    {
      id: "1",
      title: "Implement Authentication",
      desc: "Set up user authentication and authorization using JWT.",
      listId: 1,
      status: "To Do",
      priority: "High",
      deadline: "2023-08-10",
      email: "user1@example.com",
    },
  ],
  "In Progress": [
    {
      id: "2",
      title: "Design Database Schema",
      desc: "Create the initial database schema for the project using MongoDB.",
      listId: 2,
      status: "In Progress",
      priority: "Medium",
      deadline: "2023-08-15",
      email: "user2@example.com",
    },
  ],
  "Under Review": [
    {
      id: "3",
      title: "Build API Endpoints",
      desc: "Develop RESTful API endpoints for CRUD operations.",
      listId: 3,
      status: "Under Review",
      priority: "High",
      deadline: "2023-08-12",
      email: "user3@example.com",
    },
  ],
  Finished: [
    {
      id: "4",
      title: "Write Unit Tests",
      desc: "Write unit tests for the API using Jest and Supertest.",
      listId: 4,
      status: "Finished",
      priority: "Low",
      deadline: "2023-08-08",
      email: "user4@example.com",
    },
  ],
};
