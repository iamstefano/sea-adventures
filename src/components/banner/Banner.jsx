import Image from "next/image";
import styles from "./index.module.scss";

// hero section background
import banner from "../../assets/images/banner.jpeg";

const Banner = () => {
  return (
    <>
      <section className={styles.Banner}>
        <div className={styles.__container}>
          <Image
            className={styles.__image}
            src={banner}
            layout={"fill"}
            objectFit={"cover"}
            alt="Banner section image background"
          />
          <div className={styles.__over}>
            <div className={styles.__over__left}>
              +20
              <p>Destinazioni</p>
            </div>

            <div className={styles.__over__center}>
              +15
              <p>Imbarcazioni</p>
            </div>

            <div className={styles.__over__right}>
              +40
              <p>Itinerari</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
