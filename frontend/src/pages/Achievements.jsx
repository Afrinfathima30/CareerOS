import { useState } from "react";

function Achievements() {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Hackathon Winner",
      description: "Won a national-level technology challenge.",
      category: "Competition",
      year: "2026",
      unlocked: true,
    },
    {
      id: 2,
      title: "First Internship",
      description: "Completed your first professional internship.",
      category: "Experience",
      year: "2026",
      unlocked: true,
    },
    {
      id: 3,
      title: "10 Applications",
      description: "Submit 10 quality job applications.",
      category: "Career",
      year: "2026",
      unlocked: true,
    },
    {
      id: 4,
      title: "Interview Ready",
      description: "Complete 5 interview preparation sessions.",
      category: "Preparation",
      year: "2026",
      unlocked: false,
    },
    {
      id: 5,
      title: "Skill Builder",
      description: "Complete 5 learning courses.",
      category: "Learning",
      year: "2026",
      unlocked: false,
    },
    {
      id: 6,
      title: "Career Champion",
      description: "Reach 90% career readiness.",
      category: "Milestone",
      year: "2026",
      unlocked: false,
    },
  ]);

  const unlockAchievement = (id) => {
    setAchievements((current) =>
      current.map((achievement) =>
        achievement.id === id
          ? { ...achievement, unlocked: true }
          : achievement
      )
    );
  };

  const unlockedCount = achievements.filter(
    (achievement) => achievement.unlocked
  ).length;

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Career workspace / Achievements
            </span>
          </div>

          <h1 className="text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[64px]">
            BUILD
            <br />
            <span className="bg-[#B8FF3D] px-2">
              PROOF.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-6 text-[#555550] sm:text-base">
            Every milestone tells part of your career story.
            Track achievements that demonstrate consistency,
            technical ability, and growth.
          </p>
        </div>

        <div className="border-2 border-[#111111] bg-[#111111] p-6 text-white shadow-[5px_5px_0px_#B8FF3D]">
          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#B8FF3D]">
            Achievements unlocked
          </p>

          <p className="mt-4 text-6xl font-black tracking-[-0.07em]">
            {unlockedCount}/{achievements.length}
          </p>

          <p className="mt-1 text-[10px] font-bold text-[#AAAAAA]">
            milestones completed
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className={`border-2 border-[#111111] p-6 transition hover:-translate-y-1 hover:shadow-[5px_5px_0px_#B8FF3D] ${
              achievement.unlocked
                ? "bg-white"
                : "bg-[#E7E7E2]"
            }`}
          >
            <div className="flex items-start justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center border-2 border-[#111111] text-xl font-black ${
                  achievement.unlocked
                    ? "bg-[#B8FF3D]"
                    : "bg-[#D3D3CE]"
                }`}
              >
                {achievement.unlocked ? "★" : "?"}
              </div>

              <span className="text-[8px] font-black uppercase text-[#777772]">
                {achievement.year}
              </span>
            </div>

            <p className="mt-6 text-[8px] font-black uppercase tracking-[0.12em] text-[#777772]">
              {achievement.category}
            </p>

            <h2 className="mt-2 text-xl font-black tracking-[-0.04em]">
              {achievement.title}
            </h2>

            <p className="mt-3 text-sm leading-5 text-[#666661]">
              {achievement.description}
            </p>

            {!achievement.unlocked && (
              <button
                type="button"
                onClick={() =>
                  unlockAchievement(achievement.id)
                }
                className="mt-6 border-2 border-[#111111] bg-white px-4 py-2.5 text-[9px] font-black uppercase transition hover:bg-[#111111] hover:text-white"
              >
                Unlock
              </button>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export default Achievements;