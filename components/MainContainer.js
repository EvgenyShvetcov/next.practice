import A from "./A";
import styles from "../styles/MainContainer.module.css";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <div>
      <Head>
        <meta keywords={"nextjs" + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className={styles.navbar}>
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainContainer;
