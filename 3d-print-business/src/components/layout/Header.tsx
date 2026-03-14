import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function PageShell() {
  return (
    <div className="min-h-screen text-zinc-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}