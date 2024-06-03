import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import styles from "@/styles/Home.module.scss";
import CardList from "@/components/cardList";
import Banner from "@/components/banner";
import RandomList from "@/components/randomList";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sea Adventures ⛵</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <main className={`${styles.main}`}>
        <CardList />
      </main>
      <Banner />
      <RandomList />
      <Footer />
    </>
  );
}