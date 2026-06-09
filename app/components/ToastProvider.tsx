"use client";

import { Toaster } from "sonner";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        style: {
          borderRadius: "8px",
          border: "none",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
        },
      }}
    />
  );
}
