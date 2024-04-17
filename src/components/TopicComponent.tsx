import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  topic: any;
}

const TopicComponent: React.FC<Props> = ({ topic }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked on topic: ", topic);
    navigate(`/topics/${topic.id}`);
  };
  return (
    <div
      className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
      onClick={handleClick}
    >
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={topic.imageUrl}
        alt="blog"
      />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          TOPIC
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {topic.name}
        </h1>
        <p className="leading-relaxed mb-3 h-24 text-wrap truncate">
          {topic.description}
        </p>
        <div className="flex items-center justify-between flex-wrap ">
          <div className="bg-light-blue-color px-1 py-0.2 rounded-[4px]">
            {topic.numberOfLessons} Lessons
          </div>
          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Learn
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopicComponent;
