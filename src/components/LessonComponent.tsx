import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
import DefaultUserIcon from "../assets/icons/default_user_icon.svg?react";

interface Props {
  lesson: any;
}

const LessonComponent: React.FC<Props> = ({ lesson: lesson }) => {
  const navigate = useNavigate();
  const [author, SetAuthor] = useState(null);

  const handleClick = () => {
    navigate(`/lessons/${lesson.id}`);
  };

  const fetchAuthor = async () => {
    const user = await userService.getUser(lesson.authorId);
    SetAuthor(user);
  };

  useEffect(() => {
    fetchAuthor();
  }, []);

  return (
    author && (
      <div
        className="w-full flex flex-col gap-4 items-start font-semibold bg-dark-blue-color p-4 rounded-[16px]"
        onClick={handleClick}
      >
        <div className="text-white ">{lesson.title}</div>
        <div className="text-xs w-full flex flex-row justify-between items-center">
          <div className="bg-white px-[8px] py-[2px] rounded-[200px]">
            {lesson.numberOfFlashcards} Cards
          </div>
          <div className="text-white">⭐ 5.0 (100 ratings)</div>
        </div>
        <div className="text-xs flex flex-row mt-8 items-center">
          {author.avatarUrl ? (
            <img
              className="object-scale-down h-8 w-8 flex-auto rounded-full"
              src={author.avatarUrl}
              alt="Image"
            />
          ) : (
            <DefaultUserIcon className="h-8 w-8" />
          )}
          <div className="text-white ml-2">
            {" "}
            {`${author.firstname} ${author.lastname}`}
          </div>
          <div className="bg-white px-[8px] py-[2px] ml-2 rounded-[200px]">
            {author.jobTitle ? author.jobTitle : "Teacher"}
          </div>
        </div>
      </div>
    )
  );
};

export default LessonComponent;
