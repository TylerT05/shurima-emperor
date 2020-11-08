import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import champions from "../data/en_US/championFull.json";
import queues from "../data/en_US/queues.json";
import { FaChartBar } from "react-icons/fa";

const MatchesList = ({ matches, basicInfo }) => (
  <div
    className="card shadow bg-dark"
    style={{ marginTop: 10, marginBottom: 10 }}
  >
    <div className="card-body text-center">
      <table className="card-text table table-dark table-striped small">
        <tbody>
          {matches.map((match, key) => (
            <tr>
              <td>
                <div className="row" style={{ height: 50 }}>
                  <div className="col-1">
                    <Link
                      className="nav-link h4 text-warning"
                      to={`/matchdetail/${basicInfo.name}/${match.gameId}`}
                    >
                      <FaChartBar />
                    </Link>
                  </div>
                  <div className="col-1">
                    <img
                      src={
                        "/img/champion/" +
                        champions.keys[match.champion] +
                        ".png"
                      }
                      style={{ width: 50 }}
                      alt="champion icon"
                    />
                  </div>
                  <div className="col">
                    <div>
                      {match.gameDuration < 300 ? (
                        <h6 className="text-secondary">Remake</h6>
                      ) : match.win ? (
                        <h6 className="text-primary">Victory</h6>
                      ) : (
                        <h6 className="text-danger">Defeat</h6>
                      )}
                      <p className="text-secondary">
                        {match.role === "DUO_SUPPORT" ? "SUPPORT" : match.lane}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{ marginTop: 6 }}>
                      <p style={{ marginBottom: 0 }}>
                        {match.kills} / {match.deaths} / {match.assists}
                      </p>
                      <p className="text-secondary" style={{ margin: 0 }}>
                        {match.deaths > 0
                          ? (
                              (match.kills + match.assists) /
                              match.deaths
                            ).toFixed(2)
                          : (match.kills + match.assists).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{ marginTop: 12 }}>
                      <p>
                        {(
                          match.totalDamageDealtToChampions /
                          (match.gameDuration / 60)
                        ).toFixed(2)}{" "}
                        DMG/min
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div style={{ marginTop: 12 }}>
                      <p>
                        {(
                          match.totalMinionsKilled /
                          (match.gameDuration / 60)
                        ).toFixed(2)}{" "}
                        CS/min
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div style={{ marginTop: 6 }}>
                      <p style={{ marginBottom: 0 }}>
                        {queues
                          .find((q) => q.queueId === match.queue)
                          .description.slice(0, -6)}
                      </p>
                      <p className="text-secondary">
                        {(match.gameDuration / 60).toFixed(0)}:
                        {match.gameDuration % 60 < 10
                          ? "0" + (match.gameDuration % 60).toString()
                          : match.gameDuration % 60}
                        <span style={{ marginLeft: 4, marginRight: 4 }}>
                          &bull;
                        </span>
                        {Moment(match.timestamp).fromNow()}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default MatchesList;
