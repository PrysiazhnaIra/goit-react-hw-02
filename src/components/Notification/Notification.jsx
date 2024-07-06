import css from "./Notification.module.css";

export const Notification = ({ text }) => {
  return <p className={css.text}>{text}</p>;
};
export default Notification;
