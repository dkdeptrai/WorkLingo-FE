import React, { useEffect, useState } from "react";
import topicsService from "../services/topics.service";
import { useParams, useSearchParams } from "react-router-dom";
import FlashCardTemplate from "../components/FlashCardTemplate";
import EmptyFlashcardsIcon from "../assets/icons/empty_flashcards_icon.svg?react";
import { useAuth } from "../contexts/AuthContext";
import lessonsService from "../services/lessons.service";

interface Props {
  // Define your component props here
}

const CreateLessonPage: React.FC<Props> = () => {
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("topicId");
  const [topic, setTopic] = useState(null);
  const [lessonName, setLessonName] = useState("Untitled Lesson");
  const [privacy, setPrivacy] = useState("Private");
  const [flashcards, setFlashcards] = useState([]);
  const [currentRenderIndex, setCurrentRenderIndex] = useState(0);

  const fetchTopic = async () => {
    await topicsService.getTopic(topicId!).then((data) => {
      setTopic(data);
    });
  };

  const handleNewCard = () => {
    let newFlashcards = [...flashcards];
    newFlashcards.push({
      question: "",
      answer: "",
      key: flashcards.length,
      renderIndex: currentRenderIndex,
    });
    setCurrentRenderIndex(currentRenderIndex + 1);
    setFlashcards(newFlashcards);
  };

  const handleRemoveCard = (index: number) => {
    console.log("Removing card: ", index);
    const updatedFlashcards = flashcards.filter(
      (flashcard) => flashcard.key !== index
    );
    console.log("Updated flashcards: ", updatedFlashcards);

    const reindexedFlashcards = updatedFlashcards.map((flashcard, i) => ({
      ...flashcard,
      key: i,
    }));
    setFlashcards(reindexedFlashcards);
  };

  const handleUpdateCard = (index, field, value) => {
    setFlashcards(
      flashcards.map((flashcard, i) => {
        if (i === index) {
          return { ...flashcard, [field]: value };
        }
        return flashcard;
      })
    );
    console.log(flashcards);
  };

  const checkForEmptyFields = () => {
    const invalidFlashcards = flashcards.filter(
      (flashcard) => flashcard.question === "" || flashcard.answer === ""
    );
    return invalidFlashcards;
  };

  const handlePublish = async () => {
    const invalidFlashcards = checkForEmptyFields();
    console.log(invalidFlashcards);
    if (invalidFlashcards.length > 0) {
      const updatedFlashcards = flashcards.map((flashcard) => {
        const isInvalid = invalidFlashcards.some(
          (invalidFlashcard) => invalidFlashcard.key === flashcard.key
        );
        return { ...flashcard, error: isInvalid };
      });
      setFlashcards(updatedFlashcards);
      console.log("setFlashcards is called");
    } else {
      try {
        await lessonsService.createNewLesson(
          topicId!,
          lessonName,
          privacy,
          flashcards
        );
        setFlashcards([]);
        setLessonName("Untitled Lesson");
        setCurrentRenderIndex(0);
        setPrivacy("Private");
        alert("Lesson created successfully");
      } catch (error) {
        alert(`Error creating lesson ${error}`);
      }
    }
  };

  useEffect(() => {
    console.log(privacy);
  }, [privacy]);

  useEffect(() => {
    fetchTopic();
  }, []);

  useEffect(() => {}, [flashcards]);

  return (
    <div className="flex flex-col sm:flex-row mt-4 ">
      <div className="sidebar border-2 border-input-border-color w-full sm:w-1/4 h-auto sm:h-screen flex flex-col gap-8 px-4 py-4 rounded sticky top-0">
        <input
          className="border-2 border-input-border-color rounded font-semibold"
          type="text"
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
        />
        <div className="bg-text-padding-color px-3 py-1 rounded-[3px]">
          {topic ? topic.name : ""}
        </div>
        <select
          className="bg-input-border-color py-1 rounded"
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
        >
          <option>Private</option>
          <option>Public</option>
        </select>
        <button
          className="bg-primary-color text-white px-10 py-2 rounded hover:bg-dark-blue-color"
          onClick={handlePublish}
        >
          Publish
        </button>
      </div>
      <div className="cards-area w-full sm:w-3/4 flex flex-col gap-4 p-8">
        <button
          className="w-auto bg-primary-color text-white self-end px-2 py-1 rounded sticky top-0"
          onClick={handleNewCard}
        >
          New Card
        </button>
        {flashcards.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <EmptyFlashcardsIcon />
            <p className="text-lg font-semibold">No flashcard yet</p>
          </div>
        ) : (
          flashcards.map((flashcard) => (
            <FlashCardTemplate
              key={flashcard.renderIndex}
              error={flashcard.error}
              keyProp={flashcard.key}
              question={flashcard.question}
              answer={flashcard.answer}
              onDelete={() => handleRemoveCard(flashcard.key)}
              onUpdate={handleUpdateCard}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CreateLessonPage;
