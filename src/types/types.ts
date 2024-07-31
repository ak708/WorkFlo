import { DraggableLocation } from "react-beautiful-dnd";
export type Task = {
  title: string;
  desc: string;
  listId: number;
  status: string;
  priority: string;
  deadline: string;
  email: string;
  id: string;
};

export type TaskList = {
  [key: string]: Task[];
};
export type Board = {
  columns: TaskList;
  ordered: string[];
};
export type BoardAction =
  | { type: "SET_TASKS"; payload: Board }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; payload: RemoveTaskPayload }
  | { type: "MOVE_TASK"; payload: OnDragPayload }
  | { type: "MOVE_COLUMN"; payload: OnDragPayload };

type OnDragPayload = {
  source: DraggableLocation;
  destination: DraggableLocation;
};

type RemoveTaskPayload = {
  id: string;
};
