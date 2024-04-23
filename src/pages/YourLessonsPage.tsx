import React, { useEffect, useState } from "react";
import LessonComponent from "../components/LessonComponent";
import { useNavigate, useParams } from "react-router-dom";
import topicsService from "../services/topics.service";
import userService from "../services/user.service";
import { useAuth } from "../contexts/AuthContext";
import ForwardArrowIcon from "../assets/icons/forward_arrow_icon.svg?react";
import PreviousArrowIcon from "../assets/icons/previous_arrow_icon.svg?react";

interface YourLessonsPageProps {
  // Add any props you need for your component here
}

const YourLessonsPage: React.FC<YourLessonsPageProps> = () => {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useAuth();

  const topicId = useParams<{ id: string }>().id;
  const [user, setUser] = useState(null);

  const [lessons, setLessons] = useState([]);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    size: 10,
    totalPages: 0,
  });
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
    if (paginationModel.page === paginationModel.totalPages - 1) {
      return;
    }
    setPaginationModel({
      ...paginationModel,
      page: paginationModel.page + 1,
    });
  };
  const fetchLessons = async () => {
    try {
      console.log("user", user);
      if (user) {
        const response = await userService.getLessonsByUser(user.id);
        setLessons(response.results);
        setPaginationModel({
          ...paginationModel,
          totalPages: response.totalPages,
        });
      }
    } catch (error) {
      console.error("Error fetching lessons: ", error);
      throw error;
    }
  };

  useEffect(() => {
    setUser(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null
    );
    console.log("user", user);
  }, []);

  useEffect(() => {
    fetchLessons();
  }, [user]);

  if (user === null) {
    return <div>loading</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-12 mx-10">
        <div className="flex flex-row justify-between">
          <div className="text-3xl font-semibold text-start">Your Lessons</div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <LessonComponent lesson={lesson} />
          ))}

          {/* //TODO: Add Pagination */}
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

export default YourLessonsPage;
