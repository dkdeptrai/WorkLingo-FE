import React from "react";

interface TopicProps {
  title: string;
    description: string;
    img: string;
    category: string;
}

const Topic: React.FC<TopicProps> = ({ title, description, img, category }) => {
return (
    <div className="carousel-cell p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={img}
                alt="blog"
            />
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {category}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {title}
                </h1>
                <p className="leading-relaxed mb-3">
                    {description}
                </p>
                <div className="flex items-center flex-wrap mt-auto">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span className="text-white rounded-lg inline-flex bg-[#1890FF] items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-r-2 p-2 border-gray-200">
                        100 lessons
                    </span>

                </div>
            </div>
        </div>
    </div>
);
};

export default Topic;
