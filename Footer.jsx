import styles from "../styles/Footer.module.css"
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt=""/>
      </div>
      <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
          OH YES,THE HOT PIZZA IS READY.
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
        <p className={styles.text}>
          7-90-890
          <br />hyderabad
          <br />india
        </p>
        <p className={styles.text}>
          7-90-890
          <br />hyderabad
          <br />india
        </p>
        <p className={styles.text}>
          7-90-890
          <br />hyderabad
          <br />india
        </p>
        <p className={styles.text}>
          7-90-890
          <br />hyderabad
          <br />india
        </p>
      </div>
      <div className={styles.card}></div>
      </div>
    </div>
  );
};

export default Footer