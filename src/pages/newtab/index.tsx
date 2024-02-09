import { createRoot } from "react-dom/client";
import "../../../global.css";
import { NewTab } from "./NewTab";

createRoot(document.getElementById("app-container") as HTMLElement).render(
  <NewTab />
);
