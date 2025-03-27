import prisma from "@/prisma/db";
import React from "react";
import { TeachersList } from "../components/teacherListCard";

export const getData = async () => {
  const staff = await prisma.staff.findMany({
    where: {
      department: "cs",
    },
  });
  return staff;
};

async function SingleDepartmentPage() {
  const staff = await getData();
  return (
    <main className="bg-[#f7f7f7] px-5">
      <div className="max-w-6xl mx-auto pt-10 pb-20">
        <h2 className="text-4xl text-center mb-10 text-gray-800">
          Department of Computer Science
        </h2>
        <p className="text-sm text-gray-700 mb-20">
          The Department of Computer Science, functioning from very beginning of
          the college. The students are assessed through continuous internal
          evaluation and examination conducted by the college at the end of each
          semester. There are several courses including one open course, one
          elective course, one mini project and one main project that spreads
          over a period of 6 semesters. In addition to the computer hardware and
          software courses, subjects like Basic Mathematics, Management,
          Quantitative techniques and Technical Communication are also included.
          Laboratory work is an integral part of this programme. The UG and PG
          students are trained on Windows and LINUX platforms and in various
          high level languages and packages.
        </p>
        <p className="font-medium text-2xl mb-8 text-gray-800">Faculty</p>
        <div className="">
          <div className="max-w-[400px] w-full">
            {staff.map((item) => (
              <TeachersList name={item.name} post={item.post} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleDepartmentPage;
