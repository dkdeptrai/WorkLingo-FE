import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
import DefaultUserIcon from "../assets/icons/default_user_icon.svg?react";
import UpvoteIcon from "../assets/icons/upvote_icon.svg?react";
import DownvoteIcon from "../assets/icons/downvote_icon.svg?react";
import { set } from "date-fns";

interface Props {
  lesson: any;
}

const LessonComponent: React.FC<Props> = ({ lesson: lesson }) => {
  const navigate = useNavigate();
  const [author, SetAuthor] = useState(null);
  const [upvotes, setUpvotes] = useState();
  const [downvotes, setDownvotes] = useState();
  const [vote, setVote] = useState("");
  const handleClick = () => {
    navigate(`/lessons/${lesson.id}`);
  };

  const fetchAuthor = async () => {
    const user = await userService.getUser(lesson.authorId);
    SetAuthor(user);
  };

  useEffect(() => {
    fetchAuthor();
    setUpvotes(lesson.numberOfUpVotes);
    setDownvotes(lesson.numberOfDownVotes);
  }, []);

  return (
    author && (
      <div
        className="w-full h-[200px] flex flex-col gap-4 items-start font-semibold bg-dark-blue-color p-4 rounded-[16px]"
        onClick={handleClick}
      >
        <div className="text-white ">{lesson.title}</div>
        <div className="text-xs w-full flex flex-row justify-between items-center">
          <div className="bg-white px-[8px] py-[2px] rounded-[200px]">
            {lesson.numberOfFlashcards} Cards
          </div>
          <div className="flex flex-row gap-4 items-center ml-auto">
            <UpvoteIcon
              fill="white"
              className="w-6 h-6 bg-transparent text-primary-color"
            />
            <div className="text-white text-base">{upvotes}</div>
            <DownvoteIcon
              fill="white"
              className="w-6 h-6 bg-transparent text-primary-color"
            />
            <div className="text-white text-base">{downvotes}</div>
          </div>
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
