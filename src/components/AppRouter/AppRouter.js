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

import React, {Fragment} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import { withData } from '../../context/Data';
import Home from './../Home';
import styles from './AppRouter.module.css';
import InboxList from './../InboxList';
import InboxMail from './../InboxMail';
import OutboxList from './../OutboxList';
import OutboxMail from './../OutboxMail';

export default (props) => {
  console.log(props);
  return ( <Fragment>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={`${styles.navList} t-nav-list`}>
            <li className={styles.navElement}>
              <NavLink 
                className={`${styles.Link} t-link-home`} 
                activeClassName="active"
                to="/app/home">
                  Home
              </NavLink>
            </li>
            <li className={styles.navElement}>
              <NavLink className={`${styles.Link} t-link-inbox`} to="/app/inbox">Inbox</NavLink>
            </li>
            <li className={styles.navElement}>
              <NavLink className={`${styles.Link} t-link-outbox`} to="/app/outbox">Outbox</NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.content}>
          <h3 className={styles.title}>
          <Switch>
            <Route path="/app" exact render={() => 'Home'} />
            <Route path="/app/home" render={() => 'Home'} />

            <Route path="/app/inbox" render={() => 'Inbox'} />
            <Route path="/app/outbox" render={() => 'Outbox'} />
          </Switch>
          </h3>

          <Switch>
            <Route path="/app" exact component={Home} />
            <Route path="/app/home" exact component={Home} />

            <Route path="/app/inbox" exact component={ withData(props => <InboxList {...props} />) } />
            <Route path="/app/outbox" exact component={ withData(props => <OutboxList {...props} />) } />

            <Route path="/app/inbox/:id" component={ withData(props => <InboxMail {...props} />) } />
            <Route path="/app/outbox/:id" component={ withData(props => <OutboxMail {...props} />) } />
          </Switch>
        </div>
      </div>
    </div>

  </Fragment>
  )
};