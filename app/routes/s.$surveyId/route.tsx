import { useParams } from "@remix-run/react";
import {
  InformationCircleIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  PhoneXMarkIcon,
  ChatBubbleBottomCenterTextIcon,
  HandRaisedIcon,
  UsersIcon,
  EllipsisVerticalIcon,
  // ClosedCaptionIcon,
} from "@heroicons/react/24/solid";

import QuestionRenderer from "@/components/survey/question-renderer";
import { useState } from "react";
import MultipleChoiceQuestion from "@/components/survey/multiple-choice-questions";

const questions = [
  {
    id: "q1",
    type: "text",
    title: "Please enter the approximate revenue of the company GrowthLoop",
    validations: {
      required: false,
      max_length: 10,
    },
    properties: {
      description: "Please enter the revenue in USD",
    },
    ai: {
      enabled: true,
      properties: {
        context: "some context about the question",
        followups: {
          enabled: true,
          max_followups: 10,
          instructions: "some info on what specifically to focus on",
        },
        optimize_question_text: true,
        skippable: true,
      },
    },
  },
  {
    id: "q2",
    type: "opinion_scale",
    title: "How would you rate your experience with us?",
    properties: {
      steps: 11,
      start_at_one: false,
      labels: {
        left: "poor",
        center: "great",
        right: "awesome",
      },
    },
    validations: {
      required: false,
    },
  },
  {
    id: "q3",
    type: "ranking",
    title:
      "If you could please help rank the companies based on their importance and impact in the electric vehicles market",
    properties: {
      choices: [
        {
          label: "Tesla",
        },
        {
          label: "Ford",
        },
        {
          label: "BYD",
        },
      ],
    },
    validations: {
      required: false,
    },
  },
  {
    id: "q4",
    type: "matrix",
    title:
      "Which competitors of GrowthLoop would you describe as direct and indirect? Are there any new entrants or established players in the market?",
    properties: {
      rows: [
        {
          label: "BrilliantNoise",
        },
        {
          label: "Dinmo",
        },
        {
          label: "GWI",
        },
      ],
      columns: [
        {
          label: "Direct",
        },
        {
          label: "Indirect",
        },
        {
          label: "Established Player",
        },
        {
          label: "New Entrant",
        },
      ],
      allow_multiple_selection: false,
    },
    validations: {
      required: false,
    },
  },
  {
    id: "q5",
    type: "multiple_choice",
    title: "Which of the following companies have you worked in the past?",
    properties: {
      description: "Here are the choices",
      randomize: false,
      allow_multiple_selection: false,
      allow_other_choice: true,
      vertical_alignment: true,
      choices: [
        {
          label: "Palo Alto",
        },
        {
          label: "Sophos",
        },
        {
          label: "Rapid7",
        },
        {
          label: "Secureworks",
        },
        {
          label: "Other",
        },
      ],
    },
    validations: {
      required: false,
    },
  },
  {
    id: "q6",
    type: "statement",
    title:
      "Thank you for speaking with us. We are trying to learn about the cybersecurity solutions market...",
    properties: {
      show_quote_marks: true,
      button_text: "Continue",
    },
  },
];

export default function SurveyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

    // Move to the next question after answering
    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex((prev) => prev + 1), 300); // Smooth transition delay
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <MultipleChoiceQuestion
          question={questions[4]}
          onAnswer={handleAnswer}
        />
        {/* <QuestionRenderer
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
        /> */}
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white flex items-center justify-between px-4 py-2 shadow-lg">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Meeting Info */}
        <button className="flex items-center space-x-2 text-sm hover:bg-gray-700 px-3 py-2 rounded-md">
          <InformationCircleIcon className="h-6 w-6" />
          <span>Meeting details</span>
        </button>
      </div>

      {/* Center Section */}
      <div className="flex items-center space-x-6">
        {/* Microphone */}
        <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10">
          <MicrophoneIcon className="h-6 w-6" />
        </button>
        {/* Camera */}
        <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10">
          <VideoCameraIcon className="h-6 w-6" />
        </button>
        {/* End Call */}
        <button className="flex items-center justify-center bg-red-600 hover:bg-red-500 rounded-full w-12 h-12">
          <PhoneXMarkIcon className="h-6 w-6" />
        </button>
        {/* Captions */}
        {/* <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10">
          <ClosedCaptionIcon className="h-6 w-6" />
        </button> */}
        {/* Raise Hand */}
        <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10">
          <HandRaisedIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Participants */}
        <button className="flex items-center space-x-2 text-sm hover:bg-gray-700 px-3 py-2 rounded-md">
          <UsersIcon className="h-6 w-6" />
          <span>Participants</span>
        </button>
        {/* Chat */}
        <button className="flex items-center space-x-2 text-sm hover:bg-gray-700 px-3 py-2 rounded-md">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          <span>Chat</span>
        </button>
        {/* More Options */}
        <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10">
          <EllipsisVerticalIcon className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
}
