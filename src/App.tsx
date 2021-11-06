import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useInfinitScroll } from "./hooks/InfiniteScroll.hook";
import { baseData } from "./App.data";

function App() {
  const loadMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      setData([...data].concat(baseData));
      setLoading(false);
    }, 900);
  };

  useInfinitScroll(".App-link", true, loadMoreData);
  const [data, setData] = useState(baseData);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <div className="container">
        {/* content */}
        {data.map(({ title, description }, index) => (
          <section key={index}>
            <h1>
              {index} - {title}
            </h1>
            <p>{description}</p>
          </section>
        ))}

        <br />
        <br />
        <br />
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <a
            className={`App-link`}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            More content...
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
