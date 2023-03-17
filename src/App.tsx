import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppRouter } from "routes";
import {store} from 'store';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
