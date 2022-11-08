
import Home from './Components/Home';
import Page from './Components/Page'
import { Switch, Route, } from 'react-router-dom';
import Detail from './Components/Detail';
import Create from './Components/Create';

function App(props) {



  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Page} />
        <Route path='/home' exact component={Home} />
        <Route path='/create' exact component={Create} />
        <Route path='/detail/:recipeId' exact component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
