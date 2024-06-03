import Image from "next/image";
import styles from "./index.module.scss";

// hero section background
import hero from "../../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <>
      <section className={styles.Hero}>
        <div className={styles.__container}>
          <Image
            className={styles.__image}
            src={hero}
            fill
            style={{ objectFit: "cover" }}
            alt="Hero section image background"
          />
          <div className={styles.__over}>
            <h3>Lorem ipsum dolor sit amet</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
