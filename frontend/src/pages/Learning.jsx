import { useMemo, useState } from "react";

function Learning() {
  const [filter, setFilter] = useState("All");

  const courses = [
    {
      id: 1,
      title: "Spring Boot Fundamentals",
      category: "Backend",
      progress: 62,
      lessons: "18 / 29 lessons",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Data Analytics with Power BI",
      category: "Analytics",
      progress: 78,
      lessons: "23 / 29 lessons",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Advanced SQL",
      category: "Database",
      progress: 45,
      lessons: "9 / 20 lessons",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 4,
      title: "React Development",
      category: "Frontend",
      progress: 100,
      lessons: "24 / 24 lessons",
      priority: "Low",
      status: "Completed",
    },
    {
      id: 5,
      title: "Docker Essentials",
      category: "DevOps",
      progress: 18,
      lessons: "3 / 17 lessons",
      priority: "High",
      status: "In Progress",
    },
  ];

  const filteredCourses = useMemo(() => {
    if (filter === "All") {
      return courses;
    }

    return courses.filter(
      (course) => course.status === filter
    );
  }, [filter]);

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Career workspace / Learning
            </span>
          </div>

          <h1 className="text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[64px]">
            KEEP
            <br />
            <span className="bg-[#B8FF3D] px-2">
              MOVING
            </span>
            <br />
            FORWARD.
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-6 text-[#555550] sm:text-base">
            Turn your career goals into a structured learning
            path. Track what you're learning, what's complete,
            and what deserves attention next.
          </p>
        </div>

        <div className="border-2 border-[#111111] bg-[#111111] p-6 text-white shadow-[5px_5px_0px_#B8FF3D]">
          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#B8FF3D]">
            Weekly learning
          </p>

          <p className="mt-4 text-6xl font-black tracking-[-0.07em]">
            8.5
          </p>

          <p className="mt-1 text-[10px] font-bold text-[#BDBDBD]">
            hours completed this week
          </p>

          <div className="mt-6 h-3 border border-white/40 bg-[#303030]">
            <div
              className="h-full bg-[#B8FF3D]"
              style={{ width: "71%" }}
            />
          </div>

          <p className="mt-2 text-[9px] font-bold text-[#888888]">
            71% of weekly goal
          </p>
        </div>
      </section>

      <section className="mt-10 flex flex-wrap gap-2">
        {["All", "In Progress", "Completed"].map(
          (option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`border-2 border-[#111111] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.08em] transition ${
                filter === option
                  ? "bg-[#B8FF3D]"
                  : "bg-white hover:bg-[#F0F0EB]"
              }`}
            >
              {option}
            </button>
          )
        )}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        {filteredCourses.map((course) => (
          <article
            key={course.id}
            className="border-2 border-[#111111] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[5px_5px_0px_#B8FF3D] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[8px] font-black uppercase tracking-[0.12em] text-[#777772]">
                  {course.category}
                </span>

                <h2 className="mt-2 text-xl font-black tracking-[-0.04em]">
                  {course.title}
                </h2>
              </div>

              <span
                className={`shrink-0 px-2 py-1 text-[8px] font-black uppercase ${
                  course.priority === "High"
                    ? "bg-[#111111] text-white"
                    : course.priority === "Medium"
                      ? "bg-[#FFE0A8]"
                      : "bg-[#E7E7E2]"
                }`}
              >
                {course.priority}
              </span>
            </div>

            <div className="mt-7 flex items-end justify-between">
              <span className="text-[9px] font-black uppercase tracking-[0.08em] text-[#777772]">
                {course.status}
              </span>

              <span className="text-2xl font-black">
                {course.progress}%
              </span>
            </div>

            <div className="mt-3 h-3 border-2 border-[#111111] bg-[#F0F0EB]">
              <div
                className="h-full bg-[#B8FF3D]"
                style={{
                  width: `${course.progress}%`,
                }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[9px] font-bold text-[#999994]">
                {course.lessons}
              </span>

              <button
                type="button"
                className="text-[9px] font-black uppercase tracking-[0.08em] underline decoration-[#B8FF3D] decoration-4 underline-offset-4"
              >
                Continue →
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Learning;