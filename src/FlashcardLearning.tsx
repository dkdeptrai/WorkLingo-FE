import React, { useEffect, useState } from "react";
import LessonComponent from "./components/LessonComponent";
import FavoriteIcon from "./assets/icons/favorite.svg?react";
import { FlashcardArray } from "react-quizlet-flashcard";
import FlashCardAnswer from "./components/FlashCardAnswer";
import { useParams } from "react-router-dom";
import lessonsService from "./services/lessons.service";
import topicsService from "./services/topics.service";
import userService from "./services/user.service";
import DefaultUserIcon from "./assets/icons/default_user_icon.svg?react";
interface FlashcardLearningProps {
  // Define your component props here
}

interface flashcard {
  id: number;
  frontHTML: string;
  backHTML: string;
}

const FlashcardLearning: React.FC<FlashcardLearningProps> = () => {
  const lessonId = useParams<{ id: string }>().id;
  const [lesson, setLesson] = useState();
  const [topic, setTopic] = useState();
  const [flashcards, setFlashcards] = useState<flashcard[]>([]);
  const [lessons, setLessons] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [author, setAuthor] = useState(null);
  const fetchFlashcard = async () => {
    const cards = await lessonsService.getFlashcards(lessonId!);
    console.log(cards);
    setFlashcards(
      cards.map((card: any) => ({
        id: card.id,
        frontHTML: card.question,
        backHTML: card.answer,
      }))
    );
  };

  const fetchTopic = async () => {
    try {
      const data = await lessonsService.getTopicOfLesson(lessonId!);
      console.log(data);
      setTopic(data);
    } catch (error) {
      console.error("Error fetching lessons: ", error);
      throw error;
    }
  };

  const fetchLesson = async () => {
    try {
      const data = await lessonsService.getLesson(lessonId!);
      console.log(data);
      const author = await userService.getUser(data.authorId);
      console.log(author);
      setAuthor(author);
      setLesson(data);
    } catch (error) {
      console.error("Error fetching lessons: ", error);
      throw error;
    }
  };

  const fetchLessons = async () => {
    try {
      if (topic) {
        setLessons(await topicsService.getLessonsInTopic(topic.id, 0, 10));
      }
    } catch (error) {
      console.error("Error fetching lessons: ", error);
      throw error;
    }
  };

  const handleFavoriteToggle = async () => {
    // TODO: Handle Favorite
    // if (isFavorite) {
    //   await lessonsService.deleteFavoriteLesson(1, Number(lessonId));
    // } else {
    //   await lessonsService.addFavoriteLesson(1, Number(lessonId));
    // }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    fetchFlashcard();
    fetchTopic();
  }, [lessonId]);
  useEffect(() => {
    fetchLessons();
    fetchLesson();
  }, [topic]);

  // TODO: Write function to fetch and convert to cards list

  return (
    <div className="bg-background-color w-full flex flex-row gap-10 px-14">
      <div className="w-3/4 flex flex-col items-start">
        <div className="text-secondary-text-color text-sm font-bold my-2">
          TOPIC
        </div>
        {/* // TODO: replace with variable */}
        <div className="bg-text-padding-color px-3 py-1 rounded-[3px]">
          {topic ? topic.name : ""}
        </div>
        <div className="w-full flex flex-row gap-12 items-center my-6 ">
          <div className="text-3xl font-semibold">
            {lesson ? lesson.title : ""}
          </div>
          <button className="bg-primary-color text-white px-4 py-1 rounded-md">
            Create a Quiz
          </button>
          <button className="bg-transparent text-primary-color ml-auto px-4 py-1 rounded-md">
            {isFavorite ? (
              <FavoriteIcon
                fill="transparent"
                className="w-8 h-8"
                onClick={handleFavoriteToggle}
              />
            ) : (
              <FavoriteIcon
                fill="yellow"
                className="w-8 h-8"
                onClick={handleFavoriteToggle}
              />
            )}
          </button>
        </div>{" "}
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
              padding: "1rem",
              fontWeight: "semibold",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--light-blue-color)",
            }}
            backContentStyle={{
              width: "100%",
              height: "100%",
              padding: "1rem",
              textAlign: "center",
              fontSize: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--light-blue-color)",
            }}
            cards={flashcards}
          />
        </div>
        <div className="flex flex-row my-4">
          {author ? (
            <img
              className="object-scale-down h-14 w-14 flex-auto rounded-full mr-4"
              src={author.avatarUrl}
              alt=""
            />
          ) : (
            <DefaultUserIcon className="h-14 w-14 flex-auto rounded-full mr-4" />
          )}
          <div className="flex flex-col items-start">
            {author && (
              <div className="flex flex-col items-start">
                <div className="text-xl font-medium">{`${author.firstname} ${author.lastname}`}</div>
                <div className="text-lg font-sm">{author.jobTitle}</div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          {flashcards.map((card, index) => (
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
        {lessons.map(
          (lesson, index) =>
            lesson.id !== Number(lessonId) && (
              <LessonComponent key={index} topic={lesson} />
            )
        )}
      </div>
    </div>
  );
};

export default FlashcardLearning;
