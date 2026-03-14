import { Routes, Route } from "react-router-dom";
import PageShell from "../components/layout/PageShell";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CustomOrderPage from "../pages/CustomOrderPage";
import ShopPage from "../pages/ShopPage";
import GalleryPage from "../pages/GalleryPage";
import AboutPage from "../pages/AboutPage";
import FAQPage from "../pages/FAQPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", color: "white", background: "#0b0b0f" }}>
      <h1 style={{ fontSize: "3rem" }}>3D Print Business</h1>
    </div>
  );
}
export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/custom-order" element={<CustomOrderPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}