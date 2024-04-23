import React, { useEffect, useState } from "react";
import LessonComponent from "../components/LessonComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LessonsService from "../services/lessons.service";
import topicsService from "../services/topics.service";
import ForwardArrowIcon from "../assets/icons/forward_arrow_icon.svg?react";
import PreviousArrowIcon from "../assets/icons/previous_arrow_icon.svg?react";

interface LessonsPageProps {
  // Add any props you need for the TopicsPage component
}

interface Topic {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  numberOfLessons: number;
}

const LessonsPage: React.FC<LessonsPageProps> = () => {
  // Add your component logic here
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    size: 10,
    totalPages: 0,
  });

  const topicId = useParams<{ id: string }>().id;

  const [lessons, setLessons] = useState([]);
  const [topic, setTopic] = useState<Topic | null>(null);

  const handleCreateLesson = () => {
    navigate(`/lessons/create?topicId=${topicId}`);
  };

  const fetchLessons = async () => {
    try {
      const data = await topicsService.getLessonsInTopic(
        topicId!,
        paginationModel.page,
        paginationModel.size
      );
      setLessons(data.results);
      setPaginationModel({
        ...paginationModel,
        totalPages: data.totalPages,
      });
    } catch (error) {
      console.error("Error fetching lessons: ", error);
      throw error;
    }
  };

  const handlePreviousClick = () => {
    if (paginationModel.page === 0) {
      return;
    }
    setPaginationModel({
      ...paginationModel,
      page: paginationModel.page - 1,
    });
  };

  const handleForwardClick = () => {
    console.log(paginationModel);
    if (paginationModel.page === paginationModel.totalPages - 1) {
      return;
    }
    setPaginationModel({
      ...paginationModel,
      page: paginationModel.page + 1,
    });
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
  }, [paginationModel.page]);

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
        <div className="flex flex-row justify-between">
          <div className="text-3xl font-semibold text-start">
            {topic?.numberOfLessons} Lessons
          </div>
          <div>
            <button
              className="bg-transparent px-3 py-1 border-2 border-primary-color rounded-[2px] text-primary-color"
              onClick={handleCreateLesson}
            >
              Create your lesson
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <LessonComponent lesson={lesson} />
          ))}
        </div>
        <div className="flex flex-row gap-2 self-center">
          <PreviousArrowIcon onClick={handlePreviousClick} />
          <div>{paginationModel.page + 1}</div>
          <ForwardArrowIcon onClick={handleForwardClick} />
        </div>
      </div>
    </>
  );
};

export default LessonsPage;
