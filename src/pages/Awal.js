import { useEffect, useState } from "react";

const Awal = () => {
  const [hideLoader, setHideLoader] = useState({});

  useEffect(() => {
    setTimeout(() => setHideLoader({ display: "none" }), 1000);
  });

  return (
    <>
      <div className="loader-container" id="page-loader" style={hideLoader}>
        <div className="loading-wrapper">
          <div className="loader-animation" id="loader-animation">
            <span className="loader">
              <span className="loader-inner" />
            </span>
          </div>
          <div className="loader-name" id="loader-name">
            Perwira <strong>Abrianto</strong>
          </div>
          <p className="loader-job" id="loader-job">
            Student Juara Coding
          </p>
        </div>
      </div>
    </>
  );
};

export default Awal;
