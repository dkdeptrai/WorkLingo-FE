import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
import DefaultUserIcon from "../assets/icons/default_user_icon.svg?react";

interface Props {
  topic: any;
}

const LessonComponent: React.FC<Props> = ({ topic: lesson }) => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);
  console.log(lesson);
  const handleClick = () => {
    navigate(`/lessons/${lesson.id}`);
  };

  const fetchUser = async () => {
    const data = await userService.getUser(lesson.authorId);
    setAuthor(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div
      className="w-full flex flex-col gap-4 items-start font-semibold bg-dark-blue-color p-4 rounded-[16px]"
      onClick={handleClick}
    >
      <div className="text-white ">{lesson.title}</div>
      <div className="text-xs w-full flex flex-row justify-between items-center">
        <div className="bg-white px-[8px] py-[2px] rounded-[200px]">
          {lesson.numberOfCards} Cards
        </div>
        <div className="text-white">⭐ 5.0 (100 ratings)</div>
      </div>
      <div className="text-xs flex flex-row mt-8 items-center">
        {author ? (
          <img
            className="object-scale-down h-6 w-6 flex-auto rounded-full mr-4"
            src={author.avatarUrl}
            alt=""
          />
        ) : (
          <DefaultUserIcon className="h-6 w-6 flex-auto rounded-full mr-4" />
        )}
        {author && (
          <div className="flex flex-row gap-2">
            <div className="text-white ml-2">{`${author.firstname} ${author.lastname}`}</div>
            <div className="bg-white px-[8px] py-[2px] ml-2 rounded-[200px]">
              {author.jobTitle || "Teacher"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonComponent;
