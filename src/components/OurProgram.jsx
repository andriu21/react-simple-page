import { Title_Subtitle } from "./Title_Subtitle.jsx";
import { Card } from "./Card.jsx";
import "./styles/OurProgram.css";
import graduationZero from "../assets/graduation.jpg";
import graduationOne from "../assets/graduation-2.png";
import graduationTwo from "../assets/graduation-3.jpg";
import { Button } from "./Button.jsx";

export const OurProgram = () => {
  return (
    <>
      <section className="OurProduct" id="OurProduct">
        <Title_Subtitle title={"our program"} subtitle={"What we offer"} />
        <div className="OurProduct_card-container">
          <Card
            title={"graduation"}
            img={graduationZero}
            icons={"ri-graduation-cap-fill"}
          />
          <Card title={"master"} img={graduationOne} icons={"ri-school-fill"} />
          <Card
            title={"senior"}
            img={graduationTwo}
            icons={"ri-presentation-fill"}
          />
        </div>
        <Button title={"view more"} color="blue" />
      </section>
    </>
  );
};
