import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const RankingQuestion = ({ question, onAnswer }) => {
  const [choices, setChoices] = React.useState(question.properties.choices);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedChoices = Array.from(choices);
    const [moved] = updatedChoices.splice(result.source.index, 1);
    updatedChoices.splice(result.destination.index, 0, moved);

    setChoices(updatedChoices);
    onAnswer(
      question.id,
      updatedChoices.map((choice) => choice.label)
    );
  };

  return (
    <div className="flex flex-col space-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <label className="text-xl font-semibold text-gray-800">
        {question.title}
      </label>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="choices">
          {(provided) => (
            <ul
              className="space-y-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {choices.map((choice, index) => (
                <Draggable
                  key={choice.label}
                  draggableId={choice.label}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`p-4 border rounded-lg shadow-sm bg-white cursor-move transition ${
                        snapshot.isDragging
                          ? "bg-blue-100 shadow-md"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {choice.label}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default RankingQuestion;
