import React from "react";
import Flickity from "react-flickity-component";
import TopicImage from "../../assets/icons/topics.png";
import Card from "../../components/Card";
import "../../flickity.css";

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
  autoPlay: 5000,
  pageDots: false,
  prevNextButtons: false,
};
const cards = [
  {
    lessonName: "Lesson 1",
    flashcardCount: 10,
    rating: 5,
    creatorName: "John Doe",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
  },
  {
    lessonName: "Lesson 2",
    flashcardCount: 20,
    rating: 4,
    creatorName: "Jane Doe",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
  },
  {
    lessonName: "Lesson 3",
    flashcardCount: 30,
    rating: 3,
    creatorName: "John Smith",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
  },
  {
    lessonName: "Lesson 4",
    flashcardCount: 40,
    rating: 2,
    creatorName: "Jane Smith",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
  },
  {
    lessonName: "Lesson 5",
    flashcardCount: 50,
    rating: 1,
    creatorName: "John Doe",
    creatorAvatar:
      "https://salt.tikicdn.com/cache/280x280/ts/product/4f/25/95/a569eb6c41f6fb2b1d42c5433441fb8b.jpg",
  },
];

const HomePage: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex py-12 flex-col items-center">
        <div className=" mr-auto ml-12 w-full">
          <h6 className="text-2xl font-bold text-black text-left m-3">
            Recently Lessons
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
                  <div className="carousel-cell p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={TopicImage}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          The Catalyzer
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
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
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-cell p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={TopicImage}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          The 400 Blows
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
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
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-cell p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={TopicImage}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Shooting Stars
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
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
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-cell p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={TopicImage}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          The Catalyzer
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
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
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-cell p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={TopicImage}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          The 400 Blows
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
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
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-cell p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={TopicImage}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Shooting Stars
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
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
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Flickity>
              </div>
            </section>
          </div>

          <h6 className="text-2xl font-bold text-black text-left m-3 mt-12">
            Because you have studied the lesson of tanoshiikitsune
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
                />
              ))}
            </Flickity>
          </div>
          <h6 className="text-2xl font-bold text-black text-left m-3 mt-12">
            Famous memory cards
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
              {cards.map((card, index) => (
                <Card
                  key={index}
                  lessonName={card.lessonName}
                  flashcardCount={card.flashcardCount}
                  rating={card.rating}
                  creatorName={card.creatorName}
                  creatorAvatar={card.creatorAvatar}
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
