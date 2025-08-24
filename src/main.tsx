import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes/routes";
import { DarkModeProvider } from "./context/DarkModeContext";
import { MessageProvider } from "./context/MessageContext";
import { PopupProvider } from "./context/PopupContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MessageProvider>
      <DarkModeProvider>
        <PopupProvider>
          <RouterProvider router={router} />
        </PopupProvider>
      </DarkModeProvider>
    </MessageProvider>
  </StrictMode>
);
