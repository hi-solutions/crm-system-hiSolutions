"use client";

import { Refine } from "@refinedev/core";
import { notificationProvider } from "@/providers/notificationProvider";
import React from "react";

export const RefineProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Refine notificationProvider={notificationProvider}>{children}</Refine>
  );
};
