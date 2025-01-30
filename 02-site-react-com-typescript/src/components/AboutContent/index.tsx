import styles from "@/components/AboutContent/AboutContent.module.css";
import Link from "next/link";

const AboutContent = (): React.ReactElement => {
  return (
    <>
      <section className={`${styles.about} ${styles.content}`}>
        <div className={styles.maxWidth}>
          <h2 className={styles.title}>Sobre a empresa</h2>
        </div>

        <div className={styles.aboutContent}>
          <div className={`${styles.column} ${styles.left}`}>
            <img src="images/about/premium.jpg" alt="Sobre a empresa" />
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>
              Desenvolvido para você atingir seus melhores índices de
              produtividade, criativiade e bem-estar.
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              dolorum at, vitae culpa non similique nulla iure fuga. Error ut a
              voluptate porro veritatis assumenda modi alias illo neque
              suscipit. Voluptatum maxime animi ipsa laboriosam aperiam illo
              assumenda recusandae tenetur expedita hic, sunt aliquam, eum ipsum
              sed reprehenderit iure numquam cumque rem, sapiente officia dicta
              repudiandae quae. Qui, voluptate id.
            </p>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={`${styles.column} ${styles.left}`}>
            <img src="images/about/premium2.jpg" alt="Sobre a empresa" />
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>
              Desenvolvido para você atingir seus melhores índices de
              produtividade, criativiade e bem-estar.
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              dolorum at, vitae culpa non similique nulla iure fuga. Error ut a
              voluptate porro veritatis assumenda modi alias illo neque
              suscipit. Voluptatum maxime animi ipsa laboriosam aperiam illo
              assumenda recusandae tenetur expedita hic, sunt aliquam, eum ipsum
              sed reprehenderit iure numquam cumque rem, sapiente officia dicta
              repudiandae quae. Qui, voluptate id.
            </p>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={`${styles.column} ${styles.left}`}>
            <img src="images/about/premium3.jpg" alt="Sobre a empresa" />
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>
              Desenvolvido para você atingir seus melhores índices de
              produtividade, criativiade e bem-estar.
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              dolorum at, vitae culpa non similique nulla iure fuga. Error ut a
              voluptate porro veritatis assumenda modi alias illo neque
              suscipit. Voluptatum maxime animi ipsa laboriosam aperiam illo
              assumenda recusandae tenetur expedita hic, sunt aliquam, eum ipsum
              sed reprehenderit iure numquam cumque rem, sapiente officia dicta
              repudiandae quae. Qui, voluptate id.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
