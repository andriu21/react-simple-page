import "./styles/Contact.css";

import { Title_Subtitle } from "../components/Title_Subtitle.jsx";

export const Contact = () => {
  return (
    <>
      <section className="Contact" id="Contact">
        <Title_Subtitle title={"Contact us"} subtitle={"Get in touch"} />
        <div className="contact_container">
            <div className="contact_info">
                <h2 className="contact_title">Send Us a message </h2>
            </div>
            <div className="contact_form">

            </div>
        </div>
      </section>
    </>
  );
};
