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
        <a href='/'>Back To Home</a>
      </div>
    </Card>
  );
}

export default AboutPage;
