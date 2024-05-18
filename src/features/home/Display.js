const Display = () => {
  return (
    <div className="grid grid-cols-auto-fit items-center bg-slate-300 ">
      <div>
        <dotlottie-player
          src="https://lottie.host/641f7e67-3208-4a2d-89bb-72cb28db2bee/t3MOo3nN4O.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="leading-8 p-5">
        <h1 className="text-4xl sm:text-2xl">Hi, I am Manoj</h1>
        <p className="text-orange-500 italic">
          Frontend Developer | HTML • CSS • JavaScript • React
        </p>
        <p>
        
          Hi there! I'm Manoj Chand, a passionate web developer with expertise
          in HTML, CSS, and JavaScript. I specialize in building interactive web
          applications using the React library. Welcome to my portfolio!
        </p>
      </div>
    </div>
  );
};
export default Display;
