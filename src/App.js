import { Routes, Route } from 'react-router-dom';
import Sitelogo from './components/Sitelogo';
import Header from './components/Header';
import Articles from './components/Articles';
import Article from './components/Article/Article';
import './App.css';
import Login from './components/Login';

function App() { 

  return (
    <div className="App">
      <Header />
      <main className="app-main">
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>
      <footer className="App-footer">
        <span><Sitelogo />&nbsp;App</span>
      </footer>
    </div>
  );
}

export default App;
