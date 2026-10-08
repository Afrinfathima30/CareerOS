import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createApplication } from "../api/api";

function AddApplication() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    type: "Full Time",
    status: "Applied",
    appliedDate: "",
    deadline: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await createApplication(formData);

      navigate("/applications");
    } catch (error) {
      setError(
        error.message ||
          "Unable to create application."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-[1050px] px-5 py-7 sm:px-8 lg:py-9">

      {/* HEADER */}

      <div className="mb-7">

        <Link
          to="/applications"
          className="text-[8px] font-black uppercase tracking-[0.12em] text-[#777772] transition hover:text-[#111111]"
        >
          ← Back to applications
        </Link>

        <div className="mt-5">

          <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#A5A5A0]">
            CareerOS / Applications
          </p>

          <h1 className="mt-2 text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl">
            Add an
            <br />
            <span className="bg-[#B8FF3D] px-2">
              opportunity.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#666661]">
            Add a job or internship to your career
            pipeline and keep everything organized in
            one place.
          </p>

        </div>

      </div>

      {/* ERROR */}

      {error && (
        <div className="mb-5 border-2 border-[#111111] bg-[#FFE0E0] px-4 py-3 text-xs font-bold">
          {error}
        </div>
      )}

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="border-2 border-[#111111] bg-white"
      >

        {/* BASIC INFORMATION */}

        <section className="border-b-2 border-[#111111]">

          <div className="border-b border-[#E0E0DB] px-5 py-4 sm:px-7">

            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#A5A5A0]">
              01 / Opportunity
            </p>

            <h2 className="mt-1 text-base font-black uppercase">
              Basic information
            </h2>

          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-7">

            <Field
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Infosys"
              required
            />

            <Field
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Software Engineer"
              required
            />

            <Field
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Chennai"
            />

            <SelectField
              label="Employment type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              options={[
                "Full Time",
                "Part Time",
                "Internship",
                "Contract",
                "Freelance",
              ]}
            />

          </div>

        </section>

        {/* STATUS */}

        <section className="border-b-2 border-[#111111]">

          <div className="border-b border-[#E0E0DB] px-5 py-4 sm:px-7">

            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-[#A5A5A0]">
              02 / Pipeline
            </p>

            <h2 className="mt-1 text-base font-black uppercase">
              Application status
            </h2>

          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-7">

            <SelectField
              label="Current status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                "Wishlist",
                "Applied",
                "Shortlisted",
                "Interview",
                "Offer",
                "Rejected",
              ]}
            />

            <Field
              label="Applied date"
              name="appliedDate"
              type="date"
              value={formData.appliedDate}
              onChange={handleChange}
            />

            <Field
              label="Deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
            />

          </div>

        </section>

        {/* ACTIONS */}

        <div className="flex flex-col-reverse gap-3 bg-[#F7F7F2] p-5 sm:flex-row sm:justify-end sm:p-7">

          <Link
            to="/applications"
            className="border-2 border-[#111111] bg-white px-6 py-3 text-center text-[9px] font-black uppercase tracking-[0.1em] transition hover:bg-[#E7E7E2]"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="border-2 border-[#111111] bg-[#111111] px-6 py-3 text-[9px] font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#B8FF3D] hover:text-[#111111] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : "Save application →"}
          </button>

        </div>

      </form>

    </main>
  );
}

// ==========================================
// INPUT
// ==========================================

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-[8px] font-black uppercase tracking-[0.12em]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border-2 border-[#111111] bg-[#F7F7F2] px-4 py-3 text-sm font-medium outline-none transition focus:bg-[#E7FFB8]"
      />

    </div>
  );
}

// ==========================================
// SELECT
// ==========================================

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-[8px] font-black uppercase tracking-[0.12em]"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-[#111111] bg-[#F7F7F2] px-4 py-3 text-sm font-black outline-none transition focus:bg-[#E7FFB8]"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

    </div>
  );
}

export default AddApplication;