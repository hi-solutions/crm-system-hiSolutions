interface NotificationEvent {
  id: string;
  type: "success" | "error" | "progress";
  message: string;
  description?: string;
}

type Listener = (notifications: NotificationEvent[]) => void;

class NotificationManager {
  private notifications: NotificationEvent[] = [];
  private listeners: Listener[] = [];
  private idCounter = 0;

  add(notification: Omit<NotificationEvent, "id"> & { id?: string }) {
    const id = notification.id || `notif-${Date.now()}-${this.idCounter++}`;
    const newNotification = { ...notification, id };
    this.notifications.push(newNotification);
    this.notify();

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      this.remove(id);
    }, 5000);

    return id;
  }

  remove(id: string) {
    this.notifications = this.notifications.filter((n) => n.id !== id);
    this.notify();
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    // Initial call
    listener(this.notifications);

    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.notifications));
  }
}

export const notificationManager = new NotificationManager();
