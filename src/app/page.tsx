import Link from 'next/link';
import { db } from '@/db';

const Home = async () => {
  const people = await db.person.findMany();
  const renderedPeople = people.map((person) => {
    return (
      <Link
        href={`/people/${person.id}`}
        key={person.id}
        className='flex justify-between items-center p-2 border rounded mt-5'
      >
        <div>
          <h2 className='capitalize text-lg font-semibold'>
            {person.firstName} {person.lastName}
          </h2>
          <p>{person.age}</p>
        </div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <>
      <h1 className='text-5xl text-center font-bold mt-20'>Community Board</h1>
      {renderedPeople}
      <div className='flex mt-5 justify-between items-center'>
        <Link
          href='/people/new'
          className='border p-2 rounded bg-blue-500 text-white hover:bg-blue-600'
        >
          Add new person
        </Link>
      </div>
    </>
  );
};

export default Home;
