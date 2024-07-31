import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import * as React from "react";
export default function Board() {
  const onDragEnd = React.useCallback((result: DropResult) => {
    console.log(result);
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="dash" type="COLUMN" direction="horizontal">
        {(provided, snapshot) => (
          <ul
            className="border"
            ref={provided.innerRef}
            {...provided.droppableProps}
          ></ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
