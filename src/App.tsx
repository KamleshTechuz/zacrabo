import { useRoutes } from 'react-router-dom';
import { FullLayout } from './layouts/Full.layout';
import { FULL_ROUTES } from './shared/routes/Full.routing';

function App() {
  const element = useRoutes([
    {
        path: "/",
        element: <FullLayout />,
        children: FULL_ROUTES
    }
  ]);
  return element;
}

export default App;
