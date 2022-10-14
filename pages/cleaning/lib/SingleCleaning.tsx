import { useState } from 'react';
import styles from './SingleCleaning.module.css';

import { DeleteOutlined, ExclamationCircleOutlined, EditOutlined } from '@ant-design/icons';
import Loading from '@/components/ui/Loading/Loading';

type TCleaning = {
    id: number;
    title: string;
    acf: {
        last: string;
        cycle: string;
    };
};

type TSingleCleaning = {
    cleaning: TCleaning;
    onDelete: (id: number) => Promise<Response>;
    onUpdate: (cleaning: TCleaning) => void;
};

const SingleCleaning: React.FC<TSingleCleaning> = ({
    cleaning,
    onDelete,
    onUpdate
}): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false);
    const [remove, setRemove] = useState<boolean>(false);
    const [updatedCycle, setUpdatedCycle] = useState<string>(cleaning?.acf.cycle);
    const [updatedLast, setUpdatedLast] = useState<string>(cleaning?.acf.last);
    const [loading, setLoading] = useState<boolean>(false);

    const isDelayed = (): boolean => {
        const lastDate = new Date(cleaning?.acf.last);

        lastDate.setDate(lastDate.getDate() + 1);

        return lastDate < new Date();
    };

    const calculateDelayInDays = (): JSX.Element => {
        const result = new Date().getDate() - new Date(cleaning?.acf.last).getDate();
        const dayText = result === 1 ? 'day' : 'days';

        return result >= 1 ? (
            <strong style={{ color: 'red' }}>
                {result} {dayText} delay
            </strong>
        ) : null;
    };

    const handleDelete = (): void => {
        setLoading(true);
        onDelete(cleaning.id).then(() => {
            setLoading(false);
        });
    };

    return (
        <div className={styles['single-clean']}>
            <h4>
                {isDelayed() && (
                    <ExclamationCircleOutlined style={{ fontSize: '20px', marginRight: '5px' }} />
                )}
                {cleaning?.title}
            </h4>
            <ul>
                <li>
                    <span>
                        Cleaning cycle:{' '}
                        {edit ? (
                            <input
                                type="text"
                                className="mm-input"
                                style={{ marginBottom: '10px' }}
                                defaultValue={cleaning?.acf.cycle}
                                onChange={(evt) => setUpdatedCycle(evt.target.value)}
                            />
                        ) : (
                            <strong>every {cleaning?.acf.cycle}</strong>
                        )}
                    </span>
                </li>
                <li>
                    <span>
                        Last cleaning:{' '}
                        {edit ? (
                            <input
                                type="date"
                                className="mm-input"
                                defaultValue={cleaning?.acf.last}
                                onChange={(evt) => setUpdatedLast(evt.target.value)}
                            />
                        ) : (
                            <strong>{cleaning?.acf.last}</strong>
                        )}
                    </span>
                </li>
                {!edit && <li>{calculateDelayInDays()}</li>}
                {edit && (
                    <li>
                        <button
                            type="button"
                            className="mm-btn-success"
                            style={{ marginTop: '15px', minWidth: '110px' }}
                            onClick={() => {
                                onUpdate({
                                    id: cleaning?.id,
                                    title: cleaning?.title,
                                    acf: { cycle: updatedCycle, last: updatedLast }
                                });
                                setEdit(false);
                            }}
                        >
                            Save
                        </button>
                    </li>
                )}
            </ul>
            <div className={styles['delete-wrapper']}>
                {remove && (
                    <div className={styles['delete-confirm-buttons']}>
                        <button role="button" onClick={() => setRemove(false)}>
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                handleDelete();
                                setRemove(false);
                                setEdit(false);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                )}
                {edit && !remove && (
                    <DeleteOutlined
                        style={{ fontSize: '25px', marginRight: '10px' }}
                        onClick={() => setRemove(true)}
                    />
                )}
                {!remove && (
                    <EditOutlined style={{ fontSize: '25px' }} onClick={() => setEdit(!edit)} />
                )}
            </div>
            {loading && <Loading />}
        </div>
    );
};

export default SingleCleaning;
