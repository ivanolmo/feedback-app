import { Link } from 'react-router-dom';
import Card from '../shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>
          This is a React project to leave feedback for a product or service.
        </p>
        <p>Version 1.0.0</p>
        <Link to='/'>Back To Home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
