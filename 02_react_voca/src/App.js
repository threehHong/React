import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        {/* 1. Switch 내부는 URL에 따라 각각 다른 페이지를 보여준다고 함. 2. Switch의 외부는 모든 페이지에 공통으로 노출. */}
        <Switch>
          {/* path="/"는 첫페이지를 의미 */}
          <Route exact path="/"> 
            <DayList />
          </Route>

          <Route path="/day">
            <Day />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
