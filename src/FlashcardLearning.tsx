import React, { useEffect } from "react";
import LessonComponent from "./components/LessonComponent";
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

  // TODO: Write function to fetch and convert to cards list

  const cards = [
    {
      frontHTML: `What is the capital of Alaska?`,
      backHTML: "Juneau",
    },
    {
      frontHTML: "What is the capital of California?",
      backHTML: "Sacramento",
    },
    {
      frontHTML: "What is the capital of New York?",
      backHTML: "Albany",
    },
    {
      frontHTML: "What is the capital of Florida?",
      backHTML: "Tallahassee",
    },
    {
      frontHTML: "What is the capital of Texas?",
      backHTML: "Austin",
    },
    {
      frontHTML: "What is the capital of New Mexico?",
      backHTML: "Santa Fe",
    },
    {
      frontHTML: "What is the capital of Arizona?",
      backHTML: "Phoenix",
    },
  ];

  useEffect(() => {}, []); // TODO: add logic for favorite button toggle

  return (
    <div className="bg-background-color w-full flex flex-row gap-10 px-14">
      <div className="w-3/4 flex flex-col items-start">
        <div className="text-secondary-text-color text-sm font-bold my-2">
          TOPIC
        </div>
        {/* // TODO: replace with variable */}
        <div className="bg-text-padding-color px-3 py-1 rounded-[3px]">
          {"In the office"}
        </div>
        <div className="w-full flex flex-row gap-12 items-center my-6 ">
          <div className="text-3xl font-semibold">Marketing Vocabulary</div>
          <button className="bg-primary-color text-white px-4 py-1 rounded-md">
            Create a Quiz
          </button>
          <button className="bg-white text-primary-color ml-auto px-4 py-1 rounded-md">
            <FavoriteIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="w-full h-auto items-center">
          <FlashcardArray
            FlashcardArrayStyle={{
              width: "100%",
              height: "100%",
              fontSize: "2rem",
            }}
            frontContentStyle={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--light-blue-color)",

              // Additional styles for the front content
            }}
            backContentStyle={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--light-blue-color)",

              // Additional styles for the back content
            }}
            cards={cards}
          />
        </div>
        <div className="flex flex-row my-4">
          <img
            className="object-scale-down h-14 w-14 flex-auto rounded-full mr-4"
            src="https://picsum.photos/200"
            alt=""
          />
          <div className="flex flex-col items-start">
            {/* TODO: replace with variable */}
            <div className="text-xl font-medium">John Doe</div>
            <div className="text-lg font-sm">Teacher</div>
          </div>
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
      <div className="w-1/4 flex flex-col gap-4 items-start">
        <div className="text-xl font-medium">Other lessons in this topic</div>
        {topic.map((topicItem, index) => (
          <LessonComponent key={index} topic={topicItem} />
        ))}
      </div>
    </div>
  );
};

export default FlashcardLearning;
