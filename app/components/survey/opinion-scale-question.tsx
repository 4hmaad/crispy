import React from "react";

const OpinionScaleQuestion = ({ question, onAnswer }) => {
  const handleChange = (value) => {
    onAnswer(question.id, value);
  };

  return (
    <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <label className="text-xl font-semibold text-gray-800">
        {question.title}
      </label>
      <div className="flex items-center justify-between text-gray-600">
        <span className="text-sm font-medium">
          {question.properties.labels.left}
        </span>
        <input
          type="range"
          min={0}
          max={question.properties.steps - 1}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full h-2 mx-4 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-sm font-medium">
          {question.properties.labels.right}
        </span>
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        {Array.from({ length: question.properties.steps }).map((_, index) => (
          <span key={index} className="flex-1 text-center">
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OpinionScaleQuestion;
