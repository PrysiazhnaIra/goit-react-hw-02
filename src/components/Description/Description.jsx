import css from "./Description.module.css";
export const Description = ({ title, text }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Description;
