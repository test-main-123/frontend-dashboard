import React, { useState, useEffect } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Simulate fetching notifications
    const mockNotifications = [
      { id: 1, message: "Revenue target exceeded", type: "success", read: false },
      { id: 2, message: "New user milestone: 5,000 users", type: "info", read: false },
      { id: 3, message: "Server response time degraded", type: "warning", read: true },
    ];
    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter((n) => \!n.read).length);
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  const dismiss = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id \!== id));
  };

  return (
    <div className="notifications">
      <h3>Notifications {unreadCount > 0 && <span className="badge">{unreadCount}</span>}</h3>
      <ul>
        {notifications.map((n) => (
          <li key={n.id} className={"notification " + n.type + (n.read ? "" : " unread")}>
            <span>{n.message}</span>
            <div className="actions">
              {\!n.read && <button onClick={() => markAsRead(n.id)}>Mark read</button>}
              <button onClick={() => dismiss(n.id)}>Dismiss</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
