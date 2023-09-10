
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Form } from './components/Form';
import { Posts } from './components/Posts';

function App() {
  return (
    <>
      <Provider store={store}>
          <Form/>
          <Posts />
      </Provider>
    </>
  );
}

export default App;

