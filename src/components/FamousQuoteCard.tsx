import React from "react";

interface FamousQuoteCardProps {
  quote: string;
  author: string;
}

const FamousQuoteCard: React.FC<FamousQuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="p-3">
      <div className="flex flex-col bg-[#064580] border-opacity-60 rounded-lg w-96 h-52">
        <p className="mr-auto p-3 text-white">- {author}</p>

        <h2 className="pl-3 text-white text-xxl font-bold">{quote}</h2>
      </div>
    </div>
  );
};

export default FamousQuoteCard;
