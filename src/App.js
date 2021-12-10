import Sitelogo from './components/Sitelogo';
import Header from './components/Header';
import Articles from './components/Articles';
import Article from './components/Article/Article';
import { useState, useEffect, Suspense } from 'react';
import './App.css';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3030/jsonstore/articles')
      .then(res => res.json())
      .then(res => {
        console.log(Object.values(res));
        setArticles(Object.values(res));
      });

  }, []);

  return (
    <div className="App">
      <Header />
      <main className="app-main">
      {/* <Suspense fallback={<p>Loading...</p>}>
          {articles.length > 0
            ? <Articles articles={articles} />
            : <h3 className="no-articles">No games yet</h3>
          }
        </Suspense> */}
        <br />
        <Article />
        </main>
        <footer className="App-footer">
          <span><Sitelogo />&nbsp;App</span>
      </footer>
    </div>
  );
}

export default App;
