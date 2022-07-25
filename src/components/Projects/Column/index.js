// CSS
import "./index.css";

// Components
import Task from "../Task";

// Drag and Drop
import { Droppable, Draggable } from "react-beautiful-dnd";

const Column = (props) => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          className="column"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="column-title" {...provided.dragHandleProps}>
            <span>{props.column.title}</span>
            <span className="task-length">{props.tasks.length}</span>
          </div>

          <button type="submit" name="add-task" className="add-button">
            +
          </button>

          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
