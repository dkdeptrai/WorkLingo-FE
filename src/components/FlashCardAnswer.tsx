import React from "react";

interface FlashCardAnswerProps {
  question: string;
  answer: string;
}

const FlashCardAnswer: React.FC<FlashCardAnswerProps> = ({
  question,
  answer,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 h-14 bg-light-blue-color items-center gap-4 rounded-xl">
      <div className="col-span-1 border-e-2 border-primary-text-color px-8 font-semibold">
        {question}
      </div>

      <p className="col-span-3 text-wrap text-ellipsis">{answer}</p>
    </div>
  );
};

export default FlashCardAnswer;
