import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#111111]">
      <Sidebar />

      <main className="min-h-[calc(100vh-78px)]">
        <div className="page-enter">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;