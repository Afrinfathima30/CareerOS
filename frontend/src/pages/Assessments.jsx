import { useState } from "react";

function Assessments() {
  const [assessments, setAssessments] = useState([
    {
      id: 1,
      title: "Java Fundamentals",
      category: "Technical",
      questions: 30,
      score: 82,
      status: "Completed",
    },
    {
      id: 2,
      title: "SQL Assessment",
      category: "Database",
      questions: 25,
      score: null,
      status: "Pending",
    },
    {
      id: 3,
      title: "Aptitude & Logical Reasoning",
      category: "Aptitude",
      questions: 40,
      score: 76,
      status: "Completed",
    },
    {
      id: 4,
      title: "Data Analytics Assessment",
      category: "Analytics",
      questions: 35,
      score: null,
      status: "Pending",
    },
  ]);

  const completeAssessment = (id) => {
    setAssessments((current) =>
      current.map((assessment) =>
        assessment.id === id
          ? {
              ...assessment,
              status: "Completed",
              score: assessment.score ?? 88,
            }
          : assessment
      )
    );
  };

  const completed = assessments.filter(
    (assessment) => assessment.status === "Completed"
  ).length;

  const averageScore = Math.round(
    assessments
      .filter((assessment) => assessment.score !== null)
      .reduce((sum, assessment) => sum + assessment.score, 0) /
      completed
  );

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Career workspace / Assessments
            </span>
          </div>

          <h1 className="text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[64px]">
            TEST
            <br />
            <span className="bg-[#B8FF3D] px-2">
              YOUR
            </span>
            <br />
            EDGE.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-6 text-[#555550] sm:text-base">
            Practice before the real assessment. Track your
            scores and identify the areas where more preparation
            is needed.
          </p>
        </div>

        <div className="border-2 border-[#111111] bg-[#B8FF3D] p-6 shadow-[5px_5px_0px_#111111]">
          <p className="text-[9px] font-black uppercase tracking-[0.15em]">
            Average score
          </p>

          <p className="mt-4 text-6xl font-black tracking-[-0.07em]">
            {averageScore}%
          </p>

          <div className="mt-5 h-3 border-2 border-[#111111] bg-white">
            <div
              className="h-full bg-[#111111]"
              style={{
                width: `${averageScore}%`,
              }}
            />
          </div>

          <p className="mt-3 text-[9px] font-black uppercase">
            {completed} assessments completed
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {assessments.map((assessment) => (
          <article
            key={assessment.id}
            className="border-2 border-[#111111] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[5px_5px_0px_#B8FF3D]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[8px] font-black uppercase tracking-[0.12em] text-[#777772]">
                  {assessment.category}
                </span>

                <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
                  {assessment.title}
                </h2>
              </div>

              <span
                className={`px-2 py-1 text-[8px] font-black uppercase ${
                  assessment.status === "Completed"
                    ? "bg-[#B8FF3D]"
                    : "bg-[#111111] text-white"
                }`}
              >
                {assessment.status}
              </span>
            </div>

            <div className="mt-7 flex justify-between border-t-2 border-[#111111] pt-4 text-[9px] font-black uppercase">
              <span>{assessment.questions} questions</span>

              {assessment.score !== null && (
                <span>Score: {assessment.score}%</span>
              )}
            </div>

            {assessment.status === "Pending" && (
              <button
                type="button"
                onClick={() => completeAssessment(assessment.id)}
                className="mt-5 w-full border-2 border-[#111111] bg-[#B8FF3D] px-4 py-3 text-[9px] font-black uppercase tracking-[0.08em] transition hover:bg-[#111111] hover:text-white"
              >
                Start assessment
              </button>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export default Assessments;