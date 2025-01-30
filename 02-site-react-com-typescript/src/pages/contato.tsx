import ContactContent from "@/components/ContactContent";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Head from "next/head";
import styles from "@/styles/Contact.module.css";
import ContactForm from "@/components/ContactForm";
import React from "react";

const Contato = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Landing page com React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <section className={`${styles.content} ${styles.contact}`}>
          <div className={styles.maxWidth}>
            <h2 className={styles.title}>Contato</h2>
            <div className={styles.contactContent}>
              <ContactContent />
              <ContactForm />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Contato