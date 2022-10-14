import React from 'react';
import { useState } from 'react';
import styles from './CategoryFilter.module.css';

type TCategoryFilter = {
    name: string;
};

const CategoryFilter: React.FC<TCategoryFilter> = ({ name }): JSX.Element => {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className={styles['category-filter']}>
            <div className={styles['checkbox']}></div>
            <span>{name}</span>
        </div>
    );
};

export default CategoryFilter;
