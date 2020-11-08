import React from "react";
import champions from "../data/en_US/championFull.json";

const BanList = ({ bans }) => (
  <li class="nav-item ml-auto">
    <div>
      {bans.map((b) =>
        b.pickTurn < 6 ? (
          <img
            className="rounded-circle bg-primary"
            src={"/img/champion/" + champions.keys[b.championId] + ".png"}
            width={30}
            onError={(i) => (i.target.src = "/img/item-background.png")}
            style={{
              padding: 2,
            }}
            alt="summoner icon"
          />
        ) : (
          ""
        )
      )}
      <span
        className="text-white text-secondary"
        style={{
          marginLeft: 4,
          marginRight: 4,
        }}
      >
        Bans
      </span>
      {bans.map((b) =>
        b.pickTurn > 5 ? (
          <img
            className="rounded-circle bg-danger"
            src={"/img/champion/" + champions.keys[b.championId] + ".png"}
            width={30}
            onError={(i) => (i.target.src = "/img/item-background.png")}
            style={{
              padding: 2,
            }}
            alt="banned champion icon"
          />
        ) : (
          ""
        )
      )}
    </div>
  </li>
);

export default BanList;
