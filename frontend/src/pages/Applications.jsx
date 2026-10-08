import { useState } from "react";
import { Link } from "react-router-dom";

function Applications() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const applications = [
    {
      id: 1,
      company: "Infosys",
      role: "Data Analyst",
      location: "Chennai",
      type: "Full Time",
      status: "Interview",
      applied: "05 Oct 2026",
      deadline: "15 Oct 2026",
      accent: "lime",
    },
    {
      id: 2,
      company: "TCS",
      role: "Java Full Stack Developer",
      location: "Chennai",
      type: "Full Time",
      status: "Shortlisted",
      applied: "02 Oct 2026",
      deadline: "18 Oct 2026",
      accent: "black",
    },
    {
      id: 3,
      company: "Accenture",
      role: "Software Engineer",
      location: "Bangalore",
      type: "Full Time",
      status: "Applied",
      applied: "07 Oct 2026",
      deadline: "22 Oct 2026",
      accent: "cyan",
    },
    {
      id: 4,
      company: "Deloitte",
      role: "Technology Intern",
      location: "Hyderabad",
      type: "Internship",
      status: "Wishlist",
      applied: "—",
      deadline: "25 Oct 2026",
      accent: "magenta",
    },
    {
      id: 5,
      company: "Zoho",
      role: "Frontend Developer",
      location: "Chennai",
      type: "Full Time",
      status: "Applied",
      applied: "06 Oct 2026",
      deadline: "20 Oct 2026",
      accent: "amber",
    },
    {
      id: 6,
      company: "Cognizant",
      role: "Programmer Analyst",
      location: "Chennai",
      type: "Full Time",
      status: "Rejected",
      applied: "20 Sep 2026",
      deadline: "—",
      accent: "gray",
    },
  ];

  const filteredApplications = applications.filter((application) => {
    const matchesStatus =
      statusFilter === "All" ||
      application.status === statusFilter;

    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      application.company
        .toLowerCase()
        .includes(searchValue) ||
      application.role
        .toLowerCase()
        .includes(searchValue) ||
      application.location
        .toLowerCase()
        .includes(searchValue);

    return matchesStatus && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

      {/* HEADER */}
      <section className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">

        <div>

          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Career workspace / Applications
            </span>
          </div>

          <h1 className="max-w-3xl text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[64px]">
            TRACK
            <br />
            EVERY
            <br />

            <span className="bg-[#B8FF3D] px-2">
              OPPORTUNITY.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-6 text-[#555550] sm:text-base">
            Keep every application, deadline, interview,
            and opportunity in one place. Nothing gets
            lost between tabs anymore.
          </p>

        </div>

        {/* ADD APPLICATION */}
        <Link
          to="/applications/new"
          className="
            inline-flex
            h-fit
            items-center
            justify-center
            border-2
            border-[#111111]
            bg-[#B8FF3D]
            px-6
            py-4
            text-[10px]
            font-black
            uppercase
            tracking-[0.08em]
            text-[#111111]
            shadow-[5px_5px_0px_#111111]
            transition-all
            duration-150
            hover:translate-x-1
            hover:translate-y-1
            hover:shadow-none
          "
        >
          + Add application
        </Link>

      </section>

      {/* SUMMARY */}
      <section className="mt-10 grid grid-cols-2 border-2 border-[#111111] bg-white sm:grid-cols-4">

        <Summary
          label="Total"
          value={applications.length}
        />

        <Summary
          label="Applied"
          value={
            applications.filter(
              (item) => item.status === "Applied"
            ).length
          }
        />

        <Summary
          label="Interviews"
          value={
            applications.filter(
              (item) => item.status === "Interview"
            ).length
          }
        />

        <Summary
          label="Offers"
          value={
            applications.filter(
              (item) => item.status === "Offer"
            ).length
          }
        />

      </section>

      {/* FILTER BAR */}
      <section className="mt-8 border-2 border-[#111111] bg-[#F0F0EB] p-5 sm:p-6">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">

          <div className="flex-1">

            <label
              htmlFor="application-search"
              className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#777772]"
            >
              Search applications
            </label>

            <input
              id="application-search"
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search company, role or location..."
              className="w-full border-2 border-[#111111] bg-white px-4 py-3 text-sm font-semibold text-[#111111] outline-none placeholder:text-[#999994] focus:bg-[#B8FF3D]"
            />

          </div>

          <div className="lg:w-[220px]">

            <label
              htmlFor="status-filter"
              className="mb-2 block text-[9px] font-black uppercase tracking-[0.14em] text-[#777772]"
            >
              Status
            </label>

            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              className="w-full border-2 border-[#111111] bg-white px-4 py-3 text-sm font-black text-[#111111] outline-none focus:bg-[#B8FF3D]"
            >
              <option value="All">
                All statuses
              </option>

              <option value="Wishlist">
                Wishlist
              </option>

              <option value="Applied">
                Applied
              </option>

              <option value="Shortlisted">
                Shortlisted
              </option>

              <option value="Interview">
                Interview
              </option>

              <option value="Offer">
                Offer
              </option>

              <option value="Rejected">
                Rejected
              </option>
            </select>

          </div>

          <div className="border-2 border-[#111111] bg-white px-4 py-3">

            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#777772]">
              Showing
            </p>

            <p className="mt-1 text-lg font-black">
              {filteredApplications.length}
            </p>

          </div>

        </div>

      </section>

      {/* APPLICATION LIST */}
      <section className="mt-8">

        <div className="mb-5 flex items-end justify-between">

          <div>

            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#777772]">
              Your pipeline
            </p>

            <h2 className="mt-1 text-2xl font-black tracking-[-0.045em]">
              Applications
            </h2>

          </div>

          <p className="hidden text-[9px] font-bold uppercase tracking-[0.1em] text-[#999994] sm:block">
            {filteredApplications.length} opportunities
          </p>

        </div>

        {filteredApplications.length > 0 ? (

          <div className="grid gap-4">

            {filteredApplications.map((application) => (

              <ApplicationRow
                key={application.id}
                application={application}
              />

            ))}

          </div>

        ) : (

          <div className="border-2 border-dashed border-[#999994] bg-white px-6 py-20 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center border-2 border-[#111111] bg-[#B8FF3D] text-xl font-black">
              ?
            </div>

            <h2 className="mt-5 text-xl font-black">
              No applications found.
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-[#777772]">
              Try another search term or change the
              status filter.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}


/* SUMMARY */

function Summary({ label, value }) {
  return (
    <div className="border-b border-[#D9D9D3] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">

      <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#777772]">
        {label}
      </p>

      <p className="mt-2 text-4xl font-black tracking-[-0.06em]">
        {String(value).padStart(2, "0")}
      </p>

    </div>
  );
}


/* APPLICATION ROW */

function ApplicationRow({ application }) {

  const accentStyles = {
    lime: "bg-[#B8FF3D]",
    black: "bg-[#111111] text-white",
    cyan: "bg-[#B9F4F8]",
    magenta: "bg-[#F6C9F2]",
    amber: "bg-[#FFE0A8]",
    gray: "bg-[#E5E5E0]",
  };

  const statusStyles = {
    Wishlist:
      "bg-[#E5E5E0] text-[#555550]",

    Applied:
      "bg-[#B9F4F8] text-[#145F68]",

    Shortlisted:
      "bg-[#B8FF3D] text-[#111111]",

    Interview:
      "bg-[#F6C9F2] text-[#6E2167]",

    Offer:
      "bg-[#111111] text-white",

    Rejected:
      "bg-[#E7E7E2] text-[#777772]",
  };

  return (

    <article className="group grid gap-5 border-2 border-[#111111] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[5px_5px_0px_#B8FF3D] sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">

      <div className="flex gap-4">

        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center border-2 border-[#111111] text-lg font-black ${
            accentStyles[application.accent]
          }`}
        >
          {application.company.charAt(0)}
        </div>

        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-2">

            <h3 className="text-lg font-black tracking-[-0.03em]">
              {application.company}
            </h3>

            <span
              className={`px-2 py-1 text-[8px] font-black uppercase tracking-[0.08em] ${
                statusStyles[application.status]
              }`}
            >
              {application.status}
            </span>

          </div>

          <p className="mt-1 text-sm font-bold text-[#454545]">
            {application.role}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-bold uppercase tracking-[0.06em] text-[#888883]">

            <span>
              {application.location}
            </span>

            <span>
              {application.type}
            </span>

            <span>
              Applied: {application.applied}
            </span>

          </div>

        </div>

      </div>

      <div className="flex items-end justify-between gap-5 border-t border-[#D9D9D3] pt-4 lg:min-w-[260px] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">

        <div>

          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-[#999994]">
            Deadline
          </p>

          <p className="mt-1 text-sm font-black">
            {application.deadline}
          </p>

        </div>

        <Link
          to={`/applications/${application.id}`}
          className="border-2 border-[#111111] bg-white px-3 py-2 text-[9px] font-black uppercase tracking-[0.06em] transition hover:bg-[#B8FF3D]"
        >
          View →
        </Link>

      </div>

    </article>
  );
}

export default Applications;