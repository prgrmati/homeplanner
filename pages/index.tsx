import Icon from '@/components/ui/Icon/Icon';
import Layout from '@/shared/layout';
import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';

const ISSERVER = typeof window === 'undefined';

const auth = () => {
    fetch('secret_auth_url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        },
        body: JSON.stringify({
            username: 'secret_username',
            password: 'secret_password'
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (user) {
            console.log(user.token);
            localStorage.setItem('jwt', user.token);
        });
};

if (!ISSERVER) {
    let lsAuth = localStorage.getItem('auth');

    if (lsAuth === 'secret_key') {
        auth();
    } else {
        let promptPass = prompt('Hey!', '');
        if (promptPass === 'secret_key') {
            localStorage.setItem('auth', promptPass);
            auth();
        } else {
            document.body.innerHTML = '<div></div>';
        }
    }
}

type THome = {};

const HomePage: React.FC<THome> = (): JSX.Element => {
    return (
        <Layout title={'TODO'}>
            <>
                <h1 className={styles['app-title']}>#homesweethome</h1>
                <div className={styles['home-cards']}>
                    <Link href="/warehouse">
                        <div className={styles['home-card']}>
                            <Icon name="warehouse" size={50} />
                            <h4>Food stock</h4>
                        </div>
                    </Link>
                    <Link href="/cleaning">
                        <div className={styles['home-card']}>
                            <Icon name="cleaning" size={50} />
                            <h4>Cleaning</h4>
                        </div>
                    </Link>
                    <Link href="/shopping">
                        <div className={styles['home-card']}>
                            <Icon name="bill" size={50} />
                            <h4>Shopping list</h4>
                        </div>
                    </Link>
                    <Link href="/drinks">
                        <div className={styles['home-card']}>
                            <Icon name="drink" size={50} />
                            <h4>Drinks</h4>
                        </div>
                    </Link>
                    <Link href="/movies">
                        <div className={styles['home-card']}>
                            <Icon name="movies" size={50} />
                            <h4>Movies & TV Shows</h4>
                        </div>
                    </Link>
                    <Link href="/savings">
                        <div className={styles['home-card']}>
                            <Icon name="piggybank" size={50} />
                            <h4>Savings</h4>
                        </div>
                    </Link>
                </div>
            </>
        </Layout>
    );
};

export default HomePage;
