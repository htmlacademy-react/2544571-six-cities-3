import './style.css';
function Loader(): JSX.Element {
  return (
    <div id="wrapper">
      <div className="loader">
        <div className="holder">
          <img src="img/loader-image.png" alt="loader-image" />
          <span>Loader text</span>
        </div>
      </div>
    </div>);
}

export default Loader;
