import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import { notification } from 'antd'
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './utils/serviceWorker';

const initialState = {
  taskGroups: undefined
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADDED_NEW_TASK_GROUP':
      taskGroup: {
        axios.get('/api/categories')
          .then(response => {
            return response.data
          })
          .catch(() => {
            notification.error({
              message: 'Error loading task groups'
            })
          })
      }
      break
    default:
      return state
  }
}

const store = createStore(reducer)
store.dispatch({ type: 'ADDED_NEW_TASK_GROUP' })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
