import { notFound } from 'next/navigation';
import { db } from '@/db';
import PersonEditForm from '@/components/person-edit-form';

interface PersonEditPageProps {
  params: {
    id: string;
  };
}

const page = async (props: PersonEditPageProps) => {
  const id = parseInt(props.params.id);
  const person = await db.person.findFirst({
    where: { id },
  });

  if (!person) {
    return notFound();
  }

  return (
    <div>
      <h1 className='text-xl text-center mt-20'>Edit Person</h1>
      <PersonEditForm person={person} />
    </div>
  );
};

export default page;
