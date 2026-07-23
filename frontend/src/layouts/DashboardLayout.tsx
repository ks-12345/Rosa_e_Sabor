import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

export default function DashboardLayout() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          background: "#F7F5F2",
        }}
      >
        <Navbar />

        <main style={{ padding: 25 }}>
          <Outlet />
        </main>
      </div>
    </>
  );
}