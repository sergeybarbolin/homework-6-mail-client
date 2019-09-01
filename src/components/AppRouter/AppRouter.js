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
import {Link, Route, Switch} from 'react-router-dom';
import { withData } from '../../context/Data';
import Home from './../Home';
import styles from './AppRouter.module.css';
import InboxList from './../InboxList';
import InboxMail from './../InboxMail';
import OutboxList from './../OutboxList';
import OutboxMail from './../OutboxMail';

export default ({location}) => {
  return ( <Fragment>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={`${styles.navList} t-nav-list`}>
            <li className={styles.navElement}>
              <Link className={`${styles.Link} t-link-home active`} to="/app/home">Home</Link>
            </li>
            <li className={styles.navElement}>
              <Link className={`${styles.Link} t-link-inbox`} to="/app/inbox">Inbox</Link>
            </li>
            <li className={styles.navElement}>
              <Link className={`${styles.Link} t-link-outbox`} to="/app/outbox">Outbox</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.content}>
          <h3 className={styles.title}>
            {
              location.pathname.indexOf('inbox') !== -1 ? 'Inbox'
              : location.pathname.indexOf('outbox') !== -1 ? 'Outbox'
              : 'Home'
            }
          </h3>

          <Switch>
            <Route path="/app" exact component={Home} />
            <Route path="/app/home" exact component={Home} />
            <Route path="/app/outbox" exact component={ withData(props => <OutboxList {...props} />) } />

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