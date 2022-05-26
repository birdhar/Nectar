import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanell, a11yProps } from "./PlansCredits/MUIFunctions";
import "../Users/PlansCredits/Plans.css";
import Checkbox from "@mui/material/Checkbox";
import "./PlansCredits/Plans.css";
import styles from "./PlanCreditManagement.module.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PlanCreditManagement = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <h3>Plans and Credit Management</h3>
        <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
          + Add New Option
        </Button>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBm: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#59d6d6",
                color: "#59d6d6",
              },
            }}
          >
            <Tab label="Plans" {...a11yProps(0)} />
            <Tab label="Credit Packs" {...a11yProps(1)} />
            <Tab label="Amounts Credit" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanell value={value} index={0}>
          <div style={{ height: 400, width: "100%" }}>
            <table className={`table table-borderless ${styles.table}`}>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Free</th>
                  <th scope="col">Gold</th>
                  <th scope="col">Diamond</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">All functions for 1 hour for new users</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>
                <tr>
                  <th scope="row">See James</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Like the James</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">2 messages month</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Message viewing </th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">See panel with people who liked you </th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">5 James gifts monthly</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">5 video calls for 5 minutes </th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">1 monthly video calls for 5 minutes</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Send unlimited messages</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">View the reputation of "James"</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Diary</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">100 credits - James Card</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Hide online function and location</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    1 Top James access(stay on featured page for 1 hour)
                  </th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Be shown only to people you like</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Control age and distance information</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Disable Ads</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Price</th>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                  <td>
                    <Checkbox {...label} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row"></div>
          </div>
        </TabPanell>
        <TabPanell value={value} index={1}>
          Item Two
        </TabPanell>
        <TabPanell value={value} index={2}>
          Item Three
        </TabPanell>
      </Box>
    </div>
  );
};

export default PlanCreditManagement;
