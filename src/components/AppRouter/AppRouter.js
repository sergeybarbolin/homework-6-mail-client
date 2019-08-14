// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import Home from './../Home';
import InboxList from './../InboxList';
import InboxMail from './../InboxMail';
import OutboxList from './../OutboxList';
import OutboxMail from './../OutboxMail';

export default () => (
    <div>
      <ul>
        <li><Link to="/app/home">Home</Link></li>
        <li><Link to="/app/inbox">Inbox</Link></li>
        <li><Link to="/app/outbox">Outbox</Link></li>
      </ul>
   
      <hr />
    
      <Route path="/app" component={Home} />
      <Route path="/app/home" component={Home} />
      <Route path="/app/inbox" component={InboxList} />
      <Route path="/app/outbox" component={OutboxList} />
      <Redirect to="/app" />
    </div>
);