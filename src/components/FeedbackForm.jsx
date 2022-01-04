import { useState, useEffect, useContext } from 'react';

import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackToEdit, setFeedbackToEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackToEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackToEdit.item.text);
      setRating(feedbackToEdit.item.rating);
    }
  }, [feedbackToEdit]);

  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value !== '' && value.trim().length < 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackToEdit.edit === true) {
        updateFeedback(feedbackToEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
      setBtnDisabled(true);
      setFeedbackToEdit({
        item: {},
        edit: false,
      });
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className='message'>{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
