import React, { useEffect, useState, useReducer } from "react";
import AddNewUser from "./AddNewUser";
import styles from "./UserPermission.module.css";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_USER_PERMISSION": {
      return state.push(action.val);
    }
    default: {
      return state;
    }
  }
};

const UserPermission = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [permissionState, dispatch] = useReducer(reducerFunction, [
    {
      name: "Ankush",
      email: "ankush@gmail.com",
      permission: ["User Approval", "Approve", "Edit page"],
    },
  ]);

  console.log("THis is add dispatch", permissionState);

  useEffect(() => {
    setCurrentUser([
      {
        name: "Ankush",
        email: "ankush@gmail.com",
        permission: ["User Approval", "Approve", "Edit page"],
      },
      {
        name: "Birta",
        email: "Birta@gmail.com",
        permission: ["User Approval", "Disapprove", "Edit page"],
      },
    ]);
  }, []);
  return (
    <>
      <h4 className="mt-4">User Permission</h4>

      <div className="row mt-2">
        <h6>Current Users:</h6>
      </div>
      <div className="row my-2">
        <div className="col-4">
          <h6>Name</h6>
        </div>
        <div className="col-5">
          <h6>Email Address</h6>
        </div>
      </div>

      {currentUser &&
        currentUser.map((val, index) => (
          <div className="row my-3" key={index}>
            <div className="col-4">
              <p>{val.name}</p>
            </div>
            <div className="col-4">
              <p>{val.email}</p>
            </div>
            <div className="col-4">
              <div className={`btn px-4 py-2 ${styles.userPermissionButton}`}>
                Manage Permission
              </div>
            </div>
          </div>
        ))}

      <AddNewUser dispatch={dispatch} />
    </>
  );
};

export default UserPermission;
