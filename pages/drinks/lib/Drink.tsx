import React from 'react';

import styles from './Drink.module.css';

type TDrinkO = {
    id: number;
    title: string;
    image: string;
    acf: {
        ingredients: string;
        preparation: string;
        method: string;
        taste: string;
    };
};

type TDrink = {
    drink: TDrinkO;
    onDelete: (id: number) => void;
};

const Drink: React.FC<TDrink> = ({ drink }): JSX.Element => {
    return (
        <div className={styles['drink-card']}>
            <div>
                <div>
                    <img src={drink?.image || ''} alt="" />
                </div>
                <div>
                    <h4>{drink?.title}</h4>
                </div>
                <div className={styles['drink-info']}>
                    <div>
                        <strong>Ingredients:</strong>
                        <span>{drink?.acf.ingredients}</span>
                    </div>
                    <div>
                        <strong>Preparation:</strong>
                        <span>{drink?.acf.preparation}</span>
                    </div>
                    <div>
                        <strong>Flavor:</strong>
                        <span>{drink?.acf.taste}</span>
                    </div>
                    <div>
                        <strong>Method:</strong>
                        <span>{drink?.acf.method}</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Drink;
