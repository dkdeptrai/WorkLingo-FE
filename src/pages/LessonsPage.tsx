import React, { useEffect, useState } from "react";
import LessonComponent from "../components/LessonComponent";
import { useLocation, useParams } from "react-router-dom";
import LessonsService from "../services/lessons.service";
import topicsService from "../services/topics.service";

interface TopicsPageProps {
  // Add any props you need for the TopicsPage component
}

interface Topic {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  numberOfLessons: number;
}

const LessonsPage: React.FC<TopicsPageProps> = () => {
  // Add your component logic here

  const topicId = useParams<{ id: string }>().id;

  const [lessons, setLessons] = useState([]);
  const [topic, setTopic] = useState<Topic | null>(null);

  const fetchLessons = async () => {
    const lessonService = new LessonsService(topicId!);
    try {
      setLessons(await lessonService.getLessons(0, 10));
    } catch (error) {
      console.error("Error fetching lessons: ", error);
      throw error;
    }
  };

  const fetchTopic = async () => {
    try {
      setTopic(await topicsService.getTopic(topicId!));
    } catch (error) {
      console.error("Error fetching topics: ", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchLessons();
    fetchTopic();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12 mx-10">
        <div
          className={`text-5xl font-semibold text-center py-20 rounded-[8px] relative`}
        >
          <div
            style={{
              backgroundImage: `url(${topic?.imageUrl})`,
              opacity: 0.3,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
            className="absolute inset-0 bg-no-repeat bg-auto bg-center"
          ></div>
          {topic?.name}
        </div>
        <div>
          <div className="text-3xl font-semibold text-start">
            {topic?.numberOfLessons} Lessons
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <LessonComponent topic={lesson} />
          ))}
          {/* //TODO: Add Pagination */}
        </div>
      </div>
    </>
  );
};

export default LessonsPage;
