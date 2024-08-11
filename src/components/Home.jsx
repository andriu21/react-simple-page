import "./styles/Home.css";
import { Button } from "../components/Button.jsx";

export const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home_container">
          <h1 className="home_title">
            We ensure better education for a better a world
          </h1>
          <p className="home_description">
            Our cutting-edge curriculum is desined to empower students with the
            knowledge,skills,and experiences needed to excel in the dynamic
            field of education
          </p>
          <Button title={"explore more"} color={"white"} />
         
        </div>
      </section>
    </>
  );
};
