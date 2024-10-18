import Head from "next/head";
import { useState } from "react";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Form from "@/components/createIdea/Form";
import Footer from "@/components/Footer/Footer";
import Idea from "@/components/IdeaCont/IdeaCont";
import Image from "next/image";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase";
import Spline from "@/components/Spline/Spline";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [closeState, setCloseState] = useState(true);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [_user, _loading, _error] = useAuthState(auth);

  const handleForm = () => {
    setCloseState(!closeState);
  };

  const handleLogin = () => {
    signInWithGoogle();
  };

  if (loading || _loading) {
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error || _error) {
    return (
      <div className={styles.error}>
        <p>Error: {error?.message || _error?.message}</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>IdeaHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1727590652/3332db2e45a36222e63ad99da6513cbc_ev6nsm.png"
        />
      </Head>
      <div className={`${styles.main} ${poppins.className}`}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.top}>
              <div className={styles.firstName}>
                <span className={styles.color1}>G</span>
                <span className={styles.color2}>D</span>
                <span className={styles.color3}>S</span>
                <span className={styles.color4}>C</span>
              </div>
              <div className={styles.secondName}>Idea Hub</div>
            </div>
            <div className={styles.mid}>
              <div className={styles.mid1}>
                GDSC NIT Silchar is dedicated to collaboratively addressing
                real-world challenges encountered by communities through
                constructive problem-solving. We eagerly welcome your innovative
                ideas, as they could potentially be selected as team projects!
              </div>
            </div>
            <div className={styles.bottom}>
              {_user ? (
                <>
                  <button className={styles.btn1} onClick={handleForm}>
                    Add Ideas
                  </button>
                  <Form closeState={closeState} setCloseState={setCloseState} />
                </>
              ) : (
                <button onClick={handleLogin} className={styles.btn2}>
                  Login with Google
                  <Image
                    className={styles.icon}
                    src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1727539598/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw_s900-c-k-c0x00ffffff-no-rj_vzmmmj.webp"
                    width={500}
                    height={500}
                    alt="logo"
                  />
                </button>
              )}
            </div>
          </div>
          <div className={styles.right}>
            <Spline />
          </div>
        </div>
        <Idea />
      </div>
      <Footer />
    </>
  );
}
