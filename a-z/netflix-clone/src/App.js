import Nav from './components/Nav';
import Footer from './components/Footer';
import "./App.css";
import { Outlet, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet /> 
      {/* 
      1. 아울렛은 중첩 Route에만 사용
      2. nav, footer 사이에 아울렛 컴포넌트 안에 route index elemetn로 지정한 MainPage 컴포넌트가 기본적으로 보여지고 그 다음 path에 url 주소창에 따라 DetailPage나 SearchPage가 보여진다.
      */}

      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
