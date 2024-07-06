import { useEffect, useState } from "react";
import "./App.css";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedback"));
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setFeedback((prev) => ({
          ...prev,
          good: prev.good + 1,
        }));
        break;
      case "neutral":
        setFeedback((prev) => ({
          ...prev,
          neutral: prev.neutral + 1,
        }));
        break;
      case "bad":
        setFeedback((prev) => ({
          ...prev,
          bad: prev.bad + 1,
        }));
        break;
      default:
        break;
    }
    //option two
    // setFeedback((prev) => ({
    //   ...prev,
    //   [feedbackType]: prev[feedbackType] + 1,
    // }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="block">
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the
        options below."
      />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={Math.round((feedback.good / totalFeedback) * 100)}
        />
      ) : (
        <Notification text="No feedback yet" />
      )}
    </div>
  );
}

export default App;
