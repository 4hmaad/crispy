import React from "react";

const Statement = ({ question }) => {
  return (
    <div className="flex flex-col space-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <blockquote className="text-lg italic text-gray-700">
        {question.title}
      </blockquote>
      {question.properties.button_text && (
        <button
          className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          onClick={question.properties.onButtonClick}
        >
          {question.properties.button_text}
        </button>
      )}
    </div>
  );
};

export default Statement;
