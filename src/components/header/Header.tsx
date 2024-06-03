import Image from "next/image";
import styles from "./index.module.scss";

// logo
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.container}>
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Sea Adventures logo"
          ></Image>
        </div>
      </header>
    </>
  );
};

export default Header;
