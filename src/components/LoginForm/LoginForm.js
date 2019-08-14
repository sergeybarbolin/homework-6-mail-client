import React from 'react';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';
// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

export default ({isAuthorized, authError, authorize}) => {

    const validForm = event => {
        event.preventDefault();
        
        const {email, password} = event.target;

        authorize(email.value, password.value);
    }

    return (

        isAuthorized 
            ? <Redirect to="/app" /> 
            : <div className={styles.bg}>
                <form className={`${styles.form} t-form`} onSubmit={validForm}>
                    <p>
                        <label htmlFor="email">
                            <span className={styles.labelText}>Почта</span>
                        </label>
                        <input type="text" name="email" className={`${styles.input} t-input-email`}/>
                    </p>

                    <p>
                        <label htmlFor="password">
                            <span className={styles.labelText}>Пароль</span>
                        </label>
                        <input type="password" name="password" className={`${styles.input} t-input-password`}/>
                    </p>

                    { authError && <p className={styles.error}>{authError}</p> }
                    
                    <div className={styles.buttons}>
                        <button 
                            className={`${styles.button} t-login`}
                            type="submit"
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </div>
            
    )
}