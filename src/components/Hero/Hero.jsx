import CountUp from "react-countup";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 4,
                type: "spring",
              }}
            >
              Welcome <br />
              To Your Dream <br />
              Home
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              We have a wide range of affordable properties for you{" "}
            </span>
            <span className="secondaryText">
              Let us help you find your dream home with ease.{" "}
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={23} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={5000} end={6500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1000} end={3000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={10} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className=" flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero.png" alt="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
