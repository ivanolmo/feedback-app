import { useState } from 'react';

import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
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
