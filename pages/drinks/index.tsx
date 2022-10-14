import React from 'react';
import Icon from '@/components/ui/Icon/Icon';
import Layout from '@/shared/layout';
import styles from './Drinks.module.css';
import { useState, useEffect } from 'react';
import { apiWordpress } from 'config/api';
import { GetStaticProps } from 'next';
import Drink from './lib/Drink';

type TDrinks = {
    drinksList: any[];
};

const DrinksPage: React.FC<TDrinks> = ({ drinksList }): JSX.Element => {
    const [add, setAdd] = useState<boolean>(false);
    const [currentList, setCurrentList] = useState<any[]>([]);
    const [title, setTitle] = useState<string>('');
    const [ingredientsList, setIngredientsList] = useState<string>('');
    const [preparation, setPreparation] = useState<string>('');
    const [method, setMethod] = useState<string>('');

    useEffect(() => {
        setCurrentList([...drinksList]);
    }, [drinksList]);

    const clearAddForm = (): void => {
        setAdd(false);
        setIngredientsList('');
        setPreparation('');
        setMethod('');
    };

    const addDrink = (): void => {
        try {
            (async () => {
                const drink = {
                    title: title,
                    acf: {
                        drink_ingredients_list: ingredientsList,
                        drink_preparation: preparation,
                        drink_method: method
                    },
                    status: 'publish'
                };

                const rawResponse = await fetch(`${apiWordpress.v2}/drinks`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('jwt')}`
                    },
                    body: JSON.stringify(drink)
                });
                const content = await rawResponse.json();

                if (rawResponse.status === 201) {
                    clearAddForm();
                } else {
                    //todo
                    //setServerError(content?.message);
                }
            })();
        } catch (error) {
            //todo
            // setServerError(
            //     'Could not register new user. Please try again later or contact our support.'
            // );
        }
    };

    const renderLists = (): JSX.Element[] =>
        currentList.map((drink, index) => {
            return drink && <Drink drink={drink} onDelete={(id) => {}} key={index} />;
        });

    return (
        <Layout title={'TODO'}>
            <>
                <div className={styles['header']}>
                    <h1>Drinks</h1>
                    <div className={styles['header-image']}>
                        <Icon name="drink" size={50} />
                    </div>
                </div>
                <div>{renderLists()}</div>
            </>
        </Layout>
    );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${apiWordpress.dev}/drinks`);
    const drinksList = await res.json().then((data: any) => data);

    return { props: { drinksList } };
};

export default DrinksPage;
