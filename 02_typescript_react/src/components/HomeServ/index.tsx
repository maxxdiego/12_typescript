import styles from "@/components/HomeServ/HomeServ.module.css";
import { BsWifi, BsRocketTakeoff } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa"

const HomeServ = (): React.ReactElement => {
  return (
    <>
      <section className={`${styles.content} ${styles.services}`}>
        <div className={styles.maxWidth}>
          <h2 className={styles.title}>Serviços</h2>
          <div className={styles.servContent}>
            <div className={styles.card}>
              <div className={styles.box}>
                <i><BsWifi /></i>
                <div className={styles.text}>Wifi veloz</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <i><BsRocketTakeoff /></i>
                <div className={styles.text}>Espaço inspirador</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <i><FaHandshake /></i>
                <div className={styles.text}>Reuniões</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServ;
