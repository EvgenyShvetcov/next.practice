import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

const User = ({ user }) => {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>Пользвоатель c id {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
      </div>
    </MainContainer>
  );
};

export default User;

export const getServerSideProps = async ({ params }) => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();

  return { props: { user } };
};
