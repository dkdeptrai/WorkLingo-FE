import React, { useEffect, useState } from "react";
import EmailIcon from "../assets/icons/email.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import BannerIcon1 from "../assets/icons/banner-icon-1.svg?react";
import BannerIcon2 from "../assets/icons/banner-icon-2.svg?react";
import BannerIcon3 from "../assets/icons/banner-icon-3.svg?react";
import Flickity from "react-flickity-component";
import "../flickity.css";
import TopicComponent from "../components/TopicComponent";
import topicsService from "../services/topics.service";

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true,
};

const LandingPage: React.FC = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setTopics(await topicsService.getTopics(0, 10));
      } catch (error) {
        console.error("Error fetching topics: ", error);
        throw error;
      }
    };
    fetchTopics();
  }, []);

  return (
    <div className="w-full bg-[url('./assets/icons/background-pattern.png')] object-fill flex flex-col gap-20 relative z-1">
      <div className="hero flex flex-col items-center bg-[url('./assets/icons/hero.svg')] gap-10 px-20 pt-28 pb-48 relative -z-50 ">
        <div className="text-primary-text-color text-center text-5xl font-extrabold">
          Công việc bận rộn không thể cản trở việc học tiếng Anh của bạn nữa!
        </div>
        <div className="text-primary-text-color text-center text-1xl font-medium mx-32">
          WorkLingo là nền tảng giúp người đi làm học Tiếng Anh thông qua hệ
          thống Flashcards và Quiz đa dạng, người học có thể cá nhân hoá để phù
          hợp với bản thân. Tiếng Anh giúp mở rộng cơ hội nghề nghiệp trong
          tương lai.
        </div>
        <button className="bg-primary-color px-8 py-4 rounded-[96px] font-medium text-1xl text-white">
          Khám phá ngay
        </button>
      </div>
      <div className="topics -mt-80 ">
        <section className="text-gray-600 body-font">
          <div className=" container px-5 py-24 mx-auto">
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
        </section>
      </div>
      <div className="banner bg-dark-blue-color grid grid-cols-1 md:grid-cols-3 text-white mx-12 px-8 py-10 rounded-[14px] place-items-start gap-4 ">
        <div className="text-2xl font-medium flex flex-row items-center text-left gap-2">
          <BannerIcon1 />
          <div className="">1000+ người đi làm có cơ hội việc làm mới</div>
        </div>
        <div className="text-2xl font-medium flex flex-row items-center text-left gap-2">
          <BannerIcon2 />
          <div className="">500+ Topics flashcard </div>
        </div>
        <div className="text-2xl font-medium flex flex-row items-center text-left gap-2">
          <BannerIcon3 />
          <div className="">500+ người học mỗi tháng</div>
        </div>
      </div>
      <div className="reviews mx-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-light-blue-color flex flex-col gap-3 items-center p-6 rounded-[12px]">
            <div className="text-secondary-text-color text-base">HỌC VIÊN</div>
            <div className="text-primary-text-color text-2xl font-medium">
              Nguyễn Văn A
            </div>
            <div className="text-primary-text-color">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </div>
          </div>
          <div className="bg-light-blue-color flex flex-col gap-3 items-center p-6 rounded-[12px]">
            <div className="text-secondary-text-color text-base">HỌC VIÊN</div>
            <div className="text-primary-text-color text-2xl font-medium">
              Nguyễn Văn A
            </div>
            <div className="text-primary-text-color">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </div>
          </div>
          <div className="bg-light-blue-color flex flex-col gap-3 items-center p-6 rounded-[12px]">
            <div className="text-secondary-text-color text-base">HỌC VIÊN</div>
            <div className="text-primary-text-color text-2xl font-medium">
              Nguyễn Văn A
            </div>
            <div className="text-primary-text-color">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </div>
          </div>
        </div>
      </div>
      <div className="about border border-y-1 w-full py-4 px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-x-40 place-items-start">
          <div className="text-primary-text-color ">Về chúng tôi</div>
          <div className="text-primary-text-color">Hỗ trợ</div>
          <div className="text-primary-text-color">Liên hệ</div>
          <div className="text-secondary-text-color row-span-2">Giới thiệu</div>
          <div className="text-secondary-text-color">Trung tâm trợ giúp</div>
          <div className="text-secondary-text-color flex flex-row">
            <EmailIcon />
            <PhoneIcon />
          </div>
          <div className="text-secondary-text-color">FAQs</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
