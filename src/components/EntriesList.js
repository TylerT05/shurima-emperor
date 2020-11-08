import React from "react";

const EntriesList = ({ entries }) => (
  <div
    className="card shadow bg-dark"
    style={{
      marginTop: 10,
      marginBottom: 10,
    }}
  >
    <div className="card-body text-center">
      <table className="card-text table table-dark table-striped">
        <tbody>
          {entries === null ? (
            <tr>
              <td>
                <p>Unranked</p>
              </td>
            </tr>
          ) : (
            entries.map((entry, key) => (
              <tr>
                <td>
                  <div className="row" style={{ height: 100 }}>
                    <div className="col-3">
                      <img
                        src={"/ranked-emblems/Emblem_" + entry.tier + ".png"}
                        style={{ width: 80 }}
                        alt="tier icon"
                      />
                    </div>
                    <div className="col-9" style={{ marginTop: 16 }}>
                      <div className="row">
                        <div className="col-6">
                          {entry.queueType === "RANKED_SOLO_5x5" ? (
                            <p>Ranked Solo/Duo</p>
                          ) : entry.queueType === "RANKED_FLEX_SR" ? (
                            <p>Ranked Flex</p>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="col-4">
                          <p>
                            {entry.tier} {entry.rank}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <p>{entry.leaguePoints} LP</p>
                        </div>
                        <div className="col-4">
                          <p>{entry.wins} W</p>
                        </div>
                        <div className="col-4">
                          <p>{entry.losses} L</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default EntriesList;
