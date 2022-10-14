import React from 'react';
import { useState } from 'react';
import styles from './List.module.css';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Loading from '@/components/ui/Loading/Loading';
import Button from '@/components/ui/Button/Button';

type TList = {
    id: number;
    date: string;
    content: string;
};

type TSingleList = {
    list: TList;
    onUpdate: (newContent: string, id: number) => Promise<Response>;
    onDelete: (id: number) => Promise<Response>;
};

const List: React.FC<TSingleList> = ({ list, onUpdate, onDelete }): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false);
    const [remove, setRemove] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [content, setContent] = useState<string>(list?.content);

    const resetState = (): void => {
        setLoading(false);
        setEdit(false);
    };

    const handleUpdate = (): void => {
        setLoading(true);
        onUpdate(content, list.id).then((res: Response) => {
            resetState();
        });
    };

    const handleDelete = (): void => {
        setLoading(true);
        onDelete(list.id).then(() => {
            resetState();
        });
    };

    return (
        <div className={styles['single-list']}>
            <h4>🛒 🛍</h4>
            <div className={styles['list-content']}>
                {edit ? (
                    <>
                        <textarea
                            rows={10}
                            style={{ fontFamily: 'monospace ' }}
                            placeholder="Przygotowanie..."
                            defaultValue={list?.content}
                            onChange={(evt) => setContent(evt.target.value)}
                        ></textarea>
                        <Button onClick={() => handleUpdate()} type="success" text="Save" />
                    </>
                ) : (
                    <strong style={{ fontFamily: 'monospace', lineHeight: '1.8em' }}>
                        {list?.content}
                    </strong>
                )}
            </div>
            <div className={styles['delete-wrapper']}>
                {remove && (
                    <div className={styles['delete-confirm-buttons']}>
                        <button role="button" onClick={() => setRemove(false)}>
                            Cancel
                        </button>
                        <button onClick={() => handleDelete()}>Delete</button>
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

export default List;
