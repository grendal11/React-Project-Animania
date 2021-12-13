import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

import Sitelogo from './components/Sitelogo/Sitelogo';
import Header from './components/Header';
import Articles from './components/Articles';
import Article from './components/Article/Article';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import './App.css';

const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',
};

function App() {

  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  };


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="App">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:articleId" element={<Article />} />
            {/* <Route element={<GuardedRoute />}> */}
              <Route path="/create" >
                <Route path="article" element={<CreateArticle />} />
              </Route>
              {/* <Route path="/edit/:articleId" element={<EditArticle />} /> */}
            {/* </Route> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <span><Sitelogo />&nbsp;App</span>
        </footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
