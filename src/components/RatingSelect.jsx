import { v4 as uuidv4 } from 'uuid';

function RatingSelect({ select, selected }) {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
  };

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className='rating'>
      {ratings.map((rating) => (
        <li key={uuidv4()}>
          <input
            type='radio'
            id={`num${rating}`}
            name='rating'
            value={rating}
            onChange={handleChange}
            checked={selected === rating}
          />
          <label htmlFor={`num${rating}`}>{rating}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
