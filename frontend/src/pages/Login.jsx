import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(formData);

      navigate("/");
    } catch (error) {
      setError(
        error.message ||
          "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F7F2] px-5 py-10 text-[#111111] sm:px-8">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <section className="grid w-full overflow-hidden border-2 border-[#111111] bg-white shadow-[8px_8px_0px_#B8FF3D] lg:grid-cols-2">

          {/* BRAND PANEL */}

          <div className="flex flex-col justify-between border-b-2 border-[#111111] bg-[#B8FF3D] p-8 sm:p-12 lg:border-b-0 lg:border-r-2">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                CareerOS
              </p>

              <h1 className="mt-16 text-6xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-7xl">
                Build.
                <br />
                Track.
                <br />
                Grow.
              </h1>
            </div>

            <p className="mt-12 max-w-sm text-sm font-medium leading-6">
              Your applications, skills, learning and
              career progress — connected in one system.
            </p>
          </div>

          {/* LOGIN FORM */}

          <div className="p-8 sm:p-12">
            <div className="mb-10">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#777772]">
                CareerOS / Login
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em]">
                Welcome back.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#666661]">
                Sign in to continue managing your career.
              </p>
            </div>

            {error && (
              <div className="mb-5 border-2 border-[#111111] bg-[#FFE0E0] px-4 py-3 text-xs font-bold">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[9px] font-black uppercase tracking-[0.12em]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border-2 border-[#111111] bg-[#F7F7F2] px-4 py-3 text-sm outline-none transition focus:bg-[#E7FFB8]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-[9px] font-black uppercase tracking-[0.12em]"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full border-2 border-[#111111] bg-[#F7F7F2] px-4 py-3 text-sm outline-none transition focus:bg-[#E7FFB8]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full border-2 border-[#111111] bg-[#111111] px-5 py-4 text-[10px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#B8FF3D] hover:text-[#111111] disabled:opacity-50"
              >
                {loading
                  ? "Signing in..."
                  : "Sign in →"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;