import React from 'react';
import styles from './Loading.module.css';

type TLoading = {};

const Loading: React.FC<TLoading> = ({}): JSX.Element => {
    return (
        <div className={styles['loading-wrapper']}>
            <img src={`/assets/icons/loading.png`} width={50} height={50} />
        </div>
    );
};

export default Loading;
