import React, { useState } from "react";
import FlashcardIcon from "../assets/icons/flashcard_icon.svg?react";
import DeleteIcon from "../assets/icons/delete_icon.svg?react";

interface FlashCardTemplateProps {
  question: string;
  answer: string;
  error: boolean;
  onDelete: () => void;
  onUpdate: (index: number, field: string, value: string) => void;
  keyProp: number;
}

const FlashCardTemplate: React.FC<FlashCardTemplateProps> = ({
  question,
  answer,
  error,
  onDelete,
  onUpdate,
  keyProp,
}) => {
  console.log(`FlashCardTemplate received props:`, {
    question,
    answer,
    keyProp,
  });
  const [questionLength, setQuestionLength] = useState(question.length);
  const [answerLength, setAnswerLength] = useState(answer.length);

  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setQuestionLength(event.target.value.length);
    onUpdate(keyProp, "question", event.target.value);
  };

  const handleAnswerChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAnswerLength(event.target.value.length);
    onUpdate(keyProp, "answer", event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 bg-white border-[1px] border-input-border-color p-2 w-full rounded-md">
      <div className="w-full flex flex-row items-center gap-2 font-medium">
        <FlashcardIcon /> Flashcard {keyProp + 1}
        <div className="text-red-500">
          {error ? "Please fill in all the fields!" : ""}
        </div>
        <button className="bg-transparent rounded border-[1px] border-input-border-color ml-auto">
          <DeleteIcon onClick={onDelete} />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="question" className="text-sm font-medium">
          Question:
        </label>
        <textarea
          maxLength={100}
          id="question"
          className="w-full border-[1px] border-input-border-color rounded-md p-2"
          placeholder="Question"
          onChange={handleQuestionChange}
        ></textarea>
        <div className="text-right text-sm">{questionLength} / 100</div>
        <label htmlFor="answer" className="text-sm font-medium">
          Answer:
        </label>
        <textarea
          maxLength={100}
          id="answer"
          className="w-full border-[1px] border-input-border-color rounded-md p-2"
          placeholder="Answer"
          onChange={handleAnswerChange}
        ></textarea>
        <div className="text-right text-sm">{answerLength} / 100</div>
      </div>
    </div>
  );
};

export default FlashCardTemplate;
