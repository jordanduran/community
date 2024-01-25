'use server';

import {db} from '@/db';
import { redirect } from 'next/navigation';

export const editPerson = async (id: number, firstName: string, lastName: string, age: string) => {
  await db.person.update({
    where: { id },
    data: { firstName, lastName, age}
  });
  
  redirect(`/people/${id}`);
}

export const deletePerson = async (id: number) => {
  await db.person.delete({
    where: { id }
  });

  redirect('/')
}