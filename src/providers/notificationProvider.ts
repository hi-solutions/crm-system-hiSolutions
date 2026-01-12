import { NotificationProvider } from "@refinedev/core";
import { notificationManager } from "@/lib/notificationManager";

export const notificationProvider: NotificationProvider = {
  open: (notification) => {
    notificationManager.add({
      type: notification.type || "success",
      message: notification.message,
      description: notification.description,
      id: notification.key,
    });
  },
  close: (key) => {
    notificationManager.remove(key);
  },
};
