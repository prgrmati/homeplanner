import React, { useMemo } from 'react';
import Icon from '@/components/ui/Icon/Icon';
import Notification from '@/components/ui/Notification/Notification';
import Layout from '@/shared/layout';
import styles from './Shopping.module.css';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import { apiWordpress } from 'config/api';
import { GetStaticProps } from 'next';
import List from './lib/List';
import { httpDelete, httpUpdate } from '@/helpers/httpMethods';

type TShopping = {
    shoppingList: TList[];
};

type TList = {
    id: number;
    content: string;
    date: string;
};

const Shopping: React.FC<TShopping> = ({ shoppingList }): JSX.Element => {
    const [currentList, setCurrentList] = useState<TList[]>(shoppingList);
    const [add, setAdd] = useState<boolean>(false);
    const [newList, setNewList] = useState<string>('');

    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [notificationText, setNotificationText] = useState<string>('');
    const [notifcationType, setNotificationType] = useState<'success' | 'danger'>('success');

    const clearAddForm = (): void => {
        setAdd(false);
        setNewList('');
    };

    const notificationSetup = (show: boolean, text: string, type: 'success' | 'danger'): void => {
        setShowNotification(show);
        setNotificationText(text);
        setNotificationType(type);

        notificationSnooze();
    };

    const notificationSnooze = (): void => {
        setTimeout(() => {
            setShowNotification(false);
        }, 2500);
    };

    const addList = (): void => {
        try {
            (async () => {
                const rawResponse = await fetch(`${apiWordpress.v2}/shopping-list`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('jwt')}`
                    },
                    body: JSON.stringify({ content: newList, status: 'publish', title: 'List' })
                });
                const content = await rawResponse.json();

                if (rawResponse.status === 201) {
                    notificationSetup(true, 'New shopping list has been added', 'success');
                    clearAddForm();
                    setCurrentList([
                        ...currentList,
                        { content: newList, id: content.id, date: content.date }
                    ]);
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

    const handleUpdate = (content: string, id: number): Promise<Response> => {
        return httpUpdate(
            `${apiWordpress.v2}/shopping-list/${id}`,
            JSON.stringify({ content })
        ).then((res: Response) => {
            if (res.status === 200) {
                notificationSetup(true, 'Shopping list has been updated', 'success');
                setCurrentList([...currentList.filter((list) => list.id !== id)]);

                setCurrentList(
                    currentList.map((list) => (list.id === id ? { ...list, content } : list))
                );
            }

            return res;
        });
    };

    const handleDelete = (id: number): Promise<Response> => {
        return httpDelete(`${apiWordpress.v2}/shopping-list/${id}`).then((res: Response) => {
            notificationSetup(true, 'Shopping list has been deleted', 'danger');
            setCurrentList([...currentList.filter((list) => list.id !== id)]);

            return res.json();
        });
    };

    const renderProducts: JSX.Element[] = useMemo(
        () =>
            currentList
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((list, index) => {
                    return (
                        <List
                            list={list}
                            onUpdate={(newContent, id) => handleUpdate(newContent, id)}
                            onDelete={(id) => handleDelete(id)}
                            key={index}
                        />
                    );
                }),
        [currentList]
    );

    return (
        <Layout title={'TODO'}>
            <>
                <div className={styles['header']}>
                    <h1>Shopping list</h1>
                    {
                        <PlusCircleTwoTone
                            twoToneColor="#29d315"
                            style={{ fontSize: '30px', marginBottom: '15px' }}
                            onClick={() => setAdd(!add)}
                        />
                    }
                    {add && (
                        <div>
                            <div className={styles['list']}>
                                <textarea
                                    rows={10}
                                    placeholder="Shopping list... 🐪 🌳 🐪"
                                    onChange={(evt) => setNewList(evt.target.value)}
                                ></textarea>
                                <button
                                    type="button"
                                    className={styles['save-list']}
                                    onClick={() => addList()}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    )}
                    <div className={styles['header-image']}>
                        <Icon name="bill" size={50} />
                    </div>
                </div>
                <div>{renderProducts}</div>
                {showNotification && (
                    <Notification type={notifcationType} text={notificationText} />
                )}
            </>
        </Layout>
    );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${apiWordpress.dev}/shopping-list`);
    const shoppingList = await res.json().then((data: any) => data);

    return { props: { shoppingList } };
};

export default Shopping;
