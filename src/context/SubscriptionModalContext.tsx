"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SubscriptionModalContextType {
  isOpen: boolean;
  plan: string | null;
  openModal: (plan?: string) => void;
  closeModal: () => void;
}

const SubscriptionModalContext = createContext<
  SubscriptionModalContextType | undefined
>(undefined);

export const SubscriptionModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);

  const openModal = (selectedPlan?: string) => {
    setPlan(selectedPlan || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPlan(null);
  };

  return (
    <SubscriptionModalContext.Provider
      value={{ isOpen, plan, openModal, closeModal }}
    >
      {children}
    </SubscriptionModalContext.Provider>
  );
};

export const useSubscriptionModal = () => {
  const context = useContext(SubscriptionModalContext);
  if (!context) {
    throw new Error(
      "useSubscriptionModal must be used within a SubscriptionModalProvider"
    );
  }
  return context;
};
