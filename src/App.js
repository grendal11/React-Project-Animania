import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import { NotificationProvider } from './contexts/NotificationContext';

import Sitelogo from './components/Sitelogo/Sitelogo';
import Header from './components/Header';
import GuardedRoute from './components/Common/GuardedRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Articles from './components/Articles/Articles';
import Article from './components/Article/Article';
import CreateArticle from './components/Article/CreateArticle';
import EditArticle from './components/Article/EditArticle';
import ArticleComments from './components/Comment/ArticleComments';
import AddComment from './components/Comment/AddComment';
import DeleteComment from './components/Comment/DeleteComment';
import AddJoke from './components/Joke/AddJoke';
import DeleteJoke from './components/Joke/DeleteJoke';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import './App.css';
import NotAuthorized from './components/Common/NotAuthorized';
import Notification from './components/Common/Notification';
import JokesList from './components/Joke/JokesList';
import LikeArticle from './components/Article/LikeArticle';
import AddJokeReaction from './components/Joke/AddJokeReaction';


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
      <NotificationProvider>
        <div className="App">
          <Header />
          <Notification />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article" >
                <Route path=":articleId" element={<Article />} />
                <Route path=":articleId/comments" element={<ArticleComments />} />
                <Route element={<GuardedRoute />}>
                  <Route path="create" element={<CreateArticle />} />
                  <Route path=":articleId/comment" element={<AddComment />} />
                  <Route path=":articleId/delete/:commentId" element={<DeleteComment />} />
                  <Route path=":articleId/like" element={<LikeArticle />} />
                  <Route path=":articleId/edit" element={<EditArticle />} />
                  <Route path=":articleId/delete" />
                </Route>
                {/* <Route element={<GuardedOwnerRoute />}>
              </Route> */}
              </Route>
              <Route path="/jokes" element={<JokesList />} />
              <Route path="/joke" >
                {/* <Route path=":jokeId" element={<Joke />} /> */}
                <Route path="create" element={<AddJoke />} />
                <Route path=":jokeId/delete" element={<DeleteJoke />} />
                <Route path=":jokeId/reaction/:type" element={<AddJokeReaction />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/notAuthorized" element={<NotAuthorized />} />
              <Route path="/home" element={<Navigate to="/"/>} />
            </Routes>
          </main>
          <footer className="App-footer">
            <span><Sitelogo />&nbsp;App</span>
          </footer>
        </div>
      </NotificationProvider>
    </AuthContext.Provider>
  );
}

export default App;
