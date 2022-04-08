import { Suspense } from 'react';
import RoutesContainer from './route/Routes';


function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <RoutesContainer />
    </Suspense>
  );
}

export default App;
