import { useState } from "react";

function Certifications() {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "Google Data Analytics",
      issuer: "Google",
      category: "Analytics",
      date: "2026",
      status: "Verified",
    },
    {
      id: 2,
      name: "Celonis Process Mining",
      issuer: "Celonis",
      category: "Process Intelligence",
      date: "2026",
      status: "Verified",
    },
    {
      id: 3,
      name: "AWS Cloud Foundations",
      issuer: "AWS",
      category: "Cloud",
      date: "2026",
      status: "In Progress",
    },
  ]);

  const verifyCertificate = (id) => {
    setCertifications((current) =>
      current.map((certificate) =>
        certificate.id === id
          ? { ...certificate, status: "Verified" }
          : certificate
      )
    );
  };

  const verified = certifications.filter(
    (certificate) => certificate.status === "Verified"
  ).length;

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#B8FF3D]" />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Career workspace / Certifications
            </span>
          </div>

          <h1 className="text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[64px]">
            PROVE
            <br />
            <span className="bg-[#B8FF3D] px-2">
              WHAT
            </span>
            <br />
            YOU KNOW.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-6 text-[#555550] sm:text-base">
            Build a credible record of your learning. Store
            certifications, verify achievements, and keep your
            professional profile ready.
          </p>
        </div>

        <div className="border-2 border-[#111111] bg-white p-6 shadow-[5px_5px_0px_#B8FF3D]">
          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#777772]">
            Verified credentials
          </p>

          <p className="mt-4 text-6xl font-black tracking-[-0.07em]">
            {verified}
          </p>

          <p className="mt-1 text-[10px] font-bold text-[#777772]">
            certificates ready for your resume
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate) => (
          <article
            key={certificate.id}
            className="border-2 border-[#111111] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[5px_5px_0px_#B8FF3D]"
          >
            <div className="flex h-12 w-12 items-center justify-center border-2 border-[#111111] bg-[#B8FF3D] text-lg font-black">
              ✓
            </div>

            <p className="mt-6 text-[8px] font-black uppercase tracking-[0.12em] text-[#777772]">
              {certificate.category}
            </p>

            <h2 className="mt-2 text-xl font-black tracking-[-0.04em]">
              {certificate.name}
            </h2>

            <p className="mt-2 text-sm font-bold text-[#555550]">
              {certificate.issuer}
            </p>

            <div className="mt-6 flex items-center justify-between border-t-2 border-[#111111] pt-4">
              <span className="text-[9px] font-black uppercase">
                {certificate.date}
              </span>

              <span
                className={`px-2 py-1 text-[8px] font-black uppercase ${
                  certificate.status === "Verified"
                    ? "bg-[#B8FF3D]"
                    : "bg-[#E7E7E2]"
                }`}
              >
                {certificate.status}
              </span>
            </div>

            {certificate.status === "In Progress" && (
              <button
                type="button"
                onClick={() => verifyCertificate(certificate.id)}
                className="mt-5 w-full border-2 border-[#111111] bg-[#111111] px-4 py-3 text-[9px] font-black uppercase text-white transition hover:bg-[#B8FF3D] hover:text-[#111111]"
              >
                Mark as verified
              </button>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export default Certifications;