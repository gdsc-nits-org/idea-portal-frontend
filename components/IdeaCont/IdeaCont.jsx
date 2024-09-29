import Card from "../IdeaCard/IdeaCard.jsx";
import styles from "./IdeaCont.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import Link from "next/link";

const IdeaCont = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/idea/read`,
        );
        setData(res.data.slice(0, 4));
      } catch (err) {
        toast.error(err.message);
      }
    }
    fetchData();
  }, []);
  if (data.length > 0) {
    return (
      <div className={styles.IdeaCont}>
        <div className={styles.headerRow}>
          <h1 className={styles.headerText}>Trending Ideas</h1>
          <p className={styles.desc}>
            This is the section where the creativity and innovation meets
            expertise and skills. Connect, Collaborate and build with all.
          </p>
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
        <div className={styles.allCont}>
          <Link href="/ideas" className={styles.allBtn}>
            Show All
          </Link>
        </div>
        <Toaster />
      </div>
    );
  } else {
    return <div>Loading Ideas.....</div>;
  }
};

export default IdeaCont;
