import AboutVideo from "../assets/section_video.mp4";
import { useState } from "react";
import { Title_Subtitle } from "./Title_Subtitle.jsx";
import "./styles/About.css";

export const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handleShowVideo = () => {
    const video = document.querySelector(".about_video");
    !showVideo ? video.play() : video.pause();
    setShowVideo(!showVideo);
  };

  return (
    <>
      <section className="About" id="About">
        <div className="about_video_container">
          <video
            src={AboutVideo}
            muted
            className="about_video"
            autoPlay={showVideo}
            loop
          ></video>
          <div
            className={`about_video-btnPlay ${showVideo && "active"}`}
            onClick={() => handleShowVideo()}
          >
            <i className="ri-play-large-fill playBtn"></i>
          </div>
        </div>
        <div className="about_info">
          <Title_Subtitle
            title={"About University"}
            subtitle={"Nurturing tomorrow`s leaders today"}
          />
          <p className="about_description">
            <span>
              ex ea! Iusto vel ipsum vitae quo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Illo necessitatibus eveniet ullam ipsum id nobis iusto nesciunt
              recusandae magni accusamus! Blanditiis, laborum incidunt?
            </span>
            <span>
              Illo necessitatibus eveniet ullam ipsum id nobis iusto nesciunt
              recusandae magni accusamus! Blanditiis, laborum incidunt?
            </span>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates mollitia. Molestias, error quia.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};
