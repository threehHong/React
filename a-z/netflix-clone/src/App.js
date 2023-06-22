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
      2. Outlet 컴포넌트 안에 route index elemetn로 지정한 MainPage 컴포넌트가
				 기본적으로 보여진다.
      3. url 끝 부분에 따라 DetailPage나 SearchPage가 보여진다
         (:movieId일 경우 DetailPage 페이지, search일 경우 SearchPage가 보여진다).
      */}

      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 
					nested routing 구조
				  1. Route 컴포넌트 내부에 중첩할 Route 컴포넌트 배치.
					2. 메인으로 보여질 부분 부모 Route 컴포넌트에 path="/" 속성 추가
					3. 중첩 메인으로 보여질 부분 자식 Route 컴포넌트에 index element 속성 추가
				*/}
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
