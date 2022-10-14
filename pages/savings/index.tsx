import React from 'react';
import Icon from '@/components/ui/Icon/Icon';
import Layout from '@/shared/layout';
import styles from './Savings.module.css';
import { GetStaticProps } from 'next';
import TypePanel from './lib/TypePanel';
import { apiWordpress } from 'config/api';

type TSavings = {
    amount: string;
    modified: string;
};

const SavingsPage: React.FC<TSavings> = ({ amount, modified }): JSX.Element => {
    return (
        <Layout title={'TODO'}>
            <>
                <div className={styles['header']}>
                    <h1>Savings</h1>
                    <div className={styles['header-image']}>
                        <Icon name="piggybank" size={50} />
                    </div>
                </div>
                <div>
                    <TypePanel savings={{ amount, modified }} />
                </div>
            </>
        </Layout>
    );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${apiWordpress.dev}/savings`);
    const savingsData = await res.json().then((data: any) => data);

    const { amount, modified } = savingsData;

    return { props: { amount, modified } };
};

export default SavingsPage;
