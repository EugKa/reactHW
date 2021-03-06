import * as React from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../../utils';
import styles from '../../styles/app.module.scss';
const {REACT_APP_APY_KEY, 
        REACT_APP_APP_NAME, 
        REACT_APP_REDIRECT_URL, 
        REACT_APP_SCOPE} = process.env

export class Login extends React.Component {
    render() {
        const requestUrl = `https://trello.com/1/authorize?return_url=${REACT_APP_REDIRECT_URL}&expiration=1day&name=${REACT_APP_APP_NAME}&scope=${REACT_APP_SCOPE}&response_type=token&key=${REACT_APP_APY_KEY}`
        return  <div className={styles.login}>
            <a className={styles.login_link} href={requestUrl}>Login with trello</a>
        </div>
    }
}