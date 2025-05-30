import React from "react";

function CourseTable({
  course ,
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
function UgProgrammesPage() {
  return (
    <div className="px-5 py-10">
      <div className="max-w-6xl mx-auto text-gray-900">
        <h1 className="text-3xl font-medium text-center">
          Four Year UG Programmes
        </h1>
        <div className="mt-10">
          <CourseTable
            course="B.Sc COMPUTER SCIENCE (Honours)"
            year="4"
            sem="8"
            totalSeats="34"
            universitySeats="17"
            ihrdSeats="17"
          />
          <CourseTable
            course="BACHELOR OF COMPUTER APPLICATION (Honours)"
            year="4"
            sem="8"
            totalSeats="36"
            universitySeats="18"
            ihrdSeats="18"
          />
          <CourseTable
            course="B.COM WITH COMPUTER APPLICATION (Honours)"
            year="4"
            sem="8"
            totalSeats="60"
            universitySeats="30"
            ihrdSeats="30"
          />
          <CourseTable
            course="BBA (Honours)"
            year="4"
            sem="8"
            totalSeats="50"
            universitySeats="25"
            ihrdSeats="25"
          />
          <CourseTable
            course="BA ENGLISH LANGUAGE AND LITERATURE (Honours)"
            year="4"
            sem="8"
            totalSeats="40"
            universitySeats="20"
            ihrdSeats="20"
          />
        </div>
        <h3 className="text-xl font-medium mb-3">ELIGIBILITY FOR ADMISSION</h3>
        <p className="text-sm">
          Those candidates who are “Eligible for Higher Studies” as per the
          Higher Secondary Examination or a pass in the equivalent examination
          is the minimum criteria for admission to degree programmes, unless
          otherwise specified. However, candidates who have qualified the HSE
          and VHSE of the Government of Kerala under ‘SAY’ scheme and
          Compartmental Examination of CBSE are also eligible for admission to
          first year degree programmes in the same academic year. (U.O.No GAI
          /A2/ 5753/2000 dated 14.05.2004) Candidates who have passed the Higher
          Secondary Examination of Tamil Nadu (Private study) shall not be
          admitted to any programme under this University.
          (U.O.No.GAI/A1/5062/2002 dated 07.07.2005).
        </p>
        <div className="mt-10">
          <table className="border border-collapse border-gray-900">
            <thead>
              <tr>
                <th className="p-1 border border-gray-900">Programme</th>
                <th className="p-1 border border-gray-900">
                  Eligibility for Admission
                </th>
                <th className="p-1 border border-gray-900">
                  Mode of calculation of index Mark
                </th>
              </tr>
            </thead>
            <tbody>
              {/* ------------------------------| bsc cs |----------------------------------- */}
              <tr>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  B.Sc. (Computer Science)
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  Candidates who have passed (eligible for higher studies) the
                  HSE or an equivalent examination with Mathematics/ Statistics/
                  Computer Science/ Computer Application etc. as one of the
                  subjects are eligible for admission. (U.O. No: GAI/J1/4756/
                  1999 dated 11.01.2002)
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  <ul className="ml-4">
                    <li className="list-decimal">
                      Total marks obtained for part III + the total marks
                      obtained for Mathematics in the case of Science group
                      students with Mathematics as one of the Subject.
                    </li>
                    <li className="list-decimal">
                      Total marks obtained for part III + the total marks
                      obtained for Computer Science for combination without
                      Mathematics
                    </li>
                    <li className="list-decimal">
                      If there is a tie in the index marks priority must be
                      given to the marks of Mathematics /Computer Science as the
                      case may be. If there is again a tie, the total marks of
                      the second subsidiary subject, the marks of the English,
                      and then the marks of the second language will be
                      considered before going on to the general conditions.
                    </li>
                  </ul>
                </td>
              </tr>
              {/* ------------------------------| bca |----------------------------------- */}
              <tr>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  Bachelor of Computer Application
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  A pass in Higher Secondary or any other exam recognized as
                  equivalent thereto by University of Calicut with Mathematics/
                  Computer Science/ Computer Application/ Informatics Practices
                  as one of the optional subjects. (U.O.No. GAI/J1/ 2453/1997
                  dated 06/10/2000 & GA/J1/ 1597/2005 dated 11/07/2005)
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  <ul className="ml-4">
                    <li className="list-decimal">
                      Total marks of the qualifying examination + marks for
                      Mathematics (or Computer Science, only if the student has
                      not studied mathematics in the qualifying examination).
                    </li>
                    <li className="list-decimal">
                      If there is a tie in the index points, priority will be
                      given to the mark of Mathematics / Computer Science as the
                      case may be, If there is again a tie, the mark of the
                      second subsidiary subject, the mark of English, and then
                      the mark of the second language will be considered before
                      going to the general conditions.
                    </li>
                  </ul>
                </td>
              </tr>
              {/* ------------------------------| bcom |----------------------------------- */}
              <tr>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  B.Com with Computer Applications
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  If there is a tie in the index points, priority will be given
                  to the mark of Mathematics / Computer Science as the case may
                  be, If there is again a tie, the mark of the second subsidiary
                  subject, the mark of English, and then the mark of the second
                  language will be considered before going to the general
                  conditions.
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  <ul className="ml-4">
                    <li className="list-decimal">
                      Total marks of the qualifying exam + a weightage of 25
                      marks for each Commerce subject studied under Plus Two
                      level, CBSE or VHSE under Commerce stream, subject to a
                      maximum of 50 marks .The Management paper of Plus two,
                      CBSE, VHSE or an equivalent examination can be considered
                      as Commerce subject for indexing marks for admission to
                      the B.Com programme.
                    </li>
                    <li className="list-decimal">
                      If there is a tie in the index marks, those who studied
                      Commerce in the plus two programmes will get preference.
                      If there is again a tie, the marks in the commerce
                      subjects will be considered first, then the marks of
                      English and then the marks of II language will be
                      considered. Finally the general conditions will be made
                      applicable.
                    </li>
                  </ul>
                </td>
              </tr>
              {/* ------------------------------| ba english |----------------------------------- */}
              <tr>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  BA English Language and Literature with Journalism
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  A pass in Higher Secondary or any other examination recognized
                  as equivalent thereto by the University of Calicut
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  <ul className="ml-4">
                    <li className="list-decimal">
                      Total marks secured for the qualifying exam+double the
                      marks obtained in English (All other streams will be
                      converted to HSE pattern). Additional weightage of 20
                      marks will be given to the candidates who have studied
                      English as a core subject in the 10+2 level.
                    </li>
                    <li className="list-decimal">
                      If there is a tie in the index points, priority will be
                      given to the candidates with more marks in English as the
                      case may be, If there is again a tie, the date of birth of
                      the candidate will be considered.
                    </li>
                  </ul>
                </td>
              </tr>
              {/* ------------------------------| bba |----------------------------------- */}
              <tr>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  B.B.A. (Bachelor of Business Administration)
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  Any candidate who has passed (eligible for higher studies) the
                  Higher Secondary Exam or any other exam recognized as
                  equivalent thereto, with not less than 50% is eligible for
                  admission to the BBA degree. A concession of 5% will be given
                  to OBC / OEC candidates. The SC / ST candidates need get only
                  a pass (eligible for higher studies) (U.O.No. GA I/J2/2907/03
                  dated 23.07.2004 & U.O.No .GA1/A2/ 1658/ 2007 dated
                  28.02.2008).
                </td>
                <td className="p-1 border border-gray-900 align-top text-xs md:text-sm">
                  <ul className="ml-4">
                    <li className="list-decimal">
                      Total marks of the qualifying exam + a weightage of 25
                      marks for each Commerce subject studied under Plus Two
                      level, CBSE or VHSE under Commerce stream, subject to a
                      maximum of 50 marks .The Management paper of Plus two,
                      CBSE, VHSE or an equivalent examination can be considered
                      as Commerce subject for indexing marks for admission to
                      the B.Com programme.
                    </li>
                    <li className="list-decimal">
                      Total marks of the qualifying exam + a weightage of 25
                      marks for each Commerce subject studied under Plus Two
                      level, CBSE or VHSE under Commerce stream, subject to a
                      maximum of 50 marks .The Management paper of Plus two,
                      CBSE, VHSE or an equivalent examination can be considered
                      as Commerce subject for indexing marks for admission to
                      the B.Com programme. If there is a tie in the index marks,
                      those who studied Commerce in the Plus Two level will get
                      an advantage. If there is again a tie, the marks in
                      English should be considered then the marks in the second
                      language
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UgProgrammesPage;