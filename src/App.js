import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

import Sitelogo from './components/Sitelogo/Sitelogo';
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Articles from './components/Articles';
import Article from './components/Article/Article';
import CreateArticle from './components/Article/CreateArticle';
import GuardedRoute from './components/Common/GuardedRoute';
import GuardedOwnerRoute from './components/Common/GuardedOwnerRoute';
import EditArticle from './components/Article/EditArticle';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import './App.css';
import NotAuthorized from './components/Common/NotAuthorized';

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
            <Route path="/" element={<Dashboard />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article" >
              <Route path=":articleId" element={<Article />} />
              <Route element={<GuardedRoute />}>
                <Route path="create" element={<CreateArticle />} />
              </Route>
              <Route element={<GuardedOwnerRoute />}>
                <Route path=":articleId/edit" element={<EditArticle />} />
                <Route path=":articleId/delete" />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/notAuthorized" element={<NotAuthorized />} />
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
