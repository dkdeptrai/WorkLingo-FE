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
    <div className="h-14 bg-light-blue-color flex flex-row items-center gap-4 rounded-xl">
      <div className="w-40 border-e-2 border-primary-text-color my-3 px-8">
        {question}
      </div>

      <p className="">{answer}</p>
    </div>
  );
};

export default FlashCardAnswer;
