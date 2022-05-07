import { Provider } from 'react-redux';
import store from './redux/Index';
import RoutesContainer from './route/Routes';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <RoutesContainer />
    </Provider>

  );
}

export default App;
