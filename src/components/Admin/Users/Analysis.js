import React from "react";
import AllUsers from "./AllUsers";
import styles from "./Analysis.module.css";
import Active from "./AnalysisGraph/Active";
import Verified from "./AnalysisGraph/Verified";
import Flagged from "./AnalysisGraph/Flagged";
import Blocked from "./AnalysisGraph/Blocked";
const Analysis = () => {
  return (
    <>
      <div className="row mb-3">
        <h1 className="mt-4">Analysis</h1>
      </div>
      <div className="row">
        <div className={`col-sm-6 col-md-3 `}>
          <div className={styles.analysisGraph1}>
            <Active />
            <p className="d-flex justify-content-center py-3">
              Total Active Users
            </p>
          </div>
        </div>
        <div className={`col-sm-6 col-md-3 `}>
          <div className={styles.analysisGraph2}>
            <Verified />
            <p className="d-flex justify-content-center py-3">
              Total Verified Users
            </p>
          </div>
        </div>
        <div className={`col-sm-6 col-md-3`}>
          <div className={styles.analysisGraph3}>
            <Flagged />
            <p className="d-flex justify-content-center py-3">
              Total Flagged Users
            </p>
          </div>
        </div>
        <div className={`col-sm-6 col-md-3`}>
          <div className={styles.analysisGraph4}>
            <Blocked />
            <p className="d-flex justify-content-center py-3">
              Total Blocked Users
            </p>
          </div>
        </div>
      </div>
      <AllUsers />
    </>
  );
};

export default Analysis;
