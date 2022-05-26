import React, { useState } from "react";
import styles from "./UserPermission.module.css";

const AddNewUser = ({ dispatch }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    permission: "",
  });
  const sendInvitationHandler = () => {
    dispatch({ type: "ADD_USER_PERMISSION", val: data });
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h4>Add a New User</h4>

      <div className="row my-3">
        <div className="col-4">
          <h6>Name</h6>
        </div>
        <div className="col-5">
          <h6>Email Address</h6>
        </div>
        <div className="col-3">
          <h6>Permissions</h6>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col-4">
            <input
              name="name"
              type="text"
              className={`form-control ${styles.addNewUserInput}`}
              placeholder="Name"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="col-4">
            <input
              name="email"
              type="email"
              className={`form-control ${styles.addNewUserEmail}`}
              placeholder="Email"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="col-4">
            <select
              className={`form-select ${styles.addNewUserSelect}`}
              name="permission"
              required
              onChange={changeHandler}
            >
              <option className={` ${styles.addNewUserOption}`}>
                Select Permission
              </option>{" "}
              <option className={` ${styles.addNewUserOption}`}>
                Edit pages
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                Approve Users
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                Disapprove Users
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                Block Users
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                Delete Users
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                View records
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                View User activities
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                Edit Plan information
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                Edit API
              </option>
              <option className={` ${styles.addNewUserOption}`}>
                View financial dashboard
              </option>
            </select>
          </div>

          <div className="row mt-5 d-flex justify-content-center">
            <div
              className={`btn btn-lg px-3 py-2 ${styles.addNewUserSendButton}`}
              onClick={sendInvitationHandler}
            >
              Send Invitation
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddNewUser;
