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
  const { user, setUser } = useAuth();

  const [lessons, setLessons] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    size: 9,
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
        const response = await userService.getLessonsByUser(
          user.id,
          paginationModel.page,
          paginationModel.size
        );
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
    fetchLessons();
  }, [paginationModel.page]);

  if (user === null) {
    return <div>loading</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-12 mx-10">
        <div className="flex flex-row justify-between items-center">
          <div className="text-3xl font-semibold text-start">Your Lessons</div>
        </div>
        {lessons.length === 0 ? (
          <div>You have not created any lesson</div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {lessons.map((lesson) => (
                <LessonComponent lesson={lesson} />
              ))}
            </div>
            <div className="flex flex-row gap-2">
              <PreviousArrowIcon onClick={handlePreviousClick} />
              <div>{paginationModel.page + 1}</div>
              <ForwardArrowIcon onClick={handleForwardClick} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default YourLessonsPage;
