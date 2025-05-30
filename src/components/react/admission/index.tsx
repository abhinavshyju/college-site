import React from "react";

function AdmissionPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h1 className="text-3xl font-medium text-center mb-5">
          Admission Procedure
        </h1>
        <p className="font-medium mb-10">
          For both UG and PG Courses, admission to 50% seats are filled by the
          University CAP process and the remaining 50% IHRD Quota seats are
          filled by IHRD fully based on merit.
        </p>
        <p className="font-semibold mb-2">Portal links</p>
        <a href="http://ihrdadmissions.org/" target="_blank">
          <p className="text-blue-900 mb-4 hover:underline font-medium">
            CASCAP Admission Portal for IHRD Applied Science Colleges
          </p>
        </a>
        <a
          href="https://admission.uoc.ac.in/admission?pages=ug"
          target="_blank"
        >
          <p className="text-blue-900 mb-4 hover:underline font-medium">
            CAP Admission Portal for Colleges under Calicut University
          </p>
        </a>
        <a href="https://ihrd.ac.in/images/stories/admin24/UGProspectus2024-25Calicut.pdf">
          <p className="text-blue-900 mb-4 hover:underline font-medium">
            IHRD admission to the seats under the Calicut University Four Year
            Under Graduate Programmes (CUFYUGP) during 2024-2025
          </p>
        </a>
      </div>
    </div>
  );
}

export default AdmissionPage;
