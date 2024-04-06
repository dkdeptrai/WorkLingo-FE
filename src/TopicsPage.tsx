import React from "react";
import TopicComponent from "./components/TopicComponent";

interface TopicsPageProps {
  // Add any props you need for the TopicsPage component
}

const TopicsPage: React.FC<TopicsPageProps> = () => {
  // Add your component logic here

  return (
    <>
      <div className="flex flex-col gap-12 mx-10">
        <div className="text-5xl font-semibold bg-[url('./assets/office.png')] bg-no-repeat bg-auto bg-center py-20 rounded-[8px]">
          {/* //TODO: replace with topic names fetched from API
           */}
          {"In the Office"}
        </div>
        <div>
          {/* //TODO: Replace with number of lesson
           */}
          <div className="text-3xl font-semibold text-start">12 Topics</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          <TopicComponent topic={{ name: "john", numberOfCards: 12 }} />
          {/* //TODO: Add Pagination */}
        </div>
      </div>
    </>
  );
};

export default TopicsPage;
