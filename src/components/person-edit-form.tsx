'use client';
import type { Person } from '@prisma/client';
import { editPerson } from '@/actions';

interface PersonEditFormProps {
  person: Person;
}

const PersonEditForm = ({ person }: PersonEditFormProps) => {
  return (
    <form className='mt-10'>
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
            value={person.firstName}
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
            value={person.lastName}
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
            value={person.age}
          />
        </div>
      </div>
      <button
        type='submit'
        className='rounded p-2 bg-blue-500 w-full text-white mt-10 hover:bg-blue-600'
      >
        Update
      </button>
    </form>
  );
};

export default PersonEditForm;
