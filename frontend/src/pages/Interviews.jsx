import { useState } from "react";

function Interviews() {
  const [interviews, setInterviews] = useState([
    {
      id: 1,
      company: "TCS",
      role: "Graduate Engineer Trainee",
      type: "Technical",
      date: "10 Oct",
      time: "10:30 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Data Analyst",
      type: "HR",
      date: "14 Oct",
      time: "2:00 PM",
      status: "Upcoming",
    },
    {
      id: 3,
      company: "Capgemini",
      role: "Software Engineer",
      type: "Technical",
      date: "04 Oct",
      time: "11:00 AM",
      status: "Completed",
    },
  ]);

  const markCompleted = (id) => {
    setInterviews((current) =>
      current.map((interview) =>
        interview.id === id
          ? { ...interview, status: "Completed" }
          : interview
      )
    );
  };

  const upcoming = interviews.filter(
    (interview) => interview.status === "Upcoming"
  );

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Career workspace / Interviews
            </span>
          </div>

          <h1 className="text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[64px]">
            BE
            <br />
            <span className="bg-[#B8FF3D] px-2">
              READY.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-6 text-[#555550] sm:text-base">
            Keep every interview organized. Know what's coming,
            prepare for each round, and track your progress after
            every conversation.
          </p>
        </div>

        <div className="border-2 border-[#111111] bg-[#111111] p-6 text-white shadow-[5px_5px_0px_#B8FF3D]">
          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#B8FF3D]">
            Upcoming interviews
          </p>

          <p className="mt-4 text-6xl font-black tracking-[-0.07em]">
            {upcoming.length}
          </p>

          <p className="mt-1 text-[10px] font-bold text-[#AAAAAA]">
            interviews requiring preparation
          </p>

          <div className="mt-7 border-t border-[#444444] pt-5">
            <p className="text-[9px] font-black uppercase text-[#AAAAAA]">
              Preparation rule
            </p>

            <p className="mt-2 text-sm font-bold leading-5">
              Research the company. Revise your role-specific
              skills. Practice explaining your projects.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-4">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#777772]">
            Interview pipeline
          </p>

          <h2 className="mt-1 text-3xl font-black tracking-[-0.05em]">
            Your schedule
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {interviews.map((interview) => (
            <article
              key={interview.id}
              className="border-2 border-[#111111] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[5px_5px_0px_#B8FF3D]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-[0.12em] text-[#777772]">
                    {interview.type} round
                  </span>

                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">
                    {interview.company}
                  </h3>
                </div>

                <span
                  className={`px-2 py-1 text-[8px] font-black uppercase ${
                    interview.status === "Upcoming"
                      ? "bg-[#B8FF3D]"
                      : "bg-[#E7E7E2]"
                  }`}
                >
                  {interview.status}
                </span>
              </div>

              <p className="mt-3 text-sm font-bold text-[#555550]">
                {interview.role}
              </p>

              <div className="mt-6 border-t-2 border-[#111111] pt-4">
                <div className="flex justify-between text-[9px] font-black uppercase">
                  <span>{interview.date}</span>
                  <span>{interview.time}</span>
                </div>
              </div>

              {interview.status === "Upcoming" && (
                <button
                  type="button"
                  onClick={() => markCompleted(interview.id)}
                  className="mt-5 w-full border-2 border-[#111111] bg-[#B8FF3D] px-4 py-3 text-[9px] font-black uppercase tracking-[0.08em] transition hover:bg-[#111111] hover:text-white"
                >
                  Mark completed
                </button>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Interviews;