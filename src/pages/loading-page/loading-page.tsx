import './style.css';
function LoadingPage(): JSX.Element {
  return (
    <div id="wrapper">
      <div className="image">
        <div className="back"></div>
      </div>
      <div className="loader">
        <div className="holder">
          <img src="img/spinner-image.png" alt="loading spinner" />
          <span>Loading...</span>
        </div>
      </div>
    </div>);
}

export default LoadingPage;
