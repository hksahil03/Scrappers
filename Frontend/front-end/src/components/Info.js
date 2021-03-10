import React from "react";
import { FcOk } from "react-icons/fc";
import { TiTimes } from "react-icons/ti";

export default function Info(props) {
  const { setdrawer } = props;
  return (
    <div>
      <TiTimes
        style={{
          color: "white",
          position: "absolute",
          right: "20px",
          top: "10px",
          fontSize: "20px",
        }}
        onClick={() => {
          setdrawer(false);
        }}
      />
      <div className="list">
        <p>What does this site do?</p>
        <p>This website shows the Top 3 of today's Internet.</p>
      </div>

      <div className="list">
        <p>How do I get the data?</p>
        <p>
          I run a cron job every 12 hours which scraps the data from respective
          websites and store it in database.
        </p>
      </div>
      <hr style={{ margin: "0px 20px" }}></hr>
      <div className="list">
        <div style={{ display: "flex" }}>
          <span>
            <FcOk />
          </span>
          <span style={{ marginLeft: "8px" }}>
            Need the data which updates every hour ?
          </span>
        </div>
        <div style={{ display: "flex", marginTop: "5px" }}>
          <span>
            <FcOk />
          </span>
          <span style={{ marginLeft: "8px" }}>
            Want your custom list to be shown ?
          </span>
        </div>

        {/* CTA */}

        <a href="mailto:officialhksahil@gmail.com" class="btn success">
          Get premium ! Drop a message
        </a>
      </div>
    </div>
  );
}
