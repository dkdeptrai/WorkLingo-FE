import React from "react";
import Flickity from "react-flickity-component";
import TopicImage from "../../assets/icons/topics.png";
import Card from "../../components/Card";
import "../../flickity.css";
import SetOfFlashcards from "../../components/SetOfFlashcards";
import FamousQuoteCard from "../../components/FamousQuoteCard";
import Topic from "../../components/Topic";

const flickityOptions = {
  freeScroll: true,
  contain: true,
  draggable: true,
};

const Topicdata = [
  {
    title: "Mathematics",
    img: TopicImage,
    description: "Mathematics is the study of numbers, quantities, and shapes.",
    category: "Math",
  },
  {
    title: "Science",
    img: TopicImage,
    description: "Science is the study of the physical and natural world.",
    category: "Science",
  },
  {
    title: "History",
    img: TopicImage,
    description: "History is the study of past events.",
    category: "History",
  },
  {
    title: "Art",
    img: TopicImage,
    description: "Art is the expression of human creativity and imagination.",
    category: "Art",
  },
  {
    title: "Music",
    img: TopicImage,
    description: "Music is the art of arranging sounds in time.",
    category: "Music",
  },
  {
    title: "Literature",
    img: TopicImage,
    description: "Literature is written works, especially those considered to have superior or lasting artistic merit.",
    category: "Literature",
  },
]

const quote = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
];
const cards = [
  {
    lessonName: "Lesson 1",
    flashcardCount: 10,
    rating: 5,
    creatorName: "John Doe",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    numberOfRating: 100,
  },
  {
    lessonName: "Lesson 2",
    flashcardCount: 20,
    rating: 4,
    creatorName: "Jane Doe",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    numberOfRating: 100,
  },
  {
    lessonName: "Lesson 3",
    flashcardCount: 30,
    rating: 3,
    creatorName: "John Smith",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    numberOfRating: 100,
  },
  {
    lessonName: "Lesson 4",
    flashcardCount: 40,
    rating: 2,
    creatorName: "Jane Smith",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    numberOfRating: 100,
  },
  {
    lessonName: "Lesson 5",
    flashcardCount: 50,
    rating: 1,
    creatorName: "John Doe",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    numberOfRating: 100,
  },
];

const setOfFlashcards = [
  {
    setOfFlashcardsImage:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    title: "Calculus: Derivatives",
    description: "Calculus is the mathematical study of continuous change.",
    numberOfAnswers: 10,
    author: "John Doe",
  },
  {
    setOfFlashcardsImage:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    title: "Organic Chemistry: Alkanes",
    description: "Organic chemistry is the study of the structure",
    numberOfAnswers: 10,
    author: "John Doe",
  },
  {
    setOfFlashcardsImage:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    title: "Physics: Newton's Laws of Motion",
    description: "Physics is the natural science that studies matter",
    numberOfAnswers: 10,
    author: "John Doe",
  },
  {
    setOfFlashcardsImage:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
    title: "Calculus: Integrals",
    description: "Calculus is the mathematical study of continuous change.",
    numberOfAnswers: 10,
    author: "John Doe",
  },
];

const HomePage: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex py-3 flex-col items-center">
        <div className=" mr-auto p-5 w-full">
          <h6 className="text-2xl font-bold text-black text-left m-3">
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
          </div>
          <div className="mt-12">
            <section className="text-gray-600 body-font">
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
                  {Topicdata.map((topic, index) => (
                    <Topic
                      key={index}
                      title={topic.title}
                      description={topic.description}
                      img={topic.img}
                      category={topic.category}
                    />
                  ))}  
                </Flickity>              

              </div>
            </section>
          </div>

          <h6 className="text-2xl font-bold text-black text-left m-3 mt-12">
            Favorite lessons
          </h6>
          <div className="container px-5 w-auto  w-full">
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
          </div>
          <h6 className="text-2xl font-bold text-black text-left m-3 mt-12">
            Famous quotes
          </h6>
          <div className="container px-5 w-auto  w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
