import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Article from "./pages/Artilcle";
import Articles from "./pages/Artilcles";
import Layout from "./Layout";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/profiles/:username" element={<Profile></Profile>} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default App;
