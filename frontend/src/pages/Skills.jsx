import { useMemo, useState } from "react";

function Skills() {
  const [targetRole, setTargetRole] = useState(
    "Java Full Stack Developer"
  );

  const skills = [
    {
      name: "Java",
      category: "Programming",
      current: 84,
      required: 75,
      status: "Strong",
    },
    {
      name: "React",
      category: "Frontend",
      current: 72,
      required: 70,
      status: "Strong",
    },
    {
      name: "SQL",
      category: "Database",
      current: 76,
      required: 70,
      status: "Strong",
    },
    {
      name: "Python",
      category: "Programming",
      current: 78,
      required: 60,
      status: "Strong",
    },
    {
      name: "Spring Boot",
      category: "Backend",
      current: 48,
      required: 80,
      status: "Gap",
    },
    {
      name: "MongoDB",
      category: "Database",
      current: 42,
      required: 70,
      status: "Gap",
    },
    {
      name: "REST APIs",
      category: "Backend",
      current: 55,
      required: 80,
      status: "Gap",
    },
    {
      name: "Docker",
      category: "DevOps",
      current: 18,
      required: 60,
      status: "Critical",
    },
  ];

  const roleRequirements = {
    "Java Full Stack Developer": {
      description:
        "A balanced profile across Java, backend development, databases, frontend, and deployment.",
      skills: skills,
    },

    "Data Analyst": {
      description:
        "A data-focused profile built around analytics, SQL, Python, visualization, and business thinking.",
      skills: [
        {
          name: "Python",
          category: "Programming",
          current: 78,
          required: 80,
          status: "Strong",
        },
        {
          name: "SQL",
          category: "Database",
          current: 76,
          required: 85,
          status: "Gap",
        },
        {
          name: "Power BI",
          category: "Analytics",
          current: 80,
          required: 80,
          status: "Strong",
        },
        {
          name: "Excel",
          category: "Analytics",
          current: 82,
          required: 75,
          status: "Strong",
        },
        {
          name: "Statistics",
          category: "Analytics",
          current: 58,
          required: 75,
          status: "Gap",
        },
        {
          name: "Data Storytelling",
          category: "Business",
          current: 52,
          required: 70,
          status: "Gap",
        },
      ],
    },

    "Frontend Developer": {
      description:
        "A frontend-focused profile emphasizing React, JavaScript, UI development, accessibility, and APIs.",
      skills: [
        {
          name: "React",
          category: "Frontend",
          current: 72,
          required: 85,
          status: "Gap",
        },
        {
          name: "JavaScript",
          category: "Programming",
          current: 76,
          required: 85,
          status: "Gap",
        },
        {
          name: "HTML / CSS",
          category: "Frontend",
          current: 88,
          required: 80,
          status: "Strong",
        },
        {
          name: "REST APIs",
          category: "Backend",
          current: 55,
          required: 65,
          status: "Gap",
        },
        {
          name: "Git",
          category: "Tools",
          current: 78,
          required: 70,
          status: "Strong",
        },
        {
          name: "Accessibility",
          category: "Frontend",
          current: 45,
          required: 65,
          status: "Gap",
        },
      ],
    },
  };

  const activeSkills =
    roleRequirements[targetRole].skills;

  const averageReadiness = Math.round(
    activeSkills.reduce(
      (total, skill) => total + skill.current,
      0
    ) / activeSkills.length
  );

  const skillGaps = useMemo(
    () =>
      activeSkills
        .map((skill) => ({
          ...skill,
          gap: Math.max(
            skill.required - skill.current,
            0
          ),
        }))
        .filter((skill) => skill.gap > 0)
        .sort((a, b) => b.gap - a.gap),
    [activeSkills]
  );

  const strongestSkill = [...activeSkills].sort(
    (a, b) => b.current - a.current
  )[0];

  const biggestGap = skillGaps[0];

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      {/* =========================================
          HEADER
          ========================================= */}

      <section className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Career workspace / Skills
            </span>
          </div>

          <h1 className="max-w-3xl text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[64px]">
            KNOW
            <br />
            YOUR
            <br />
            <span className="bg-[#B8FF3D] px-2">
              EDGE.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-6 text-[#555550] sm:text-base">
            Understand what you're already good at, identify
            the gaps holding you back, and focus your learning
            on skills that actually matter for your target role.
          </p>
        </div>

        {/* ROLE SELECTOR */}

        <div className="border-2 border-[#111111] bg-[#111111] p-5 text-white shadow-[5px_5px_0px_#B8FF3D]">
          <label
            htmlFor="target-role"
            className="text-[9px] font-black uppercase tracking-[0.15em] text-[#B8FF3D]"
          >
            Target role
          </label>

          <select
            id="target-role"
            value={targetRole}
            onChange={(event) =>
              setTargetRole(event.target.value)
            }
            className="mt-3 w-full border-2 border-white/30 bg-[#111111] px-3 py-3 text-xs font-black text-white outline-none focus:border-[#B8FF3D]"
          >
            {Object.keys(roleRequirements).map(
              (role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              )
            )}
          </select>

          <p className="mt-4 text-[10px] leading-5 text-[#BDBDBD]">
            {roleRequirements[targetRole].description}
          </p>
        </div>
      </section>

      {/* =========================================
          READINESS SUMMARY
          ========================================= */}

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="border-2 border-[#111111] bg-[#B8FF3D] p-6 shadow-[4px_4px_0px_#111111]">
          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#454545]">
            Role readiness
          </p>

          <p className="mt-2 text-5xl font-black tracking-[-0.07em]">
            {averageReadiness}%
          </p>

          <p className="mt-2 text-[9px] font-bold text-[#555550]">
            Current average across required skills
          </p>
        </div>

        <div className="border-2 border-[#111111] bg-white p-6">
          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#777772]">
            Strongest skill
          </p>

          <p className="mt-3 text-2xl font-black tracking-[-0.04em]">
            {strongestSkill.name}
          </p>

          <div className="mt-4 h-2 border border-[#111111] bg-[#F0F0EB]">
            <div
              className="h-full bg-[#111111]"
              style={{
                width: `${strongestSkill.current}%`,
              }}
            />
          </div>

          <p className="mt-2 text-[9px] font-bold text-[#777772]">
            {strongestSkill.current}% current level
          </p>
        </div>

        <div className="border-2 border-[#111111] bg-[#F0F0EB] p-6">
          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#777772]">
            Biggest gap
          </p>

          <p className="mt-3 text-2xl font-black tracking-[-0.04em]">
            {biggestGap
              ? biggestGap.name
              : "No major gaps"}
          </p>

          {biggestGap && (
            <p className="mt-2 text-[10px] font-bold text-[#777772]">
              {biggestGap.gap} points to close
            </p>
          )}
        </div>
      </section>

      {/* =========================================
          SKILL MATRIX
          ========================================= */}

      <section className="mt-8 border-2 border-[#111111] bg-white">
        <div className="flex flex-col gap-3 border-b-2 border-[#111111] p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#777772]">
              Skill matrix
            </p>

            <h2 className="mt-1 text-2xl font-black tracking-[-0.045em]">
              Your current profile.
            </h2>
          </div>

          <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#999994]">
            Current vs required
          </p>
        </div>

        <div className="grid gap-0 md:grid-cols-2">
          {activeSkills.map((skill) => (
            <SkillMatrixRow
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>
      </section>

      {/* =========================================
          GAP ANALYZER
          ========================================= */}

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="border-2 border-[#111111] bg-[#111111] p-6 text-white sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#B8FF3D]">
                Skill gap analyzer
              </p>

              <h2 className="mt-2 text-3xl font-black leading-none tracking-[-0.05em]">
                What should
                <br />
                you learn next?
              </h2>
            </div>

            <span className="h-3 w-3 rounded-full bg-[#B8FF3D]" />
          </div>

          <div className="mt-8 space-y-4">
            {skillGaps.length > 0 ? (
              skillGaps
                .slice(0, 4)
                .map((skill, index) => (
                  <GapRow
                    key={skill.name}
                    rank={String(index + 1).padStart(
                      2,
                      "0"
                    )}
                    skill={skill}
                  />
                ))
            ) : (
              <p className="text-sm text-[#BDBDBD]">
                Your current profile meets the
                requirements for this role.
              </p>
            )}
          </div>
        </div>

        {/* LEARNING PRIORITY */}

        <div className="border-2 border-[#111111] bg-[#B8FF3D] p-6 sm:p-8">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#454545]">
            Recommended focus
          </p>

          <h2 className="mt-3 text-3xl font-black leading-none tracking-[-0.05em]">
            Close one gap
            <br />
            at a time.
          </h2>

          {biggestGap && (
            <div className="mt-8 border-2 border-[#111111] bg-white p-5">
              <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#777772]">
                Start with
              </p>

              <p className="mt-2 text-xl font-black">
                {biggestGap.name}
              </p>

              <div className="mt-5 flex items-center justify-between text-[9px] font-black uppercase">
                <span>
                  Current {biggestGap.current}%
                </span>

                <span>
                  Target {biggestGap.required}%
                </span>
              </div>

              <div className="mt-2 h-3 border-2 border-[#111111] bg-[#F0F0EB]">
                <div
                  className="h-full bg-[#111111]"
                  style={{
                    width: `${Math.min(
                      biggestGap.current,
                      100
                    )}%`,
                  }}
                />
              </div>

              <button
                type="button"
                className="mt-5 w-full border-2 border-[#111111] bg-[#111111] px-4 py-3 text-[9px] font-black uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-[#111111]"
              >
                Create learning goal →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          FOOTER NOTE
          ========================================= */}

      <section className="mt-8 border-t-2 border-[#111111] py-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#777772]">
            CareerOS / Skill intelligence
          </p>

          <p className="text-[9px] font-bold text-[#999994]">
            Your skill data will become dynamic once the
            MongoDB backend is connected.
          </p>
        </div>
      </section>
    </main>
  );
}

function SkillMatrixRow({ skill }) {
  const isStrong = skill.current >= skill.required;

  const gap =
    skill.required > skill.current
      ? skill.required - skill.current
      : 0;

  return (
    <article className="border-b border-[#D9D9D3] p-5 md:nth-[odd]:border-r sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-black">
              {skill.name}
            </h3>

            <span
              className={`px-2 py-1 text-[8px] font-black uppercase ${
                isStrong
                  ? "bg-[#B8FF3D] text-[#111111]"
                  : skill.current < 30
                    ? "bg-[#111111] text-white"
                    : "bg-[#F0F0EB] text-[#777772]"
              }`}
            >
              {skill.status}
            </span>
          </div>

          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#999994]">
            {skill.category}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xl font-black">
            {skill.current}%
          </p>

          <p className="text-[8px] font-bold uppercase text-[#999994]">
            target {skill.required}%
          </p>
        </div>
      </div>

      <div className="mt-5 h-3 border-2 border-[#111111] bg-[#F0F0EB]">
        <div
          className={`h-full ${
            isStrong ? "bg-[#B8FF3D]" : "bg-[#111111]"
          }`}
          style={{
            width: `${skill.current}%`,
          }}
        />
      </div>

      <div className="mt-2 flex justify-between text-[8px] font-black uppercase tracking-[0.08em] text-[#999994]">
        <span>Current</span>

        <span>
          {gap > 0
            ? `${gap} points to close`
            : "Requirement met"}
        </span>
      </div>
    </article>
  );
}

function GapRow({
  rank,
  skill,
}) {
  return (
    <div className="flex items-center gap-4 border-b border-[#343434] pb-4 last:border-b-0">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#B8FF3D] text-[9px] font-black text-[#111111]">
        {rank}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-black">
            {skill.name}
          </p>

          <p className="text-[9px] font-black text-[#B8FF3D]">
            -{skill.gap}
          </p>
        </div>

        <div className="mt-2 h-2 bg-[#333333]">
          <div
            className="h-full bg-[#B8FF3D]"
            style={{
              width: `${Math.min(
                skill.gap * 2,
                100
              )}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;