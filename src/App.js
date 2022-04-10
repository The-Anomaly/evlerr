import { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/Index';
import RoutesContainer from './route/Routes';
import Loading from './utils/Loading';


function App() {

  


  return (
    <Provider store={store}>
      <Suspense fallback={'Loading...'}>
        <RoutesContainer />
      </Suspense>
    </Provider>

  );
}

export default App;
