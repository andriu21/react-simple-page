import "./styles/input.css";

const Input = ({ label }) => {
  return (
    <>
      <div className="inputGroup">
        <input type="text" required="" autocomplete="off" />
        <label for="name">{label}</label>
      </div>
    </>
  );
};
