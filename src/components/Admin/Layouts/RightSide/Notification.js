import React from "react";
import styels from "./Notification.module.css";

const Notification = () => {
  return (
    <div className="mx-lg-4 mt-3">
      <div>
        <h5>Notification</h5>
        <p>Send push notifcations to all users</p>
      </div>
      <div>
        <textarea
          className={`${styels.notificationTextArea}`}
          placeholder="Write a message"
          rows="10"
          col="60"
        ></textarea>
      </div>
      <div className="mt-lg-2 mb-lg-4">
        <button className={`btn btn-lg ${styels.notificationButton}`}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Notification;
