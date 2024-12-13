import React, { useState } from "react";
import { Heading } from "../ui/heading";
import { Strong, Text } from "../ui/text";
import { Button } from "../ui/button";
import { Description, Fieldset, Label, Legend } from "../ui/fieldset";
import { Radio, RadioField, RadioGroup } from "../ui/radio";

const MultipleChoiceQuestion = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState([]);

  //   const handleChange = (choice) => {
  //     const updatedSelection = question.properties.allow_multiple_selection
  //       ? selected.includes(choice)
  //         ? selected.filter((item) => item !== choice)
  //         : [...selected, choice]
  //       : [choice];
  //     setSelected(updatedSelection);
  //     onAnswer(question.id, updatedSelection);
  //   };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Heading className="sm:font-normal sm:text-2xl text-gray-800" level={2}>
          {question.title}
        </Heading>
        <Text className="sm:text-xl text-gray-600">
          {question.properties?.description}
        </Text>
      </div>
      <div>
        <Fieldset>
          <RadioGroup name="resale" defaultValue="permit">
            {question.properties.choices.map((choice) => (
              <RadioField key={choice.label}>
                <Radio value={choice.label} />
                <Label>{choice.label}</Label>
              </RadioField>
            ))}
          </RadioGroup>
        </Fieldset>
        <div className="space-y-6">
          <div className="flex items-center my-6">
            <Button>Okay</Button>
            <Text className="sm:text-sm ml-4">
              Press <Strong>Enter</Strong> ↵
            </Text>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col space-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //   <label className="text-xl font-semibold text-gray-800">
    //     {question.title}
    //   </label>
    //   <div className="space-y-4">
    //     {question.properties.choices.map((choice) => (
    //       <label
    //         key={choice.label}
    //         className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
    //           selected.includes(choice.label)
    //             ? "bg-blue-100 border-blue-500"
    //             : "bg-gray-50 border-gray-300 hover:bg-gray-100"
    //         }`}
    //       >
    //         <input
    //           type={
    //             question.properties.allow_multiple_selection
    //               ? "checkbox"
    //               : "radio"
    //           }
    //           name={question.id}
    //           checked={selected.includes(choice.label)}
    //           onChange={() => handleChange(choice.label)}
    //           className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
    //         />
    //         <span className="ml-3 text-gray-700">{choice.label}</span>
    //       </label>
    //     ))}
    //   </div>
    // </div>
  );
};

export default MultipleChoiceQuestion;
