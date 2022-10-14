import React from 'react';
import { useState } from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import styles from './Filter.module.css';

const Filter: React.FC = ({}): JSX.Element => {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className={styles['filter-wrapper']}>
            <strong>Filter by:</strong>
            <div className={styles['filters']}>
                <div className={styles['single-filter']}>
                    <span>Rating</span>
                    <img src={`/assets/icons/star.png`} className={styles['movie-poster']} />
                </div>
                <div className={styles['single-filter']}>
                    <span>Category</span>
                    <div className={styles['category-filters']}>
                        <div>
                            <CategoryFilter name="Action" />
                            <CategoryFilter name="Adventure" />
                            <CategoryFilter name="Animation" />
                            <CategoryFilter name="Biography" />
                            <CategoryFilter name="Comedy" />
                            <CategoryFilter name="Crime" />
                            <CategoryFilter name="Documentary" />
                            <CategoryFilter name="Drama" />
                            <CategoryFilter name="Fantasy" />
                        </div>
                        <div>
                            <CategoryFilter name="History" />
                            <CategoryFilter name="Horror" />
                            <CategoryFilter name="Music" />
                            <CategoryFilter name="Musical" />
                            <CategoryFilter name="Mystery" />
                            <CategoryFilter name="Romance" />
                            <CategoryFilter name="Sci-Fi" />
                            <CategoryFilter name="Sport" />
                            <CategoryFilter name="Thriller" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
