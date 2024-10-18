"use client";

import Card from "@/components/IdeaCard/IdeaCard";
import styles from "../styles/Ideas.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import Footer from "@/components/Footer/Footer";

const IdeaCont = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/idea/read`,
        );
        setData(res.data);
      } catch (err) {
        toast.error(err.message);
      }
    }
    fetchData();
  }, []);
  if (data.length > 0) {
    return (
      <>
        <div className={styles.IdeaCont}>
          <div className={styles.headerRow}>
            <h1 className={styles.h1}>ALL IDEAS</h1>
          </div>
          <div className={styles.innerCont}>
            {data.map((item, id) => (
              <Card
                overview={item.overview}
                description={item.description}
                tags={item.tags}
                key={id}
              />
            ))}
          </div>
          <Toaster />
        </div>
        <Footer />
      </>
    );
  } else {
    return <div>Loading Ideas.....</div>;
  }
};

export default IdeaCont;
