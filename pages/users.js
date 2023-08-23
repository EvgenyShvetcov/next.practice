import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users"}>
      <h1>Пользвоатели</h1>
      <ul>
        {users.map((el) => (
          <div key={el.id}>
            <li>
              <Link href={`/users/${el.id}`}>{el.name}</Link>
            </li>
          </div>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export const getStaticProps = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await responce.json();
  console.log(users);
  return { props: { users } };
};
