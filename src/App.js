import React from "react";
import "./App.css";
import { Users } from "./components/Users/Users";

function App() {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [usersData, setUsersData] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [appState, setAppState] = React.useState("idle");
  const timerIdRef = React.useRef(0);

  const ghSearch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${search}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: "token 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",
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      console.log("res", res);
      setResults(res.items);
    } catch (e) {
      console.error("ghSearch", e);
      setAppState("idle");
    }
  };

  const ghUserSearch = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: "token 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",
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      return res;
    } catch (e) {
      console.error("ghUserSearch", e);
      setAppState("idle");
    }
  };

  const ghUserStarred = async (user) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/starred`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: "token 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",
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      return res.length;
    } catch (e) {
      console.error("ghUserSearch", e);
      setAppState("idle");
    }
  };

  const ghUserStars = async (user) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: "token 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",
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      let newstars = 0;
      res.forEach((repo) => {
        newstars += repo.stargazers_count;
      });
      return newstars;
    } catch (e) {
      console.error("ghUserSearch", e);
      setAppState("idle");
    }
  };

  const hasContent = (datum) => datum != null && datum.length > 0;

  React.useEffect(() => {
    timerIdRef.current = setTimeout(() => {
      if (hasContent(search)) {
        setAppState("loading");
        ghSearch();
      }
    }, 800); // 800 ms
    return () => {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = 0;
    };
  }, [search]);

  const processUserData = async () => {
    let newarr = [];
    for (let i = 0; i < results.length; i++) {
      const element = results[i];
      const starred = await ghUserStarred(element.login);
      const stars = await ghUserStars(element.login);
      const newuserdata = await ghUserSearch(element.login);
      newarr.push({ ...newuserdata, starred, stars });
    }
    console.log("newarr", newarr);
    setUsersData(newarr);
    setAppState("idle");
  };

  React.useEffect(() => {
    // console.log("results", results);
    if (hasContent(results)) {
      setTotalCount(results.length);
      processUserData();
    }
  }, [results]);

  return (
    <div className="App">
      <header className="App-header">
        <span>GitHub Search</span>
        <div className="App-search-block">
          <input
            className="App-input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="App-total-count">Total count: {totalCount}</span>
          {appState === "idle" ? (
            <Users users={usersData} />
          ) : appState === "loading" ? (
            <span className="App-appstate-loading">Loading ...</span>
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
