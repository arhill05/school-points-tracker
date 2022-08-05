import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../../lib/dbConnect";
import Teacher from "../../../models/Teacher";

const TeacherPage = ({ teacher }) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  return (
    <div key={teacher._id}>
      <div className="card">
        <h5 className="teacher-name">
          {teacher.first_name} {teacher.last_name}
        </h5>
        <div className="main-content">
          <p className="pet-name">
            {teacher.first_name} {teacher.last_name}
          </p>

          <div className="btn-container">
            <Link href="/[id]/edit" as={`/${teacher._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const teacher = await Teacher.findById(params.id).lean();
  teacher._id = teacher._id.toString();

  return { props: { teacher } };
}

export default TeacherPage;
