import React from "react";

function CourseTable({
  course,
  year,
  sem,
  totalSeats,
  universitySeats,
  ihrdSeats,
}) {
  return (
    <div className="mb-10">
      <h3 className="mb-4">{course}</h3>
      <table className="border-2 border-gray-400 border-collapse text-sm font-medium text-gray-800">
        <tbody>
          <tr>
            <td className="border-2 border-gray-400 p-3 align-top">
              Course Duration
            </td>
            <td className="border-2 border-gray-400 p-3 align-top">
              {year} Years ({sem} semesters)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-400 p-3 align-top">
              No of Seats Sanctioned
            </td>
            <td className="border-2 border-gray-400 p-3 align-top">
              {totalSeats} <br />
              {universitySeats} seats - University Quota <br />
              {ihrdSeats} seats – College Quota
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function PgProgrammesPage() {
  return (
    <div className="px-5 py-10">
      <div className="max-w-6xl mx-auto text-gray-900">
        <h1 className="text-3xl font-medium text-center">PG Programmes</h1>
        <div className="mt-10">
          <CourseTable
            course="M.COM"
            year="2"
            sem="4"
            totalSeats="20"
            universitySeats="10"
            ihrdSeats="10"
          />
          <CourseTable
            course="MA ENGLISH"
            year="2"
            sem="4"
            totalSeats="20"
            universitySeats="10"
            ihrdSeats="10"
          />
        </div>
      </div>
    </div>
  );
}

export default PgProgrammesPage;