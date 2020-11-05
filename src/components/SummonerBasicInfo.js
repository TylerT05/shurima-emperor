import React from "react";
import Moment from "moment";

const SummonerBasicInfo = ({ info }) => (
  <div
    className="shadow bg-dark card"
    style={{
      marginTop: 10,
      marginBottom: 10,
    }}
  >
    <div className="card-body text-center">
      <div className="row card-text">
        <div className="col-md-4">
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <span
              className="badge"
              style={{
                color: "white",
                position: "absolute",
                right: -20,
                bottom: 0,
                textAlign: "center",
                borderRadius: 30,
                padding: 10,
                fontSize: 16,
                background: "#203354",
              }}
            >
              {info.summonerLevel}
            </span>
            <img
              className="rounded-circle bg-warning"
              style={{ width: 120, padding: 4 }}
              src={"/img/profileicon/" + info.profileIconId + ".png"}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-8" style={{ marginTop: 14 }}>
          <h2 className="text-white text-left">{info.name}</h2>
          <p className="text-secondary text-left">
            Last played: {Moment(info.lastPlayed).fromNow()}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SummonerBasicInfo;
