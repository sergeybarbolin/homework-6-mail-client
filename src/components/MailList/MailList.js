// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css'

export default ( {data, category} ) => (
    <div className={`${styles.container} t-${category}-list`}>
        { data.map(
            ({id, body}) => <Link className={styles.link} key={id} to={`/app/${category}/${id}`}>{body.slice(0, 50).trim() + '...'}</Link>
        ) }
        
    </div>
);