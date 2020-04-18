import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './components/streams/streamCreate';
import StreamDelete from './components/streams/streamDelete';
import StreamEdit from './components/streams/streamEdit';
import StreamList from './components/streams/streamList';
import StreamShow from './components/streams/streamShow';
import Header from './components/header';
import history from './history';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;
