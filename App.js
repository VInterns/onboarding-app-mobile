import React from 'react';
import Main from './App/component/Main';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './App/reducer';

export default class App extends React.Component {

  render(){
  return (
      <Provider store={createStore(reducer, {} ,applyMiddleware(ReduxThunk))}>
        <Main/>
      </Provider>
    );
  }
}
