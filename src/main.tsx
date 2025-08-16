import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes/routes";
import { DarkModeProvider } from "./context/DarkModeContext";
import { MessageProvider } from "./context/MessageContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MessageProvider>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </MessageProvider>
  </StrictMode>
);
