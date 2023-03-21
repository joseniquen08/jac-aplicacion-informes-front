import { GetServerSideProps } from "next";

const Pedro = ({ users }: any) => {
  return (
    <div>
      {users.map((user: any) => (
        <p key={user.name}>{user.name}</p>
      ))}
    </div>
  );
};

export async function getServerSideProps(context: GetServerSideProps) {
  const data = {
    data: [
      {
        name: "Juan",
      },
      {
        name: "Pedro",
      },
      {
        name: "Maria",
      },
      {
        name: "Jose",
      },
    ],
  };

  const users = data.data;

  return {
    props: {
      users,
    },
  };
}

export default Pedro;
