import React, { useEffect } from "react";
import TopicComponent from "./components/TopicComponent";
import FavoriteIcon from "./assets/icons/favorite.svg?react";
import { FlashcardArray } from "react-quizlet-flashcard";
import FlashCardAnswer from "./components/FlashCardAnswer";
interface FlashcardLearningProps {
  // Define your component props here
}

const FlashcardLearning: React.FC<FlashcardLearningProps> = () => {
  // Add your component logic here
  const topic = [
    {
      name: "Katakana",
      numberOfCards: 12,
    },
    {
      name: "Hiragana",
      numberOfCards: 12,
    },
    {
      name: "Kanji",
      numberOfCards: 12,
    },
  ];
  const cards = [
    {
      id: 1,
      frontHTML: "What is the capital of <u>Alaska</u>?",
      backHTML: "Juneau",
    },
    {
      id: 2,
      frontHTML: "What is the capital of California?",
      backHTML: "Sacramento",
    },
    {
      id: 3,
      frontHTML: "What is the capital of New York?",
      backHTML: "Albany",
    },
    {
      id: 4,
      frontHTML: "What is the capital of Florida?",
      backHTML: "Tallahassee",
    },
    {
      id: 5,
      frontHTML: "What is the capital of Texas?",
      backHTML: "Austin",
    },
    {
      id: 6,
      frontHTML: "What is the capital of New Mexico?",
      backHTML: "Santa Fe",
    },
    {
      id: 7,
      frontHTML: "What is the capital of Arizona?",
      backHTML: "Phoenix",
    },
  ];

  useEffect(() => {}, []); // TODO: add logic for favorite button toggle

  return (
    <div className="w-full flex flex-row gap-10 px-14">
      <div className="w-2/3 flex flex-col items-start">
        <div className="text-secondary-text-color text-sm font-bold">TOPIC</div>
        <div className="w-full flex flex-row gap-12 items-center">
          <div className="text-3xl font-semibold">Marketing Vocabulary</div>
          <button className="bg-primary-color text-white px-4 py-1 rounded-md">
            Create a Quiz
          </button>
          <button className="bg-white text-primary-color ml-auto px-4 py-1 rounded-md">
            <FavoriteIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="w-full items-center">
          <FlashcardArray
            FlashcardArrayStyle={{ background: "var(--light-blue-color);" }}
            cards={cards}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          {cards.map((card, index) => (
            <FlashCardAnswer
              key={index}
              question={card.frontHTML}
              answer={card.backHTML}
            />
          ))}
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-4 items-start">
        <div className="text-xl font-medium">Other lessons in this topic</div>
        {topic.map((topicItem, index) => (
          <TopicComponent key={index} topic={topicItem} />
        ))}
      </div>
    </div>
  );
};

export default FlashcardLearning;
