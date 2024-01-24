import { db } from '@/db';
import { redirect } from 'next/navigation';

const AddPersonPage = () => {
  const addPerson = async (formData: FormData) => {
    'use server';
    // This needs to be a server action

    // Check the user's input and make sure it is valid
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const age = formData.get('age') as string;
    // Create new record in database
    const person = await db.person.create({
      data: {
        firstName,
        lastName,
        age,
      },
    });
    console.log(person, 'person');
    // Redirect user back to root route
    redirect('/');
  };

  return (
    <>
      <h1 className='text-5xl text-center font-bold mt-20'>Community</h1>
      <p className='text-md text-center'>Add a new person to the community</p>
      <form className='mt-10' action={addPerson}>
        <div>
          <label
            htmlFor='firstName'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            First Name
          </label>
          <div className='mt-2'>
            <input
              type='firstName'
              name='firstName'
              id='firstName'
              className='border rounded p-2 w-full mb-5'
              placeholder='John'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='lastName'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Last Name
          </label>
          <div className='mt-2'>
            <input
              type='lastName'
              name='lastName'
              id='lastName'
              className='border rounded p-2 w-full mb-5'
              placeholder='Doe'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='age'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Age
          </label>
          <div className='mt-2'>
            <input
              type='age'
              name='age'
              id='age'
              className='border rounded p-2 w-full mb-5'
              placeholder='30'
            />
          </div>
        </div>
        <button
          type='submit'
          className='rounded p-2 bg-blue-500 w-full text-white mt-10 hover:bg-blue-600'
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddPersonPage;
