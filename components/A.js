import Link from "next/link";
import styles from "../styles/A.module.css";

const A = ({ text, href }) => {
  return (
    <Link href={href} className={styles.link}>
      {text}
    </Link>
  );
};

export default A;
