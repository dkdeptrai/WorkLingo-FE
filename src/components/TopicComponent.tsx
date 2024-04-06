import React from "react";

interface Props {
  topic: any;
}

interface Topic {
  // Define the properties of the Topic object here
}

const TopicComponent: React.FC<Props> = ({ topic }) => {
  // Add your component logic here
  return (
    <div className="w-full flex flex-col gap-4 items-start font-semibold bg-dark-blue-color p-4 rounded-[16px]">
      <div className="text-white ">{topic.name}</div>
      <div className="text-xs w-full flex flex-row justify-between items-center">
        <div className="bg-white px-[8px] py-[2px] rounded-[200px]">
          {topic.numberOfCards} Cards
        </div>
        <div className="text-white">⭐ 5.0 (100 ratings)</div>
      </div>
      <div className="text-xs flex flex-row mt-8 items-center">
        <img
          src="https://picsum.photos/200"
          alt="some pic"
          className="h-6 w-6 rounded-[50%]"
        />
        <div className="text-white ml-2">John Doe</div>
        <div className="bg-white px-[8px] py-[2px] ml-2 rounded-[200px]">
          Teacher
        </div>
      </div>
    </div>
  );
};

export default TopicComponent;
