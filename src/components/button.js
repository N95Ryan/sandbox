import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Button = ({ className, value, onClick, title }) => {
  // <-- Propriétés
  const { card } = styles; // <-- Déstructuration

  return (
    <Link href={onClick}>
      <a className={card}>
        <h2>{value} &rarr;</h2> <p>{title}</p>
      </a>
    </Link>
  );
};

export default Button;
