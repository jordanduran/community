interface PersonEditPageProps {
  params: {
    id: string;
  };
}

const page = (props: PersonEditPageProps) => {
  const id = parseInt(props.params.id);
  return <div>Edit person with ID {id}</div>;
};

export default page;
