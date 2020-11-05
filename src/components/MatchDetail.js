import React from "react";
import BanList from "./BanList";
import Overview from "./Overview";
import AdvancedStats from "./AdvancedStats";

const MatchDetail = ({
  bans,
  summonerBasicInfo,
  teams,
  match,
  participantsTeam1,
  participantsTeam2,
}) => (
  <div
    className="shadow bg-dark card"
    style={{
      marginTop: 10,
      marginBottom: 10,
    }}
  >
    <div className="card-body text-center">
      <ul class="nav nav-tabs border-0" role="tablist">
        <li class="nav-item ">
          <a
            class="nav-link active text-light bg-dark border-top-0 border-left-0 border-right-0"
            data-toggle="tab"
            href="#overview"
          >
            Overview
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-light bg-dark border-top-0 border-left-0 border-right-0"
            data-toggle="tab"
            href="#advancedstats"
          >
            Advanced Stats
          </a>
        </li>
        {/* <li class="nav-item">
          <a
            class="nav-link text-light bg-dark border-top-0 border-left-0 border-right-0"
            data-toggle="tab"
            href="#goldgraph"
          >
            Gold Graph
          </a>
        </li> */}
        <BanList bans={bans} />
      </ul>
      <div class="tab-content">
        <div id="overview" class="container tab-pane active">
          <Overview
            name={summonerBasicInfo.name}
            teams={teams}
            largestDamageDealtToChampions={match.largestDamageDealtToChampions}
            gameDuration={match.gameDuration}
            participantsTeam1={participantsTeam1}
            participantsTeam2={participantsTeam2}
          />
        </div>
        <div id="advancedstats" class="container tab-pane fade">
          <AdvancedStats
            name={summonerBasicInfo.name}
            participantsTeam1={participantsTeam1}
            participantsTeam2={participantsTeam2}
          />
        </div>
        {/* <div id="goldgraph" class="container tab-pane fade">
          <br></br>
          <h3>Gold Graph</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div> */}
      </div>
    </div>
  </div>
);

export default MatchDetail;
