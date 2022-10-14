import { useRef, useState } from 'react';
import styles from './Notification.module.css';

type TNotification = {
    type: 'success' | 'warning' | 'danger';
    text: string;
};

export const Notification: React.FC<TNotification> = ({ type, text }): JSX.Element => {
    return (
        <div
            style={{
                backgroundColor: type === 'success' ? '#9deb94' : '#f94949',
                color: type === 'success' ? '#000' : '#fff'
            }}
            className={styles['wrapper']}
        >
            {text}
        </div>
    );
};

export default Notification;
