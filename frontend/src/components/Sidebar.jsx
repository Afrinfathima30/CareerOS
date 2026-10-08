import { NavLink } from "react-router-dom";

function Sidebar() {
  const navigation = [
    {
      name: "Overview",
      path: "/",
    },
    {
      name: "Applications",
      path: "/applications",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Learning",
      path: "/learning",
    },
    {
      name: "Tasks",
      path: "/tasks",
    },
    {
      name: "Interviews",
      path: "/interviews",
    },
    {
      name: "Assessments",
      path: "/assessments",
    },
    {
      name: "Certificates",
      path: "/certifications",
    },
    {
      name: "Achievements",
      path: "/achievements",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9D9D3] bg-[#F7F7F2]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-7 lg:px-10">
        
        {/* BRAND */}
        <NavLink
          to="/"
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center">
            <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] border-2 border-[#111111] bg-[#111111]" />

            <div className="absolute inset-0 border-2 border-[#111111] bg-[#B8FF3D] transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1" />

            <span className="relative text-sm font-black text-[#111111]">
              C
            </span>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center">
              <span className="text-[18px] font-black tracking-[-0.055em] text-[#111111]">
                Career
              </span>

              <span className="text-[18px] font-black tracking-[-0.055em] text-[#111111]">
                OS
              </span>

              <span className="ml-1.5 h-2 w-2 rounded-full bg-[#B8FF3D]" />
            </div>

            <p className="mt-0.5 text-[8px] font-black uppercase tracking-[0.18em] text-[#777772]">
              Build your future
            </p>
          </div>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-[10px] font-black uppercase tracking-[0.07em] transition-colors duration-200 ${
                  isActive
                    ? "text-[#111111]"
                    : "text-[#777772] hover:text-[#111111]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#B8FF3D]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 border border-[#111111] bg-white px-3 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#B8FF3D]" />

            <span className="text-[9px] font-black uppercase tracking-[0.08em] text-[#111111]">
              Career active
            </span>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-[#111111] bg-white text-xs font-black text-[#111111] transition hover:bg-[#B8FF3D]"
            aria-label="Search"
          >
            /
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-[#B8FF3D] text-[10px] font-black text-[#111111] shadow-[3px_3px_0px_#111111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            aria-label="Profile"
          >
            AF
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-[#111111] bg-white text-lg font-black text-[#111111] xl:hidden"
            aria-label="Open navigation"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="border-t border-[#D9D9D3] bg-white px-5 py-3 xl:hidden">
        <nav className="flex gap-2 overflow-x-auto pb-1">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `shrink-0 border px-3 py-2 text-[9px] font-black uppercase tracking-[0.06em] transition ${
                  isActive
                    ? "border-[#111111] bg-[#B8FF3D] text-[#111111]"
                    : "border-[#D9D9D3] bg-[#F7F7F2] text-[#777772] hover:border-[#111111] hover:text-[#111111]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Sidebar;