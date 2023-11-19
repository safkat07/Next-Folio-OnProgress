import Data from "./Data";
import "./home.css";
import Social from "./Social";
import ScrollDown from "./ScrollDown";
const Home = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social></Social>

            <div className="home__img"></div>
            <Data></Data>
          </div>

          <ScrollDown></ScrollDown>
        </div>
      </section>
    </div>
  );
};

export default Home;
