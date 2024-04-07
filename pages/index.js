import Head from "next/head";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Form from "@/components/createIdea/Form";
import Detailed from "@/components/Details/Detailed";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${poppins.className}`}>
        {/* <Form/> */}
        <Detailed />
      </main>
    </>
  );
}
