import React, { useEffect, useState } from "react";
import PaginatedItems from "../Layouts/Pagination";
import styles from "./AllUsers.module.css";
import Checkboxx from "./PlansCredits/MUIFunctions";
const AllUsers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    setUser([
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Ankush Kumar Singh",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0001",
        userStatus: "Active",
        userView: "/images/view-grey.svg",
      },
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Aniket Kumar Singh",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0002",
        userStatus: "Flaged",
        userView: "/images/view-grey.svg",
      },
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Rajeev Kumar Singh",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0003",
        userStatus: "Blocked",
        userView: "/images/view-grey.svg",
      },
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Rajeev Singh",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0004",
        userStatus: "Active",
        userView: "/images/view-grey.svg",
      },
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Rajeev MY Singh",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0005",
        userStatus: "Active",
        userView: "/images/view-grey.svg",
      },
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Kumar",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0006",
        userStatus: "Active",
        userView: "/images/view-grey.svg",
      },
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Singh",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0007",
        userStatus: "Active",
        userView: "/images/view-grey.svg",
      },
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Ankush Singh",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0008",
        userStatus: "Active",
        userView: "/images/view-grey.svg",
      },
      {
        userPhoto: "/images/photo.jpeg",
        userFullName: "Kumar Singh",
        userGender: "Male",
        userPhone: "+918787264008",
        userId: "0009",
        userStatus: "Active",
        userView: "/images/view-grey.svg",
      },
    ]);
  }, []);
  return (
    <>
      <h1 className="mt-4">User</h1>
      <div className="row p-0 m-0">
        <div className={`col-2 p-0 ${styles.allUsersFont}`}>Profile Photo</div>
        <div className={`col-3 p-0 ${styles.allUsersFont}`}>Full Name</div>
        <div className={`col-1 p-0 ${styles.allUsersFont}`}>Gender</div>
        <div className={`col-2 p-0 ${styles.allUsersFont}`}>Phone Number</div>
        <div className={`col-2 p-0 ${styles.allUsersFont}`}>User ID</div>
        <div className={`col-1 p-0 ${styles.allUsersFont}`}>Status</div>
        <div className={`col-1 p-0 ${styles.allUsersFont}`}>View</div>
      </div>
      <PaginatedItems itemsPerPage={8} users={users} />
    </>
  );
};

export default AllUsers;
