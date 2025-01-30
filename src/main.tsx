import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { MyButton } from "./stackoverflow/MyButton.tsx";
import { Sidebar } from "./stackoverflow/Sidebar.tsx";
import { MainLayout } from "./stackoverflow/MainLayout.tsx";
import { MainLayoutIndex } from "./stackoverflow/MainLayoutIndex.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="my-button" element={<MyButton />} />
        <Route path="sidebar" element={<MainLayout />}>
          <Route index element={<MainLayoutIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
