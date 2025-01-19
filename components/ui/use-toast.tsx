"use client";

import * as React from "react";
import { ToastContent } from "./toaster";

type ToastOptions = {
  title: string;
  description?: string;
  variant?: "success" | "error" | "info";
};

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastOptions[]>([]);

  const toast = (options: ToastOptions) => {
    setToasts((current) => [...current, options]);
    setTimeout(() => {
      setToasts((current) => current.slice(1)); // Auto-dismiss
    }, 3000);
  };

  return {
    toast,
    ToastContainer: () => (
      <>
        {toasts.map((toast, index) => (
          <ToastContent
            key={index}
            title={toast.title}
            description={toast.description}
          />
        ))}
      </>
    ),
  };
}
