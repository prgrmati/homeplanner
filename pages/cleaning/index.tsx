import Icon from '@/components/ui/Icon/Icon';
import Layout from '@/shared/layout';
import styles from './Cleaning.module.css';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import SingleCleaning from './lib/SingleCleaning';
import { apiWordpress } from 'config/api';
import Input from '@/components/ui/Input/Input';
import { GetStaticProps } from 'next';
import Notification from '@/components/ui/Notification/Notification';
import { httpDelete } from '@/helpers/httpMethods';

type TCleaningPage = {
    cleanings: TCleaning[];
};

type TCleaning = {
    id: number;
    title: string;
    acf: {
        last: string;
        cycle: string;
    };
};

const CleaningPage: React.FC<TCleaningPage> = ({ cleanings }): JSX.Element => {
    const [currentCleanings, setCurrentCleanings] = useState<TCleaning[]>(cleanings);
    const [add, setAdd] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [cycle, setCycle] = useState<string>('');
    const [last, setLast] = useState<string>('');

    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [notificationText, setNotificationText] = useState<string>('');
    const [notifcationType, setNotificationType] = useState<'success' | 'danger'>('success');

    const clearAddForm = (): void => {
        setAdd(false);
        setTitle('');
        setCycle('');
        setLast('');
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

    const updateCleaning = (updatedCleaning?: TCleaning): void => {
        try {
            (async () => {
                const cleaning = {
                    title: title,
                    acf: {
                        cleaning_cycle: cycle,
                        cleaning_last: last
                    },
                    status: 'publish'
                };

                if (updatedCleaning) {
                    cleaning['id'] = updatedCleaning.id;
                    cleaning['title'] = updatedCleaning.title;
                    cleaning['acf'] = {
                        cleaning_cycle: updatedCleaning.acf.cycle,
                        cleaning_last: updatedCleaning.acf.last
                    };
                }

                const rawResponse = await fetch(
                    `${apiWordpress.v2}/cleanings/${updatedCleaning ? updatedCleaning.id : ''}`,
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('jwt')}`
                        },
                        body: JSON.stringify(cleaning)
                    }
                );
                const content = await rawResponse.json();

                if (rawResponse.status === 201) {
                    notificationSetup(true, 'New room has been added', 'success');
                    setCurrentCleanings([
                        ...currentCleanings,
                        { ...cleaning, id: content.id, acf: { cycle, last } }
                    ]);
                    clearAddForm();
                } else if (rawResponse.status === 200) {
                    notificationSetup(true, 'Room has been updated', 'success');
                    setCurrentCleanings(
                        currentCleanings.map((cleaning) =>
                            cleaning.id == content.id ? updatedCleaning : cleaning
                        )
                    );
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

    const handleDelete = (id: number): Promise<Response> => {
        return httpDelete(`${apiWordpress.v2}/cleanings/${id}`).then((res: Response) => {
            notificationSetup(true, 'Room has been deleted', 'danger');
            setCurrentCleanings([...currentCleanings.filter((cleaning) => cleaning.id !== id)]);

            return res.json();
        });
    };

    const renderCleanings = (): JSX.Element[] =>
        currentCleanings.map((cleaning, index) => {
            return (
                <SingleCleaning
                    key={cleaning.id}
                    cleaning={cleaning}
                    onUpdate={(updatedCleaning) => updateCleaning(updatedCleaning)}
                    onDelete={(id) => handleDelete(id)}
                />
            );
        });

    return (
        <Layout title={'TODO'}>
            <>
                <div className={styles['header']}>
                    <h1>Cleaning</h1>
                    {
                        <PlusCircleTwoTone
                            twoToneColor="#29d315"
                            style={{ fontSize: '30px', marginBottom: '15px' }}
                            onClick={() => setAdd(!add)}
                        />
                    }
                    {add && (
                        <div>
                            <div className={styles['cleaning-add-wrapper']}>
                                <Input
                                    placeholder="Room name (e.g. Bathroom)"
                                    type="text"
                                    onChange={(value) => setTitle(value)}
                                />
                                <Input
                                    placeholder="Cleaning cycle (e.g. 1 week)"
                                    type="text"
                                    onChange={(value) => setCycle(value)}
                                />
                                <div>
                                    <Input type="date" onChange={(value) => setLast(value)} />
                                </div>
                                <button
                                    type="button"
                                    className={styles['save-list']}
                                    onClick={() => updateCleaning()}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    )}
                    <div className={styles['header-image']}>
                        <Icon name="cleaning" size={50} />
                    </div>
                </div>
                <div>{renderCleanings()}</div>
                {showNotification && (
                    <Notification type={notifcationType} text={notificationText} />
                )}
            </>
        </Layout>
    );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${apiWordpress.dev}/cleanings`);
    const cleanings = await res.json().then((data: any) => data);

    return { props: { cleanings } };
};

export default CleaningPage;
