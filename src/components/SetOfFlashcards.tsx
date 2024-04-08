import React from "react";

interface SetOfFlashcardsProps {
  setOfFlashcardsImage: string;
  title: string;
  description: string;
  author: string;
  numberOfAnswers: number;
}

const SetOfFlashcards: React.FC<SetOfFlashcardsProps> = ({
  setOfFlashcardsImage,
  title,
  description,
  author,
  numberOfAnswers,
}) => {
  // Add your component logic here

  return (
    <div className="p-3">
      <div className="flex flex-row bg-[#064580] border-opacity-60 rounded-lg w-96 h-48">
        <div className="p-3 flex">
          <img
            src={setOfFlashcardsImage}
            alt="set of flashcards"
            className="max-w-40 max-h-40 rounded-lg items-center justify-center my-auto"
          />
        </div>
        <div className="flex flex-col">
          <div className="mt-3 ">
            <h3 className="text-xl text-white font-bold text-lg font-bold">
              {title}
            </h3>
          </div>
          <article className="">
            <p className="text-sm text-white font-normal">{description}</p>
          </article>

          <p className="text-sm text-white font-normal">{author}</p>

          <p className="text-black text-sm bg-white rounded-full p-2 mb-2 font-semibold mt-auto max-w-24 mx-auto">
            {numberOfAnswers} answers
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetOfFlashcards;
