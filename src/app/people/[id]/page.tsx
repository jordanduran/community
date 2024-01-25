import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/db';

interface DisplayPersonPageProps {
  params: {
    id: string;
  };
}

const DisplayPersonPage = async (props: DisplayPersonPageProps) => {
  const person = await db.person.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!person) {
    return notFound();
  }

  return (
    <>
      <div className='h-screen flex items-center justify-center flex-col'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-blue-500'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 capitalize text-white'>
              {person.firstName} {person.lastName}
            </div>
            <p className='text-base mb-2 text-white'>{person.age}</p>
            <p className='text-base text-white'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex space-x-2'>
          <Link
            href={`/people/${person.id}/edit`}
            className='border rounded py-2 px-10  w-full mt-5 bg-yellow-400 hover:bg-yellow-500'
          >
            Edit
          </Link>
          <button
            type='button'
            className='border rounded py-2 px-10  w-full mt-5 bg-red-500 hover:bg-red-600'
          >
            Delete
          </button>
        </div>
        <Link
          href='/'
          className='border rounded py-2 w-50 mt-5 hover:bg-gray-100 w-20 text-center'
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default DisplayPersonPage;
