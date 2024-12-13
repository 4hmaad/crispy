// src/components/QuestionRenderer.jsx
import React from "react";
import TextQuestion from "./text-question";
import OpinionScaleQuestion from "./opinion-scale-question";
import RankingQuestion from "./ranking-question";
import MatrixQuestion from "./matrix-question";
import MultipleChoiceQuestion from "./multiple-choice-questions";
import Statement from "./statement";

const QuestionRenderer = ({ question, onAnswer }) => {
  switch (question.type) {
    case "text":
      return <TextQuestion question={question} onAnswer={onAnswer} />;
    case "opinion_scale":
      return <OpinionScaleQuestion question={question} onAnswer={onAnswer} />;
    case "ranking":
      return <RankingQuestion question={question} onAnswer={onAnswer} />;
    case "matrix":
      return <MatrixQuestion question={question} onAnswer={onAnswer} />;
    case "multiple_choice":
      return <MultipleChoiceQuestion question={question} onAnswer={onAnswer} />;
    case "statement":
      return <Statement question={question} />;
    default:
      return null;
  }
};

export default QuestionRenderer;
