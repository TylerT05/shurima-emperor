import React from "react";
import ParticipantList from "./ParticipantList";

const TeamInfo = ({
  name,
  teams,
  participantsTeam1,
  participantsTeam2,
  gameDuration,
  largestDamageDealtToChampions,
}) =>
  teams.map((t) => (
    <table
      className="card-text table table-dark table-striped small"
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      <thead>
        <tr>
          <td>
            <div className="row" style={{ marginTop: 12 }}>
              <div className="col">
                {t.teamId === 100 ? (
                  <h6 className="text-primary strong">Team 1</h6>
                ) : (
                  <h6 className="text-danger strong">Team 2</h6>
                )}
              </div>
              <div className="col">
                <p>
                  {t.totalKills}/{t.totalDeaths}/{t.totalAssists}
                </p>
              </div>
              <div className="col">
                <img
                  src={"/img/turret-icon.png"}
                  width={14}
                  alt="turret icon"
                />
                <span style={{ marginLeft: 10 }}>{t.towerKills}</span>
              </div>
              <div className="col">
                <img
                  src={"/img/inhibitor-icon.png"}
                  width={20}
                  alt="inhibitor icon"
                />
                <span style={{ marginLeft: 10 }}>{t.inhibitorKills}</span>
              </div>
              <div className="col">
                <img
                  src={"/img/dragon-icon.png"}
                  width={20}
                  alt="dragon icon"
                />
                <span style={{ marginLeft: 10 }}>{t.dragonKills}</span>
              </div>
              <div className="col">
                <img
                  src={"/img/rift-herald-icon.png"}
                  width={20}
                  alt="rift herald icon"
                />
                <span style={{ marginLeft: 10 }}>{t.riftHeraldKills}</span>
              </div>
              <div className="col">
                <img src={"/img/baron-icon.png"} width={20} alt="baron icon" />
                <span style={{ marginLeft: 10 }}>{t.baronKills}</span>
              </div>
              <div className="col">
                <img src={"/img/gold-icon.png"} width={20} alt="gold icon" />
                <span style={{ marginLeft: 10 }}>
                  {t.totalGoldEarned.toLocaleString()}
                </span>
              </div>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        {t.teamId === 100 ? (
          <ParticipantList
            name={name}
            participants={participantsTeam1}
            gameDuration={gameDuration}
            largestDamageDealtToChampions={largestDamageDealtToChampions}
          />
        ) : (
          <ParticipantList
            name={name}
            participants={participantsTeam2}
            gameDuration={gameDuration}
            largestDamageDealtToChampions={largestDamageDealtToChampions}
          />
        )}
      </tbody>
    </table>
  ));

export default TeamInfo;
