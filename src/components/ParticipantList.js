import React from "react";
import { Link } from "react-router-dom";
import champions from "../data/en_US/championFull.json";
import summoner from "../data/en_US/summoner.json";
import allRunes from "../data/en_US/runesReforged.json";

const ParticipantList = ({
  name,
  participants,
  gameDuration,
  largestDamageDealtToChampions,
}) =>
  participants.map((p, key) => (
    <tr>
      <td>
        <div className="row" style={{ height: 42 }}>
          <div className="col-1">
            {p.summonerName === name ? (
              <img
                className="rounded-circle bg-warning"
                src={"/img/champion/" + champions.keys[p.championId] + ".png"}
                width={40}
                style={{
                  padding: 2,
                }}
                alt="champion icon"
              />
            ) : p.teamId === 100 ? (
              <img
                className="rounded-circle bg-primary"
                src={"/img/champion/" + champions.keys[p.championId] + ".png"}
                width={40}
                style={{
                  padding: 2,
                }}
                alt="champion icon"
              />
            ) : (
              <img
                className="rounded-circle bg-danger"
                src={"/img/champion/" + champions.keys[p.championId] + ".png"}
                width={40}
                style={{
                  padding: 2,
                }}
                alt="champion icon"
              />
            )}
          </div>
          <div className="col-1">
            <div className="container">
              {Object.keys(summoner["data"]).map((s) =>
                summoner["data"][s]["key"] === p.spell1Id ? (
                  <img
                    src={"/img/spell/" + summoner["data"][s]["image"]["full"]}
                    width={20}
                    alt="summoner spell icon"
                  />
                ) : (
                  ""
                )
              )}
              {Object.keys(summoner["data"]).map((s) =>
                summoner["data"][s]["key"] === p.spell2Id ? (
                  <img
                    src={"/img/spell/" + summoner["data"][s]["image"]["full"]}
                    width={20}
                    alt="summoner spell icon"
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div className="col-1">
            <div className="container">
              {allRunes.map((r) =>
                r["id"] === p.stats.perkPrimaryStyle
                  ? r["slots"].map((rr) =>
                      rr["runes"].map((rrr) =>
                        rrr["id"] === p.stats.perk0 ? (
                          <img
                            src={"/img/" + rrr.icon}
                            width={20}
                            alt="summoner rune icon"
                          />
                        ) : (
                          ""
                        )
                      )
                    )
                  : ""
              )}
              {allRunes.map((r) =>
                r["id"] === p.stats.perkSubStyle ? (
                  <img
                    src={"/img/" + r.icon}
                    width={16}
                    alt="summoner rune icon"
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div className="col-2 text-left">
            <Link
              className="text-white"
              to={`/summonerdetail/${p.summonerName}`}
            >
              {p.summonerName}
            </Link>
          </div>
          <div className="col text-left">
            <img
              className="rounded border border-secondary"
              src={"/img/item/" + p.stats.item0 + ".png"}
              width={20}
              onError={(i) => (i.target.src = "/img/item-background.png")}
              alt="item icon"
            />
            <img
              className="rounded border border-secondary"
              src={"/img/item/" + p.stats.item1 + ".png"}
              width={20}
              onError={(i) => (i.target.src = "/img/item-background.png")}
              alt="item icon"
            />
            <img
              className="rounded border border-secondary"
              src={"/img/item/" + p.stats.item2 + ".png"}
              width={20}
              onError={(i) => (i.target.src = "/img/item-background.png")}
              alt="item icon"
            />
            <img
              className="rounded border border-secondary"
              src={"/img/item/" + p.stats.item3 + ".png"}
              width={20}
              onError={(i) => (i.target.src = "/img/item-background.png")}
              alt="item icon"
            />
            <img
              className="rounded border border-secondary"
              src={"/img/item/" + p.stats.item4 + ".png"}
              width={20}
              onError={(i) => (i.target.src = "/img/item-background.png")}
              alt="item icon"
            />
            <img
              className="rounded border border-secondary"
              src={"/img/item/" + p.stats.item5 + ".png"}
              width={20}
              onError={(i) => (i.target.src = "/img/item-background.png")}
              alt="item icon"
            />
          </div>
          <div className="col">
            <p style={{ margin: 0 }}>
              {p.stats.kills}/{p.stats.deaths}/{p.stats.assists}
            </p>
            <p className="text-secondary">
              {p.stats.deaths > 0
                ? ((p.stats.kills + p.stats.assists) / p.stats.deaths).toFixed(
                    2
                  )
                : (p.stats.kills + p.stats.assists).toFixed(2)}
            </p>
          </div>
          <div className="col">
            <p>
              {p.stats.totalMinionsKilled}{" "}
              <span className="text-secondary">
                ({(p.stats.totalMinionsKilled / (gameDuration / 60)).toFixed(2)}
                )
              </span>{" "}
              CS
            </p>
          </div>
          <div className="col">
            <p>{p.stats.totalDamageDealtToChampions.toLocaleString()} Dmg</p>
            <div
              class="progress bg-secondary"
              style={{
                height: 4,
              }}
            >
              {p.summonerName === name ? (
                <div
                  class="progress-bar bg-warning"
                  style={{
                    width: `${
                      (p.stats.totalDamageDealtToChampions * 100) /
                      largestDamageDealtToChampions
                    }%`,
                  }}
                ></div>
              ) : p.teamId === 100 ? (
                <div
                  class="progress-bar"
                  style={{
                    width: `${
                      (p.stats.totalDamageDealtToChampions * 100) /
                      largestDamageDealtToChampions
                    }%`,
                  }}
                ></div>
              ) : (
                <div
                  class="progress-bar bg-danger"
                  style={{
                    margin: 0,
                    width: `${
                      (p.stats.totalDamageDealtToChampions * 100) /
                      largestDamageDealtToChampions
                    }%`,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </td>
    </tr>
  ));

export default ParticipantList;
