import { Provider } from 'react-redux';
import store from './redux/Index';
import RoutesContainer from './route/Routes';


function App() {



  return (
    <Provider store={store}>
      <RoutesContainer />
    </Provider>

  );
}

export default App;
