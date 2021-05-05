import 'minireset.css';
import './App.css';

function App({ name, course, date }) {
  return (
    <div className="App">
      <Icon />
      <p className="byline">Certificate of completion</p>

      <div className="content">
        <p>Awarded to</p>
        <h1>{name}</h1>
        <p>for completing:</p>
        <h2>{course}</h2>
      </div>

      {date && (
        <p className="date">
          Issued on{' '}
          <span className="bold">{date}</span>
        </p>
      )}
    </div>
  );
}

App.defaultProps = {
  name: 'James Lee',
  course: 'Creating PDFs with React & Make.cm',
  date: 'March 15 2021'
}

const Icon = () => (
  <svg width="99" height="139" viewBox="0 0 99 139" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H99V138.406L52.1955 118.324L0 138.406V0Z" fill="white" />
    <path d="M25.4912 83.2515C25.4912 79.4116 27.0222 75.7289 29.7474 73.0137C32.4727 70.2985 36.1689 68.7731 40.0229 68.7731C43.877 68.7731 47.5732 70.2985 50.2984 73.0137C53.0236 75.7289 54.5546 79.4116 54.5546 83.2515M40.0229 59.724C40.0229 55.8841 41.5539 52.2014 44.2791 49.4862C47.0044 46.7709 50.7006 45.2455 54.5546 45.2455C58.4087 45.2455 62.1049 46.7709 64.8301 49.4862C67.5553 52.2014 69.0863 55.8841 69.0863 59.724V83.2515" stroke="#0379FF" strokeWidth="10.6193" />
  </svg>
)

export default App;
