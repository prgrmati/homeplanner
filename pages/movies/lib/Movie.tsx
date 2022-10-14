import React from 'react';
import { useState } from 'react';
import styles from './Movie.module.css';

type TMovie = {
    movie: {
        name: string;
        title: string;
        content: string;
        acf: {
            movie_category: string;
            movie_year?: number;
            movie_rating: number;
            movie_harddrive: number;
            tvshow_seasons?: number;
        };
        image: string;
    };
    isTvShow: boolean;
};

const Movie: React.FC<TMovie> = ({ movie, isTvShow }): JSX.Element => {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className={styles['movie-wrapper']} role="button" onClick={() => setToggle(!toggle)}>
            <span className={styles['movie-disk']}>{movie?.acf?.movie_harddrive}</span>
            <div className={styles['movie-poster-wrapper']}>
                <img src={movie?.image} className={styles['movie-poster']} loading="lazy" />
            </div>
            <div className={styles['movie-details']}>
                <h4>
                    {movie?.name} ({isTvShow ? movie?.acf?.tvshow_seasons : movie?.acf?.movie_year})
                </h4>
                <p>{movie?.acf?.movie_category}</p>
                <div className={styles['movie-rating']}>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>
                            {movie?.acf?.movie_rating || '-'}
                        </span>
                        <span>/</span>
                        <span>10</span>
                    </div>
                    <img src={`/assets/icons/star.png`} className={styles['movie-poster']} />
                </div>
                <p
                    className={[
                        styles['movie-description'],
                        styles[`${toggle ? 'movie-description--active' : ''}`]
                    ].join(' ')}
                >
                    {movie?.content}
                </p>
                {movie?.content.length > 90 && (
                    <>
                        <span
                            className={[
                                styles['movie-toggle-more'],
                                styles[`${toggle ? 'movie-toggle-more--active' : ''}`]
                            ].join(' ')}
                        >
                            &#8250;
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default Movie;
