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
            'Authorization': 'token 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',
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      setResults(res.items);
      setTotalCount(res.total_count);
    } catch (e) {
      console.error("ghSearch", e);
    }
  };

  const ghUserSearch = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`, {
        method: "GET",
        mode: "cors",
        headers: {
          'Authorization': 'token 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',
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      return res;
    } catch (e) {
      console.error("ghUserSearch", e);
    }
  };

  const hasContent = (datum) => datum != null && datum.length > 0;

  React.useEffect(() => {
    timerIdRef.current = setTimeout(() => {
      if (hasContent(search)) {
        ghSearch();
      }
    }, 800); // 800 ms
    return () => {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = 0;
    };
  }, [search]);

  React.useEffect(() => {
    // console.log("results", results);
    if (hasContent(results)) {
      const newuserdata = results.map((user) => {
        return ghUserSearch(user.login);
      });
      console.log("newuserdata", newuserdata);
      Promise.all([...newuserdata]).then(ans=>{
        console.log("ans",ans)
      }).catch(err=>console.error(err))
    }
  }, [results]);

  return (
    <div className="App">
      <header className="App-header">
        <span>GitHub Search</span>
        <div className="App-search-box">
          <input value={search} onChange={(e) => setSearch(e.target.value)} />
          <Users users={results} />
        </div>
      </header>
    </div>
  );
}

export default App;
