import React from "react";

const MatrixQuestion = ({ question, onAnswer }) => {
  const handleChange = (rowIndex, columnIndex) => {
    onAnswer(question.id, { rowIndex, columnIndex });
  };

  return (
    <div className="flex flex-col space-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <label className="text-lg font-semibold text-gray-800">
        {question.title}
      </label>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left font-medium text-gray-700"></th>
              {question.properties.columns.map((col) => (
                <th
                  key={col.label}
                  className="p-2 border-b font-medium text-gray-700"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {question.properties.rows.map((row, rowIndex) => (
              <tr key={row.label} className="odd:bg-gray-50 even:bg-white">
                <td className="p-2 border-r font-medium text-gray-800">
                  {row.label}
                </td>
                {question.properties.columns.map((col, colIndex) => (
                  <td key={col.label} className="p-2 text-center">
                    <input
                      type="radio"
                      name={`row-${rowIndex}`}
                      className="form-radio h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
                      onChange={() => handleChange(rowIndex, colIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatrixQuestion;
