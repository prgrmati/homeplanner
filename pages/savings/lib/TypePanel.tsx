import React, { useEffect, useState } from 'react';
import styles from './TypePanel.module.css';
import Notification from '@/components/ui/Notification/Notification';

type TTypePanel = {
    savings: {
        amount: string;
        modified: string;
    };
};

const TypePanel: React.FC<TTypePanel> = ({ savings }): JSX.Element => {
    const [password, setPassword] = useState<string>('');
    const [correctPassword] = useState<string>('2528');
    const [showErrorNotification, setErrorShowNotification] = useState<boolean>(false);
    const [showSuccessNotification, setSuccessShowNotification] = useState<boolean>(false);
    const [showBank, setShowBank] = useState<boolean>(false);

    useEffect(() => {
        if (password.length === 4) {
            if (password === correctPassword) {
                setSuccessShowNotification(true);
                setShowBank(true);
                setTimeout(() => {
                    setSuccessShowNotification(false);
                }, 1000);
            } else {
                setErrorShowNotification(true);
                setTimeout(() => {
                    setErrorShowNotification(false);
                }, 1000);

                setPassword('');
            }
            setPassword('');
        } else if (password.length >= 4) {
            setPassword('');
        }
    }, [password]);

    const renderLists = (): JSX.Element[] => {
        const numbers: JSX.Element[] = [];
        for (let index = 1; index < 10; index++) {
            numbers.push(
                <div
                    role="button"
                    key={index}
                    onClick={() => {
                        setPassword(password + index);
                        setShowBank(false);
                    }}
                >
                    <span>{index}</span>
                </div>
            );
        }

        return numbers;
    };

    const renderBank = (): string => {
        const value = parseFloat(savings.amount).toLocaleString(undefined, {
            minimumFractionDigits: 2
        });

        return value;
    };

    return (
        <>
            <div className={styles['panel-wrapper']}>{renderLists()}</div>
            {showBank && (
                <div className={styles['bank-number-wrapper']}>
                    <span>{renderBank()} zł</span>
                    <span>Last updated: {savings.modified}</span>
                </div>
            )}
            {showErrorNotification && <Notification type="danger" text="Ups, try again!" />}
            {showSuccessNotification && <Notification type="success" text="Congrats!" />}
        </>
    );
};

export default TypePanel;
