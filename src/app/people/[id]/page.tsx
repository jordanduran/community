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
    <div>
      {person.firstName} {person.lastName}
    </div>
  );
};

export default DisplayPersonPage;
