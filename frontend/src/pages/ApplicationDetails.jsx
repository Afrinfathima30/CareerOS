import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getApplications } from "../api/api";

function ApplicationDetails() {
  const { id } = useParams();

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadApplication = async () => {
      try {
        const applications = await getApplications();

        const list = Array.isArray(applications)
          ? applications
          : applications.applications || [];

        const found = list.find(
          (item) =>
            item._id === id ||
            item.id === id
        );

        if (!found) {
          setError("Application not found.");
          return;
        }

        setApplication(found);
      } catch (error) {
        setError(
          error.message ||
            "Unable to load application."
        );
      } finally {
        setLoading(false);
      }
    };

    loadApplication();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-[9px] font-black uppercase tracking-[0.15em]">
          Loading application...
        </p>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-8">
        <Link
          to="/applications"
          className="text-[9px] font-black uppercase tracking-[0.1em] underline"
        >
          ← Back to applications
        </Link>

        <div className="mt-8 border-2 border-[#111111] bg-white p-8">
          <p className="text-[9px] font-black uppercase text-[#D33]">
            {error || "Application not found."}
          </p>
        </div>
      </div>
    );
  }

  const company =
    application.company ||
    application.companyName ||
    "Company";

  const role =
    application.role ||
    application.position ||
    application.jobTitle ||
    "Position";

  const status =
    application.status ||
    "Applied";

  const location =
    application.location ||
    application.jobLocation ||
    "Not specified";

  const appliedDate =
    application.appliedDate ||
    application.applicationDate ||
    application.createdAt;

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8 lg:py-9">

      {/* HEADER */}

      <div className="mb-6">

        <Link
          to="/applications"
          className="text-[8px] font-black uppercase tracking-[0.12em] text-[#777772] transition hover:text-[#111111]"
        >
          ← Back to applications
        </Link>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-4">

          <div>

            <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#A5A5A0]">
              CareerOS / Application
            </p>

            <h1 className="mt-2 text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
              {company}
            </h1>

            <p className="mt-2 text-sm font-medium text-[#666661]">
              {role}
            </p>

          </div>

          <div className="border-2 border-[#111111] bg-[#B8FF3D] px-4 py-2">
            <p className="text-[8px] font-black uppercase tracking-[0.1em]">
              {status}
            </p>
          </div>

        </div>

      </div>

      {/* MAIN DETAILS */}

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">

        {/* DETAILS */}

        <section className="border-2 border-[#111111] bg-white">

          <div className="border-b-2 border-[#111111] px-5 py-4">

            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#A5A5A0]">
              Application information
            </p>

            <h2 className="mt-1 text-lg font-black uppercase">
              Details
            </h2>

          </div>

          <div className="grid sm:grid-cols-2">

            <Detail
              label="Company"
              value={company}
            />

            <Detail
              label="Role"
              value={role}
            />

            <Detail
              label="Status"
              value={status}
            />

            <Detail
              label="Location"
              value={location}
            />

            <Detail
              label="Applied"
              value={
                appliedDate
                  ? new Date(appliedDate).toLocaleDateString()
                  : "Not specified"
              }
            />

            <Detail
              label="Application ID"
              value={application._id || application.id}
            />

          </div>

        </section>

        {/* SIDE INFO */}

        <section className="border-2 border-[#111111] bg-[#111111] p-5 text-white">

          <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#B8FF3D]">
            CareerOS
          </p>

          <h2 className="mt-5 text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em]">
            Keep moving.
          </h2>

          <p className="mt-4 text-[9px] leading-5 text-[#C8C8C3]">
            Keep your application status updated as
            you move through the hiring process.
          </p>

          <Link
            to="/applications"
            className="mt-6 inline-block border-2 border-[#B8FF3D] px-4 py-2.5 text-[8px] font-black uppercase tracking-[0.1em] text-[#B8FF3D] transition hover:bg-[#B8FF3D] hover:text-[#111111]"
          >
            View all applications →
          </Link>

        </section>

      </div>

    </div>
  );
}

// ==========================================
// DETAIL COMPONENT
// ==========================================

function Detail({ label, value }) {
  return (
    <div className="border-b border-r border-[#E0E0DB] p-5 last:border-b-0">

      <p className="text-[7px] font-black uppercase tracking-[0.15em] text-[#A5A5A0]">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-black">
        {value || "—"}
      </p>

    </div>
  );
}

export default ApplicationDetails;