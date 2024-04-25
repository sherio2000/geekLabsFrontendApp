import React from 'react';

const NotificationIcon = ({ count }) => {
  return (
    <div className="notification-icon">
      <img src={require('../icons/notification_icon.png')} alt="Notification Icon" className="icon" />
      {count > 0 && <div className="count">{count}</div>}
    </div>
  );
}

export default NotificationIcon;