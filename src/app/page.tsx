import { db } from '@/db';

const Home = async () => {
  const people = await db.person.findMany();
  const renderedPeople = people.map((person) => {
    return <div key={person.id}>{person.firstName}</div>;
  });

  return (
    <>
      <h1>Homepage</h1>
      {renderedPeople}
    </>
  );
};

export default Home;
