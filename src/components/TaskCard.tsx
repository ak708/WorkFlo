import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useBoard } from "@/context/BoardContext/BoardContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DraggableProvided } from "react-beautiful-dnd";
import { Task } from "@/types/types";
import { IconEdit } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
type TaskCardProps = {
  task: Task;
  isDragging: boolean;
  provided: DraggableProvided;
};

function TaskCard({ task, isDragging, provided }: TaskCardProps) {
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Card className="min-w-lg">
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
          <CardDescription>{task.desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-between">
            <p
              className={`${
                task.priority === "High"
                  ? "text-red-500"
                  : task.priority === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              } px-2 py-1 rounded text-xs`}
            >
              {task.priority}
            </p>
            <p>{task.status}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>{task.deadline}</p>
          </div>
        </CardContent>
        <CardFooter>
          <div>
            <Button>
              <IconEdit />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </li>
  );
}

export default React.memo<TaskCardProps>(TaskCard);
