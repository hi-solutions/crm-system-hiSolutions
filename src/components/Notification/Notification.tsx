"use client";

import React, { useEffect, useState } from "react";
import { notificationManager } from "@/lib/notificationManager";
import { X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface NotificationEvent {
  id: string;
  type: "success" | "error" | "progress";
  message: string;
  description?: string;
}

const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationEvent[]>([]);

  useEffect(() => {
    const unsubscribe = notificationManager.subscribe((notifs) => {
      setNotifications([...notifs]);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {notifications.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="pointer-events-auto rounded-lg shadow-lg border border-gray-100 p-4 min-w-[320px] max-w-[400px] flex items-start gap-3 backdrop-blur-sm bg-white/95"
          >
            <div className="shrink-0 mt-0.5">
              {notif.type === "success" && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
              {notif.type === "error" && (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
              {notif.type === "progress" && (
                <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">
                {notif.message}
              </h4>
              {notif.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {notif.description}
                </p>
              )}
            </div>
            <button
              onClick={() => notificationManager.remove(notif.id)}
              className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
