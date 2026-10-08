import { useMemo, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Spring Boot REST API module",
      category: "Learning",
      priority: "High",
      due: "Today",
      completed: false,
    },
    {
      id: 2,
      title: "Apply for one Java developer role",
      category: "Applications",
      priority: "High",
      due: "Today",
      completed: false,
    },
    {
      id: 3,
      title: "Practice 5 DSA problems",
      category: "Preparation",
      priority: "Medium",
      due: "Tomorrow",
      completed: false,
    },
    {
      id: 4,
      title: "Update Data Analyst resume",
      category: "Career",
      priority: "Medium",
      due: "10 Oct",
      completed: true,
    },
    {
      id: 5,
      title: "Review SQL interview questions",
      category: "Interview",
      priority: "Low",
      due: "12 Oct",
      completed: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingCount = tasks.length - completedCount;

  const progress = Math.round(
    (completedCount / tasks.length) * 100
  );

  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.completed),
    [tasks]
  );

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Career workspace / Tasks
            </span>
          </div>

          <h1 className="text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[64px]">
            DO THE
            <br />
            <span className="bg-[#B8FF3D] px-2">
              NEXT
            </span>
            <br />
            THING.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-6 text-[#555550] sm:text-base">
            Small actions compound into career progress.
            Keep your priorities visible and turn plans
            into completed work.
          </p>
        </div>

        <div className="border-2 border-[#111111] bg-[#B8FF3D] p-6 shadow-[5px_5px_0px_#111111]">
          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#454545]">
            Today's progress
          </p>

          <p className="mt-4 text-6xl font-black tracking-[-0.07em]">
            {progress}%
          </p>

          <div className="mt-5 h-3 border-2 border-[#111111] bg-white">
            <div
              className="h-full bg-[#111111]"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-4 flex justify-between text-[9px] font-black uppercase">
            <span>{completedCount} complete</span>
            <span>{pendingCount} remaining</span>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="border-2 border-[#111111] bg-white">
          <div className="flex items-center justify-between border-b-2 border-[#111111] p-5 sm:p-6">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#777772]">
                Priority list
              </p>

              <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">
                Your tasks
              </h2>
            </div>

            <button
              type="button"
              className="border-2 border-[#111111] bg-[#B8FF3D] px-3 py-2 text-[9px] font-black uppercase"
            >
              + Add
            </button>
          </div>

          <div>
            {tasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onToggle={toggleTask}
              />
            ))}
          </div>
        </div>

        <aside className="border-2 border-[#111111] bg-[#111111] p-6 text-white">
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#B8FF3D]">
            Next up
          </p>

          <h2 className="mt-3 text-2xl font-black leading-none tracking-[-0.04em]">
            Focus on
            <br />
            what moves
            <br />
            you forward.
          </h2>

          {pendingTasks[0] && (
            <div className="mt-8 border-2 border-[#444444] p-4">
              <p className="text-[8px] font-black uppercase tracking-[0.1em] text-[#B8FF3D]">
                Priority
              </p>

              <p className="mt-2 text-sm font-black">
                {pendingTasks[0].title}
              </p>

              <p className="mt-2 text-[9px] text-[#999999]">
                {pendingTasks[0].category} ·{" "}
                {pendingTasks[0].due}
              </p>
            </div>
          )}
        </aside>
      </section>
    </main>
  );
}

function TaskRow({
  task,
  onToggle,
}) {
  return (
    <div
      className={`flex gap-4 border-b border-[#D9D9D3] p-5 transition ${
        task.completed
          ? "bg-[#F0F0EB]"
          : "bg-white hover:bg-[#FAFAF7]"
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        aria-label={`Mark ${task.title} as ${
          task.completed
            ? "incomplete"
            : "complete"
        }`}
        className={`flex h-7 w-7 shrink-0 items-center justify-center border-2 border-[#111111] text-xs font-black ${
          task.completed
            ? "bg-[#B8FF3D]"
            : "bg-white"
        }`}
      >
        {task.completed ? "✓" : ""}
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p
            className={`text-sm font-black ${
              task.completed
                ? "text-[#888883] line-through"
                : "text-[#111111]"
            }`}
          >
            {task.title}
          </p>

          <span className="bg-[#E7E7E2] px-2 py-1 text-[7px] font-black uppercase">
            {task.category}
          </span>
        </div>

        <div className="mt-2 flex gap-4 text-[9px] font-bold uppercase tracking-[0.06em] text-[#999994]">
          <span>{task.due}</span>
          <span>{task.priority} priority</span>
        </div>
      </div>
    </div>
  );
}

export default Tasks;