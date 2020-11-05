import React from "react";
import Moment from "moment";
import queues from "../data/en_US/queues.json";

const MatchBasicInfo = ({ summonerBasicInfo, participants, match }) => (
  <div className="container" style={{ marginTop: 60, marginBottom: 40 }}>
    <div
      className="shadow bg-dark card"
      style={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <div className="card-body text-center">
        <div
          className="row"
          style={{
            marginTop: 10,
          }}
        >
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
                {summonerBasicInfo.summonerLevel}
              </span>
              {participants.map((p) =>
                p.summonerName == summonerBasicInfo.name ? (
                  p.stats.win ? (
                    <img
                      className="rounded-circle bg-primary"
                      style={{ width: 120, padding: 4 }}
                      src={
                        "/img/profileicon/" +
                        summonerBasicInfo.profileIconId +
                        ".png"
                      }
                    />
                  ) : (
                    <img
                      className="rounded-circle bg-danger"
                      style={{ width: 120, padding: 4 }}
                      src={
                        "/img/profileicon/" +
                        summonerBasicInfo.profileIconId +
                        ".png"
                      }
                    />
                  )
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div className="col-md-8" style={{ marginTop: 10 }}>
            <h2 className="text-white card-text text-left">
              {summonerBasicInfo.name}
            </h2>
            <div className="row">
              <div className="col-md-2" style={{ padding: 10 }}>
                {participants.map((p, key) =>
                  p.summonerName == summonerBasicInfo.name ? (
                    match.gameDuration < 300 ? (
                      <p
                        className="text-white bg-secondary"
                        style={{
                          borderRadius: 30,
                          padding: 10,
                          fontSize: 16,
                        }}
                      >
                        Remake
                      </p>
                    ) : p.stats.win ? (
                      <p
                        className="text-white bg-primary"
                        style={{
                          borderRadius: 30,
                          padding: 10,
                          fontSize: 16,
                        }}
                      >
                        Victory
                      </p>
                    ) : (
                      <p
                        className="text-white bg-danger"
                        style={{
                          borderRadius: 30,
                          padding: 10,
                          fontSize: 16,
                        }}
                      >
                        Defeat
                      </p>
                    )
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="col-md-10" style={{ padding: 10 }}>
                {queues.map((q, key) =>
                  q.queueId == match.queueId ? (
                    <p
                      className="text-left text-secondary"
                      style={{
                        color: "white",
                        paddingTop: 10,
                        fontSize: 16,
                      }}
                    >
                      {q.description}
                      <span style={{ marginLeft: 10, marginRight: 10 }}>
                        &bull;
                      </span>
                      {(match.gameDuration / 60).toFixed(0)}:
                      {match.gameDuration % 60 < 10
                        ? "0" + (match.gameDuration % 60).toString()
                        : match.gameDuration % 60}
                      <span style={{ marginLeft: 10, marginRight: 10 }}>
                        &bull;
                      </span>
                      {Moment(match.gameCreation).format("MM/DD/YYYY, h:mm a")}
                    </p>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MatchBasicInfo;
