import React, { Component } from "react";
import MatchesList from "../components/MatchesList";
import EntriesList from "../components/EntriesList";
import BasicInfo from "../components/SummonerBasicInfo";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export class SummonerPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.loadMoreMatches = this.loadMoreMatches.bind(this);

    this.state = {
      summonerName: "",
      summonerInfo: [],
      leagueEntries: [],
      error: "",
      index: 10,
      matches: [],
    };
  }

  componentDidMount() {
    const { name } = this.props.match.params;

    fetch(
      `https://localhost:44355/api/summoners/by-name/${name}?index=${this.state.index}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          summonerInfo: result,
          leagueEntries: result.leagueEntries,
          matches: result.matchOveralls,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      fetch(
        `https://localhost:44355/api/summoners/by-name/${this.state.summonerInfo.name}?index=${this.state.index}`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            matches: this.state.matches.concat(result.matchOveralls),
          });
        });
    }
  }

  loadMoreMatches() {
    this.setState({
      index: this.state.index + 10,
    });
  }

  onChangeSearch(e) {
    this.setState({
      summonerName: e.target.value,
    });
  }

  onSearch() {
    const { history } = this.props;

    if (this.state.summonerName !== "") {
      fetch(
        `https://localhost:44355/api/summoners/verify-by-name/${this.state.summonerName}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result === true) {
            history.push(`/summonerDetail/${this.state.summonerName}`);
            window.location.reload(false);
          } else {
            this.setState({
              error: "Summoner name does not match any record!",
            });
          }
        });
    } else {
      this.setState({
        error: "Please enter a summoner name!",
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link className="nav-brand border-right border-secondary" to="/">
              <img
                style={{ marginRight: 14, width: 80 }}
                src={"/shurima_logo.png"}
                alt=""
              />
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  className="nav-link h4 text-white"
                  to="/"
                  style={{ marginLeft: 14 }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link h4 text-white"
                  to="/"
                  style={{ marginLeft: 14 }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link h4 text-white"
                  to="/"
                  style={{ marginLeft: 14 }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="input-group border border-dark rounded">
                  <input
                    type="text"
                    value={this.state.summonerName}
                    className="form-control border-0"
                    onChange={this.onChangeSearch}
                    style={{ width: 400 }}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-light" onClick={this.onSearch}>
                      <FaSearch />
                    </button>
                  </div>
                </div>
                {this.state.error !== "" ? (
                  <p className="text-warning" style={{ marginBottom: 0 }}>
                    {this.state.error}
                  </p>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </nav>
        </div>
        <div className="container" style={{ marginTop: 60, marginBottom: 60 }}>
          <div className="row">
            <div className="col-md-6">
              <BasicInfo info={this.state.summonerInfo} />
            </div>
            <div className="col-md-6">
              {this.state.leagueEntries && this.state.leagueEntries.length ? (
                <EntriesList entries={this.state.leagueEntries} />
              ) : (
                <EntriesList entries={null} />
              )}
            </div>
          </div>
          <div>
            <MatchesList
              basicInfo={this.state.summonerInfo}
              matches={this.state.matches}
            />
            <div
              className="btn btn-dark"
              style={{ width: "100%" }}
              onClick={this.loadMoreMatches}
            >
              Load more
            </div>
          </div>
        </div>
      </div>
    );
  }
}
