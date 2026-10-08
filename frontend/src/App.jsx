import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import DashboardLayout from "./layouts/DashboardLayout";
import ApplicationDetails from "./pages/ApplicationDetails";
import Applications from "./pages/Applications";
import Skills from "./pages/Skills";
import Learning from "./pages/Learning";
import Tasks from "./pages/Tasks";
import Interviews from "./pages/Interviews";
import Assessments from "./pages/Assessments";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import Login from "./pages/Login";
import AddApplication from "./pages/AddApplication";

// ==========================================
// PROTECTED ROUTE
// ==========================================

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F7F2]">
        <p className="text-[10px] font-black uppercase tracking-[0.15em]">
          Loading CareerOS...
        </p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// ==========================================
// STAT CARD
// ==========================================

function StatCard({
  label,
  value,
  description,
  highlighted = false,
}) {
  return (
    <div
      className={[
        "border-2 border-[#111111] px-4 py-4",
        "transition-all duration-200",
        highlighted
          ? "bg-[#B8FF3D]"
          : "bg-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-[8px] font-black uppercase tracking-[0.12em] text-[#666661]">
          {label}
        </p>

        <span className="text-[9px] font-black">
          →
        </span>
      </div>

      <p className="mt-2 text-[34px] font-black leading-none tracking-[-0.07em]">
        {value}
      </p>

      <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.05em] text-[#777772]">
        {description}
      </p>
    </div>
  );
}

// ==========================================
// QUICK NAVIGATION CARD
// ==========================================

function QuickNav({
  to,
  number,
  title,
  description,
}) {
  return (
    <Link
      to={to}
      className="group border-2 border-[#111111] bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#E7FFB8] hover:shadow-[4px_4px_0px_#111111]"
    >
      <div className="flex items-start justify-between">

        <span className="text-[8px] font-black text-[#A5A5A0]">
          {number}
        </span>

        <span className="text-sm font-black transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>

      </div>

      <h3 className="mt-5 text-[13px] font-black uppercase tracking-[-0.02em]">
        {title}
      </h3>

      <p className="mt-1.5 text-[9px] leading-4 text-[#777772]">
        {description}
      </p>
    </Link>
  );
}

// ==========================================
// ACTIVITY ITEM
// ==========================================

function ActivityItem({
  title,
  meta,
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#E0E0DB] py-3 last:border-b-0">

      <div className="flex min-w-0 items-center gap-3">

        <span className="h-2 w-2 shrink-0 bg-[#B8FF3D]" />

        <p className="truncate text-[10px] font-bold">
          {title}
        </p>

      </div>

      <span className="shrink-0 text-[8px] font-black uppercase tracking-[0.05em] text-[#A5A5A0]">
        {meta}
      </span>

    </div>
  );
}

// ==========================================
// DASHBOARD
// ==========================================

function Dashboard() {
  const { user } = useAuth();

  const firstName =
    user?.name?.split(" ")[0] || "there";

  const readiness =
    user?.careerReadiness || 0;

  const skillCount =
    user?.skills?.length || 0;

  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8 lg:py-7">

      <div className="mx-auto max-w-[1280px]">

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">

          <div className="flex items-center gap-2">

            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />

            <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#777772]">
              CareerOS / Overview
            </p>

          </div>

          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-[#A5A5A0]">
            Career workspace
          </p>

        </div>

        {/* ======================================
            HERO
        ====================================== */}

        <section className="border-2 border-[#111111] bg-white">

          <div className="grid lg:grid-cols-[1fr_300px]">

            {/* HERO COPY */}

            <div className="border-b-2 border-[#111111] p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-9">

              <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#777772]">
                Welcome back, {firstName}
              </p>

              <h1 className="mt-4 max-w-[650px] text-[52px] font-black uppercase leading-[0.86] tracking-[-0.075em] sm:text-[64px] lg:text-[72px]">
                Your career.
                <br />

                <span className="inline-block bg-[#B8FF3D] px-2">
                  One system.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-[11px] leading-5 text-[#666661] sm:text-xs">
                Manage your applications, skills, learning,
                tasks and career progress from one focused
                workspace.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <Link
                  to="/applications"
                  className="border-2 border-[#111111] bg-[#111111] px-5 py-2.5 text-[8px] font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#B8FF3D] hover:text-[#111111]"
                >
                  View applications →
                </Link>

                <Link
                  to="/tasks"
                  className="border-2 border-[#111111] bg-white px-5 py-2.5 text-[8px] font-black uppercase tracking-[0.1em] transition hover:bg-[#F7F7F2]"
                >
                  Open tasks
                </Link>

              </div>

            </div>

            {/* READINESS */}

            <div className="flex flex-col justify-between bg-[#B8FF3D] p-6 sm:p-8">

              <div className="flex items-center justify-between">

                <p className="text-[8px] font-black uppercase tracking-[0.15em]">
                  Career readiness
                </p>

                <span className="h-2 w-2 bg-[#111111]" />

              </div>

              <div className="mt-8 lg:mt-0">

                <p className="text-[64px] font-black leading-none tracking-[-0.08em]">
                  {readiness}%
                </p>

                <div className="mt-4 h-2 border border-[#111111] bg-[#E7FFB8]">

                  <div
                    className="h-full bg-[#111111]"
                    style={{
                      width: `${Math.min(
                        readiness,
                        100
                      )}%`,
                    }}
                  />

                </div>

                <p className="mt-3 max-w-[220px] text-[9px] font-bold uppercase leading-4">
                  Keep building your profile,
                  skills and experience.
                </p>

              </div>

              <div className="mt-7 border-t border-[#111111] pt-3">

                <p className="text-[8px] font-black uppercase">
                  {user?.targetRole ||
                    "Career Builder"}
                </p>

                <p className="mt-1 text-[8px]">
                  Current target role
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            STATS
        ====================================== */}

        <section className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">

          <StatCard
            label="Applications"
            value="12"
            description="Tracked opportunities"
          />

          <StatCard
            label="Readiness"
            value={`${readiness}%`}
            description="Career progress"
            highlighted
          />

          <StatCard
            label="Skills"
            value={skillCount}
            description="Skills in your profile"
          />

          <StatCard
            label="Tasks"
            value="05"
            description="Items to complete"
          />

        </section>

        {/* ======================================
            QUICK NAVIGATION
        ====================================== */}

        <section className="mt-7">

          <div className="mb-3 flex items-end justify-between">

            <div>

              <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#A5A5A0]">
                Workspace
              </p>

              <h2 className="mt-1 text-xl font-black uppercase tracking-[-0.04em]">
                Quick navigation
              </h2>

            </div>

            <p className="hidden text-[8px] font-bold uppercase tracking-[0.08em] text-[#A5A5A0] sm:block">
              Choose where to work
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

            <QuickNav
              to="/applications"
              number="01"
              title="Applications"
              description="Track jobs and internship opportunities."
            />

            <QuickNav
              to="/skills"
              number="02"
              title="Skills"
              description="Build and manage your technical profile."
            />

            <QuickNav
              to="/learning"
              number="03"
              title="Learning"
              description="Keep courses and learning progress organized."
            />

            <QuickNav
              to="/tasks"
              number="04"
              title="Tasks"
              description="Stay on top of your career priorities."
            />

          </div>

        </section>

        {/* ======================================
            LOWER INFORMATION
        ====================================== */}

        <section className="mt-7 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">

          {/* ACTIVITY */}

          <div className="border-2 border-[#111111] bg-white">

            <div className="flex items-center justify-between border-b-2 border-[#111111] px-5 py-4">

              <div>

                <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#A5A5A0]">
                  Activity
                </p>

                <h2 className="mt-1 text-sm font-black uppercase">
                  Recent activity
                </h2>

              </div>

              <span className="text-[8px] font-black uppercase text-[#777772]">
                Latest
              </span>

            </div>

            <div className="px-5">

              <ActivityItem
                title="CareerOS workspace created"
                meta="Today"
              />

              <ActivityItem
                title="Profile is ready to build"
                meta="Next"
              />

              <ActivityItem
                title="Start tracking your applications"
                meta="Action"
              />

            </div>

          </div>

          {/* NEXT UP */}

          <div className="border-2 border-[#111111] bg-[#111111] p-5 text-white">

            <div className="flex items-center justify-between">

              <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#B8FF3D]">
                Next up
              </p>

              <span className="h-2 w-2 bg-[#B8FF3D]" />

            </div>

            <h2 className="mt-5 text-2xl font-black uppercase leading-[0.9] tracking-[-0.05em]">
              Keep moving.
            </h2>

            <p className="mt-3 text-[9px] leading-4 text-[#C7C7C2]">
              Add your next application, complete a task,
              or improve one of your skills.
            </p>

            <Link
              to="/applications"
              className="mt-6 inline-block border-2 border-[#B8FF3D] px-4 py-2 text-[8px] font-black uppercase tracking-[0.1em] text-[#B8FF3D] transition hover:bg-[#B8FF3D] hover:text-[#111111]"
            >
              Start now →
            </Link>

          </div>

        </section>

        {/* FOOTER */}

        <div className="flex items-center justify-between py-5">

          <p className="text-[7px] font-black uppercase tracking-[0.15em] text-[#A5A5A0]">
            CareerOS
          </p>

          <p className="text-[7px] font-black uppercase tracking-[0.12em] text-[#A5A5A0]">
            Build · Track · Grow
          </p>

        </div>

      </div>

    </div>
  );
}

// ==========================================
// APP
// ==========================================

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* PROTECTED APPLICATION */}

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/applications"
            element={<Applications />}
          />

          <Route
  path="/applications/new"
  element={<AddApplication />}
/>

          <Route
  path="/applications/:id"
  element={<ApplicationDetails />}
/>


          <Route
            path="/skills"
            element={<Skills />}
          />

          <Route
            path="/learning"
            element={<Learning />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

          <Route
            path="/interviews"
            element={<Interviews />}
          />

          <Route
            path="/assessments"
            element={<Assessments />}
          />

          <Route
            path="/certifications"
            element={<Certifications />}
          />

          <Route
            path="/achievements"
            element={<Achievements />}
          />

        </Route>

        {/* FALLBACK */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;