import React, { useState } from "react";
interface props {
  question: string;
  answer: string;
}
function QuestionCard({ question, answer }: props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const words = answer.split(" ");
  const preview = words.slice(0, 50).join(" ");
  // const remaining = words.slice(50).join(" ");
  return (
    <div className="mb-5">
      <hr className="border border-black mb-5" />
      <h4 className="font-semibold mb-2">{question}</h4>
      <p className="text-sm text-justify whitespace-pre-line">
        {showMore ? answer : `${preview}${words.length > 50 ? "..." : ""}`}
      </p>
      {words.length > 50 && (
        <button
          onClick={toggleShowMore}
          className="hover:underline mt-2 text-sm font-medium "
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

function QuestionSection() {
  return (
    <main className="py-24 bg-white px-10 border-b border-gray-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h3 className="font-semibold text-3xl mb-4 text-center lg:text-start">
            Frequently Asked Questions
          </h3>
          <p className="text-sm max-w-[300px] text-center mx-auto lg:text-start lg:mx-0">
            Find answers to common questions that prospective students might
            have.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <QuestionCard
            question="How to apply?"
            answer={`
            Application for admission to various degree courses in Colleges of Applied Science against seats allotted to IHRD colleges for direct admission is to be submitted online through the website of IHRD http://www.ihrdadmissions.org The print out of the online application along with the details of remittance of required registration fee and copies of certificates should be submitted to the Principal of concerned colleges at the time of admission.
            Separate print out of application should be submitted for admission to
            each College of Applied Science under IHRD.
            Before applying online for admission to seats filled by Colleges of Applied Science under IHRD directly, the candidate should
            have completed the online registration at the University of Calicut CAP admission portal`}
          />
          <QuestionCard
            question="Application registration fee"
            answer="The application Registration fee will be Rs 750/- (Rs.250/- for SC/ST candidates). The application registration fee
            payment will be accepted only through SBI Collect as per details in the IHRD admission portal. Application
            Registration fee once remitted shall not be refunded under any circumstances. The details of application Registration fee remitted
            should be entered in the admission portal while submitting the online application also. Applications without application
            Registration fee will be summarily rejected."
          />
          <QuestionCard
            question="Documents to be submitted in the time of admission"
            answer={`1. Self-attested copy of the SSLC/equivalent certificate to prove the Date of Birth of the applicant.
            2. Self-attested copy of the mark list of the HSE or equivalent.
            3. Self-attested copy of relevant certificate issued by competent authority for claiming weightage for NSS, NCC, Ex-
            servicemen dependency.
            4. Self-attested copy of Transfer Certificate/ Course Certificate for claiming THSS reservation.`}
          />
          <hr className="border border-black" />
        </div>
      </div>
    </main>
  );
}

export default QuestionSection;
