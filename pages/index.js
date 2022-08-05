import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import Teacher from "../models/Teacher";

const Index = ({ teachers }) => (
  <>
    {/* Create a card for each teacher */}
    <h2>Select a teacher</h2>
    <div>
      {teachers.map((teacher) => (
        <Link
          key={teacher._id}
          href="/teachers/[id]"
          as={`/teachers/${teacher._id}`}
        >
          <a>
            {teacher.first_name} {teacher.last_name}
          </a>
        </Link>
      ))}
    </div>
  </>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Teacher.find({});
  const teachers = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { teachers } };
}

export default Index;
