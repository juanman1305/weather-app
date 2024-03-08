import "./styles/loading.css";

const Loader = () => {
  return (
    <>
      <div className="loader__box">
        <div class="loader"></div>
        <h2 className="loader__text" style={{color: 'white'}}>Please wait while we get your weather information 😁</h2>
        <div class="loader"></div>
      </div>
    </>
  );
};

export default Loader;
