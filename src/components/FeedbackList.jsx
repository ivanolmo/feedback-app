import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback </p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item, idx) => (
        <FeedbackItem
          key={idx}
          id={item.id}
          rating={item.rating}
          text={item.text}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(Object).isRequired,
};

export default FeedbackList;
