import React from "react";

function Principalsection() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 xl:px-8">
      <div className="flex flex-wrap justify-between gap-5">
        <div>
          <h3 className="font-medium mb-5 text-2xl">Principal’s Desk</h3>
          <p className="text-sm font-medium text-start mb-10 text-gray-900">
            Mrs.Radhika KM
            <br />
            The Principal, <br />
            College of Applied Science Thamarassery <br />
            Ph: +91 8547005025,
            <br />
            E-mail: casthmarassery@ihrd.ac.in
          </p>
          <p className="max-w-[600px] text-start text-pretty">
            College of Applied Science, Thamarassery is managed by IHRD, a
            government organization recognized worldwide for the service it
            renders in the fields of education and social service. Inspired by
            the noble vision of our founder, some random guy, our college is now
            in its seventh decade of serving a transformative role in the world
            through the education and empowerment of students.
          </p>
        </div>
        <div className="flex items-center justify-center w-full md:justify-end md:w-max">
          <img
            width={300}
            height={300}
            src="/assets/images/princi.jpeg"
            className="rounded-md shadow-md mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Principalsection;
