import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import TopicImage from "../../assets/icons/topics.png";
import Card from "../../components/Card";
import "../../flickity.css";
import SetOfFlashcards from "../../components/SetOfFlashcards";
import FamousQuoteCard from "../../components/FamousQuoteCard";
import Topic from "../../components/Topic";
import LessonComponent from "../../components/LessonComponent";
import topicsService from "../../services/topics.service";
import TopicComponent from "../../components/TopicComponent";
import { useAuth } from "../../contexts/AuthContext";
import userService from "../../services/user.service";
import { Divider } from "@mui/material";
import PreviousArrowIcon from "../../assets/icons/previous_arrow_icon.svg?react";
import ForwardArrowIcon from "../../assets/icons/forward_arrow_icon.svg?react";

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true,
};

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const [recentLessons, setRecentLessons] = useState([]);
  const [yourLessons, setYourLessons] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    size: 3,
    totalPages: 0,
  });

  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setTopics(
          await topicsService.getTopics(
            paginationModel.page,
            paginationModel.size
          )
        );
      } catch (error) {
        console.error("Error fetching topics: ", error);
        throw error;
      }
    };
    fetchTopics();
  }, []);

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
        setYourLessons(response.results);
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

  return (
    <div className="text-gray-600 body-font w-full h-full">
      <div className="container mx-auto flex py-3 flex-col items-center">
        <div className=" mr-auto p-5 w-full">
          {/* <h6 className="text-2xl font-bold text-black text-left m-3">
            Recently Lessons
          </h6>
          <div className="container w-auto px-5 w-full">
            <Flickity
              className="carousel w-full"
              options={flickityOptions}
              elementType="div"
              reloadOnUpdate
              static
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  lessonName={card.lessonName}
                  flashcardCount={card.flashcardCount}
                  rating={card.rating}
                  creatorName={card.creatorName}
                  creatorAvatar={card.creatorAvatar}
                  numberOfRating={card.numberOfRating}
                />
              ))}
            </Flickity>
          </div> */}
          <div className="mt-12">
            <h6 className="text-2xl font-bold text-black text-left m-3 mt-12">
              Favorite lessons
            </h6>
            {/* <div className="px-5 mx-auto">
              <Flickity
                className="carousel w-full"
                options={flickityOptions}
                elementType="div"
                reloadOnUpdate
                static
              >
              {yourLessons.map((lesson, index) => (
                <div className="carousel-cell p-4 md:w-1/3" key={index}>
                  <LessonComponent lesson={lesson} />
                </div>
              ))}
              </Flickity>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
              {yourLessons.map((lesson) => (
                <LessonComponent lesson={lesson} />
              ))}
            </div>
            <div className="flex flex-col items-center mt-4">
              <div className="flex flex-row gap-2 self-center">
                <PreviousArrowIcon onClick={handlePreviousClick} />
                <div>{paginationModel.page + 1}</div>
                <ForwardArrowIcon onClick={handleForwardClick} />
              </div>
            </div>

            <div className="text-gray-600 body-font">
              <h6 className="text-2xl font-bold text-black text-left m-3">
                Hot Topics
              </h6>
              <div className="px-5 mx-auto">
                <Flickity
                  className="carousel w-full"
                  options={flickityOptions}
                  elementType="div"
                  reloadOnUpdate
                  static
                >
                  {topics.map((topic) => (
                    <div className="carousel-cell p-4 md:w-1/3">
                      <TopicComponent topic={topic} />
                    </div>
                  ))}
                </Flickity>
              </div>
            </div>
          </div>

          {/* <h6 className="text-2xl font-bold text-black text-left m-3 mt-12">
            Famous quotes
          </h6> */}
          {/* <div className="container px-5 w-auto  w-full">
            <Flickity
              className="carousel w-full"
              options={flickityOptions}
              elementType="div"
              reloadOnUpdate
              static
            >
              {quote.map((quote, index) => (
                <FamousQuoteCard
                  key={index}
                  quote={quote.quote}
                  author={quote.author}
                />
              ))}
            </Flickity>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
