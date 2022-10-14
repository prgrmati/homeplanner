import React, { useEffect } from 'react';
import Icon from '@/components/ui/Icon/Icon';
import Layout from '@/shared/layout';
import styles from './Movies.module.css';
import { useState } from 'react';
import { apiWordpress } from 'config/api';
import { GetStaticProps } from 'next';
import Movie from './lib/Movie';
import Search from './lib/Search/Search';
import { httpGet } from '@/helpers/httpMethods';
import Button from '@/components/ui/Button/Button';

type TMovies = {
    movies: any[];
    pageSize: number;
    tvshows: any[];
    total: number;
    count: number;
};

const MoviesPage: React.FC<TMovies> = ({
    movies,
    total,
    tvshows,
    pageSize,
    count
}): JSX.Element => {
    const [currentList, setCurrentList] = useState<any[]>(movies);
    const [tvShowsList, setTvShowsList] = useState<any[]>(tvshows);
    const [showTvShowsLibrary, setShowTvShowsLibrary] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const [totalToFetch, setTotalToFetch] = useState<number>(pageSize);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isFetching, setIsFetching] = useState(false);

    const handleSearch = (query: string) => {
        setCurrentPage(1);
        setTotalToFetch(pageSize);

        return httpGet(`${apiWordpress.dev}/movies/search`, { query })
            .then((res: Response) => {
                return res.json();
            })
            .then((data) => {
                showTvShowsLibrary ? setTvShowsList([...data]) : setCurrentList([...data]);
            });
    };

    const renderLists = (): JSX.Element[] =>
        currentList
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((movie, index) => {
                return <Movie isTvShow={false} movie={movie} key={index} />;
            });

    const renderTvShowsList = (): JSX.Element[] =>
        tvShowsList
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((movie, index) => {
                return <Movie isTvShow={true} movie={movie} key={index} />;
            });

    const triggerLibraryChange = (): void => {
        setLoading(true);

        setShowTvShowsLibrary(!showTvShowsLibrary);
    };

    const handleScroll = (): void => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 &&
            !showTvShowsLibrary
        ) {
            setIsFetching(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', debounce(handleScroll, 250));
        return () => window.removeEventListener('scroll', debounce(handleScroll, 250));
    }, []);

    const debounce = (func, delay) => {
        let inDebounce;
        return function () {
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => {
                func.apply(this, {});
            }, delay);
        };
    };

    useEffect(() => {
        if (!isFetching) return;
        if (showTvShowsLibrary) {
            return;
        } else {
            if (totalToFetch < count) {
                fetchMoreMoviesListItems();
            }
        }
    }, [isFetching]);

    const fetchMoreMoviesListItems = (query?: string): void => {
        if (totalToFetch < count) {
            httpGet(`${apiWordpress.dev}/movies`, { page: currentPage + 1, query })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then((data) => {
                    setCurrentList((prevState) => [...prevState, ...data.movies]);
                    setIsFetching(false);
                    setTotalToFetch(pageSize * (currentPage + 1));
                    setCurrentPage(currentPage + 1);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setIsFetching(false);
                });
        }
    };

    return (
        <Layout title={'TODO'}>
            <>
                <div className={styles['header']}>
                    <h1>Movies & TV Shows</h1>
                    <div>
                        <Button
                            type=""
                            text={showTvShowsLibrary ? 'Movies Library' : 'TV Shows Library'}
                            onClick={() => triggerLibraryChange()}
                        />
                    </div>
                    <div className={styles['header-image']}>
                        <Icon name="movies" size={50} />
                    </div>
                </div>

                {!showTvShowsLibrary && <Search onSearch={(query) => handleSearch(query)} />}

                {/* <Filter /> */}

                <div className={styles['movies-list']}>
                    {showTvShowsLibrary ? renderTvShowsList() : renderLists()}
                </div>
            </>
        </Layout>
    );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${apiWordpress.dev}/movies`);
    const data = await res.json().then((data: any) => data);

    const { movies, total, pageSize } = data;

    const count = total;

    const resTvShows = await fetch(`${apiWordpress.dev}/tvshows`);
    const tvshows = await resTvShows.json().then((data: any) => data);

    return { props: { movies, total, pageSize, tvshows, count } };
};

export default MoviesPage;
