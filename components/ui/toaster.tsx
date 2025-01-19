"use client";

import * as React from "react";
import {
  ToastViewport,
  Toast,
  ToastClose,
  ToastTitle,
  ToastDescription,
} from "@radix-ui/react-toast";

export function Toaster() {
  return (
    <ToastViewport className="fixed bottom-0 right-0 flex flex-col gap-4 p-4 w-96 max-w-full z-50 outline-none" />
  );
}

export function ToastContent({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Toast>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
      <ToastClose />
    </Toast>
  );
}
