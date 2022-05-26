import React, { useReducer } from "react";
import Home from "./Layouts/Home";
import AdminDashboard from "./Users/AdminDashboard";
import AllUsers from "./Users/AllUsers";
import Analysis from "./Users/Analysis";
import FlaggedUser from "./Users/FlaggedUser";
import WebsiteControl from "./Users/WebsiteControl";
import Blog from "./Users/Blog";
import PlanCreditManagement from "./Users/PlanCreditManagement";
import EventCreate from "./Users/EventCreate";
import PaymentCycle from "./Users/PaymentCycle";
import UserActivity from "./Users/UserActivity";
import UserApproval from "./Users/UserApproval";
import UserPermission from "./Users/UserPermission/UserPermission";
import AppSettings from "./Users/AppSettings";
import AdminProfile from "./Users/AdminProfile";
import Testimonial from "./Users/Testimonial";
import Logout from "./Users/Logout";
import Prize from "./Users/Prize";
import Reporting from "./Users/Reporting";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "DASHBOARD": {
      return {
        val: action.value,
      };
    }
    case "ANALYSIS": {
      return {
        val: action.value,
      };
    }
    case "USERS": {
      return {
        val: action.value,
      };
    }
    case "FLAGGED_USER": {
      return {
        val: action.value,
      };
    }
    case "PLANS_CREDIT_MANAGEMENT": {
      return {
        val: action.value,
      };
    }
    case "WEBSITE_CONTROL": {
      return {
        val: action.value,
      };
    }
    case "EVENT_CREATE": {
      return {
        val: action.value,
      };
    }
    case "PAYMENT_CYCLE": {
      return {
        val: action.value,
      };
    }
    case "USER_ACTIVITY": {
      return {
        val: action.value,
      };
    }
    case "USER_APPROVAL": {
      return {
        val: action.value,
      };
    }
    case "BLOG": {
      return {
        val: action.value,
      };
    }
    case "APP_SETTINGS": {
      return {
        val: action.value,
      };
    }
    case "USER_PERMISSION": {
      return {
        val: action.value,
      };
    }
    case "ADMIN_PROFILE": {
      return {
        val: action.value,
      };
    }
    case "TESTIMONIALS_REQUEST": {
      return {
        val: action.value,
      };
    }
    case "PRIZE": {
      return {
        val: action.value,
      };
    }
    case "REPORTING": {
      return {
        val: action.value,
      };
    }
    case "LOGOUT": {
      return {
        val: action.value,
      };
    }
    default: {
      return {
        val: action.value,
      };
    }
  }
  // if (action.type === "DASHBOARD") {
  //   return {
  //     val: action.value,
  //   };
  // }
};

const AllComponent = () => {
  const [componentReducer, dispatch] = useReducer(reducerFunction, {
    state: "dashboard",
  });
  return (
    <Home dispatch={dispatch} componentReducer={componentReducer}>
      {componentReducer.val === "dashboard" || !componentReducer.val ? (
        <AdminDashboard />
      ) : componentReducer.val === "analysis" ? (
        <Analysis />
      ) : componentReducer.val === "users" ? (
        <AllUsers />
      ) : componentReducer.val === "flaggedUsers" ? (
        <FlaggedUser />
      ) : componentReducer.val === "plansUsers" ? (
        <PlanCreditManagement />
      ) : componentReducer.val === "websiteControl" ? (
        <WebsiteControl />
      ) : componentReducer.val === "eventCreate" ? (
        <EventCreate />
      ) : componentReducer.val === "paymentCycle" ? (
        <PaymentCycle />
      ) : componentReducer.val === "userActivity" ? (
        <UserActivity />
      ) : componentReducer.val === "userApproval" ? (
        <UserApproval />
      ) : componentReducer.val === "blog" ? (
        <Blog />
      ) : componentReducer.val === "appSetting" ? (
        <AppSettings />
      ) : componentReducer.val === "userPermission" ? (
        <UserPermission />
      ) : componentReducer.val === "adminProfile" ? (
        <AdminProfile />
      ) : componentReducer.val === "testimonials" ? (
        <Testimonial />
      ) : componentReducer.val === "prize" ? (
        <Prize />
      ) : componentReducer.val === "reporting" ? (
        <Reporting />
      ) : componentReducer.val === "logout" ? (
        <Logout />
      ) : (
        ""
      )}
    </Home>
  );
};

export default AllComponent;
