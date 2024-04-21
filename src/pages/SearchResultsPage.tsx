import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import topicsService from "../services/topics.service";
import Search from "../assets/icons/search.svg?react";
import ForwardArrowIcon from "../assets/icons/forward_arrow_icon.svg?react";
import PreviousArrowIcon from "../assets/icons/previous_arrow_icon.svg?react";
import TopicComponent from "../components/TopicComponent";
interface SearchResultsPageProps {
  // Define your props here
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = () => {
  // Add your component logic here
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [topics, setTopics] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
    totalPage: 0,
  });
  const fetchSearchResults = async () => {
    // Fetch search results based on search query
    const data = await topicsService.searchByTitle(
      searchParams.get("searchQuery")!,
      paginationModel.page,
      paginationModel.pageSize
    );
    const newpaginationModel = {
      ...paginationModel,
      totalPage: data.totalPages,
    };
    setPaginationModel(newpaginationModel);
    setTopics(data.results);
    console.log(data);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Search for: ", searchTerm);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [paginationModel.page, paginationModel.pageSize]);

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-row gap-4 items-center border-2 border-input-border-color p-2 rounded w-3/5">
        <Search />
        <input
          type="text"
          placeholder="Search for Topics"
          onKeyDown={handleKeyDown}
          className="w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      <h1>Search Results for {searchParams.get("searchQuery")}</h1>
      <div className="grid grid-cols-3 gap-4">
        {topics && topics.map((topic) => <TopicComponent topic={topic} />)}
      </div>
      <div className="flex flex-row gap-2 h-auto self-center">
        <PreviousArrowIcon
          onClick={() => {
            if (paginationModel.page === 0) return;
            setPaginationModel({
              ...paginationModel,
              page: paginationModel.page - 1,
            });
          }}
        />
        {paginationModel.page + 1} / {paginationModel.totalPage}
        <ForwardArrowIcon
          onClick={() => {
            if (paginationModel.page === paginationModel.totalPage - 1) return;
            setPaginationModel({
              ...paginationModel,
              page: paginationModel.page + 1,
            });
          }}
        />
      </div>
    </div>
  );
};

export default SearchResultsPage;
