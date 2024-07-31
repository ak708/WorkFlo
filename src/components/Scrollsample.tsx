import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import TaskCard from "./TaskCard";
import { AddTask } from "./AddTask";

const tags = Array.from({ length: 3 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function CardList() {
  return (
    <div className="">
      <ScrollArea className="h-dvh w-full rounded-md border mb-4">
        <div className="p-1">
          <h4 className="mb-4 text-sm font-medium leading-none fixed">Tags</h4>
          {tags.map((tag) => (
            <>
              <div key={tag} className="text-sm">
                <TaskCard tag={tag} />
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
        <AddTask />
      </ScrollArea>
    </div>
  );
}
