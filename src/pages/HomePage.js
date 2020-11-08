import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.refresh = this.refresh.bind(this);

    this.state = {
      summonerName: "",
      error: "",
    };
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
            this.setState({
              error: "",
            });
            history.push(`/summonerdetail/${this.state.summonerName}`);
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

  refresh = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link
              className="nav-brand border-right border-secondary"
              onClick={this.refresh}
            >
              <img
                style={{ marginRight: 14, width: 80 }}
                src={"/shurima_logo.png"}
                alt="web app logo"
              />
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  className="nav-link h4 text-white"
                  onClick={this.refresh}
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
          </nav>
        </div>
        <div className="container" style={{ marginTop: 200, marginBottom: 40 }}>
          <img style={{ width: 800 }} src={"/shurima.png"} alt="" />
          <div
            className="input-group border border-dark rounded"
            style={{
              marginTop: 140,
              marginBottom: 40,
              width: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <input
              value={this.state.summonerName}
              placeholder="Enter a summoner name..."
              type="text"
              className="form-control border-0"
              onChange={this.onChangeSearch}
            />
            <div className="input-group-append">
              <button className="btn btn-light" onClick={this.onSearch}>
                <FaSearch />
              </button>
            </div>
          </div>
          {this.state.error !== "" ? (
            <h4 className="text-warning">{this.state.error}</h4>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
