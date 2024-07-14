import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FeedbackForm.css'; // Ensure this is imported to apply the CSS

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
    window.alert("Thank you for your feedback!");
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="feedback-form-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Feedback</h2>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          required
        />
        <button id="submit-feedback-button" type="submit">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
