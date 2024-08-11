import "./styles/Contact.css";
import { useState } from "react";
import { Title_Subtitle } from "../components/Title_Subtitle.jsx";

export const Contact = () => {
  const [result, setResult] = useState("");

  const api = import.meta.env.VITE_API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", api);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <section className="Contact" id="Contact">
        <Title_Subtitle title={"Contact us"} subtitle={"Get in touch"} />
        <div className="contact_container">
          <div className="contact_info">
            <h2 className="contact_title">
              Send Us a message <i className="ri-mail-send-line"></i>
            </h2>
            <p className="contact_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              nam aperiam, doloribus necessitatibus delectus, fuga ipsum
              recusandae hic eius ratione, libero unde vitae. Culpa ipsa sunt
              asperiores aliquid voluptatum explicabo expedita quod ex deserunt
              nobis, sit optio a numquam eum?
            </p>
            <span className="contact_info-span">
              <i className="ri-mail-fill"></i> contact@gmail.com
            </span>
            <span className="contact_info-span">
              <i className="ri-phone-fill"></i> +1 123-456-7890
            </span>
            <span className="contact_info-span">
              <i className="ri-map-pin-line"></i> Massachusetts,Cambridge
            </span>
          </div>
          <div className="contact_form">
            <form onSubmit={onSubmit} className="form_contact">
              <div className="contact_input-container">
                <input
                  type="text"
                  name="name"
                  className="contact_input"
                  required
                />
                 <label className="contact_label">Name</label>
              </div>
              <div className="contact_input-container">
              
                <input
                  type="email"
                  name="email"
                  className="contact_input"
                  required
                />
                  <label className="contact_label">email</label>
              </div>
              <div className="contact_input-container">
                <textarea name="message" className="contact_input contact_input-textarea"></textarea>
                <label className="contact_label">Message</label>
              </div>
              <button type="submit" className="button">
                submit
              </button>
              <span>{result}</span>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
