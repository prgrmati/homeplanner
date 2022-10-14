import React from 'react';
import { useState } from 'react';
import styles from './Product.module.css';

import HomeButton from '@/components/ui/Button/Button';
import { EditOutlined } from '@ant-design/icons';

import { DeleteOutlined } from '@ant-design/icons';
import Loading from '@/components/ui/Loading/Loading';
import { TProduct } from 'types/product';

type TProductItem = {
    product: TProduct;
    onDelete: (id: number) => Promise<Response>;
    onUpdate: (updatedProduct: TProduct) => Promise<Response>;
};

const Product: React.FC<TProductItem> = ({ product, onDelete, onUpdate }): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false);
    const [remove, setRemove] = useState<boolean>(false);
    const [newPackage, setNewPackage] = useState<string>(product?.acf?.warehouse_product_package);
    const [newQuantity, setNewQuantity] = useState<number>(
        parseFloat(product?.acf?.warehouse_product_quantity.toString())
    );
    const [loading, setLoading] = useState<boolean>(false);

    const handleUpdate = (): void => {
        const updatedACF = {
            acf: {
                warehouse_product_quantity: newQuantity,
                warehouse_product_package: newPackage
            }
        };

        const updatedProduct = {
            ...product,
            acf: {
                ...updatedACF.acf
            }
        };

        onUpdate(updatedProduct);
    };

    const handleDelete = (): void => {
        setLoading(true);
        onDelete(product.id).then(() => {
            setLoading(false);
        });
    };

    return (
        <div className={styles['product-wrapper']}>
            <h4>{product?.name}</h4>
            <div className={styles['product-info']}>
                <img
                    src={product?.image || '/assets/products/placeholder.svg'}
                    width="75"
                    height="75"
                    alt=""
                />
                <ul>
                    <li>
                        <span>
                            Package:{' '}
                            {edit ? (
                                <input
                                    type="text"
                                    className="mm-input"
                                    style={{ marginBottom: '10px' }}
                                    defaultValue={product?.acf.warehouse_product_package}
                                    onChange={(evt) => setNewPackage(evt.target.value)}
                                />
                            ) : (
                                <strong>{newPackage}</strong>
                            )}
                        </span>
                    </li>
                    <li>
                        <span>
                            Available:{' '}
                            {edit ? (
                                <div className={styles['qty-wrapper']}>
                                    <div
                                        className={styles['qty-action']}
                                        role="button"
                                        onClick={() =>
                                            newQuantity <= 0 ? {} : setNewQuantity(newQuantity - 1)
                                        }
                                    >
                                        <span>-</span>
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            className={styles['qty-input']}
                                            min="0"
                                            value={newQuantity}
                                            onChange={(event) => {
                                                //@ts-ignore
                                                this?.inputChangedHandler(event);
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={styles['qty-action']}
                                        role="button"
                                        onClick={() => setNewQuantity(newQuantity + 1)}
                                    >
                                        <span>+</span>
                                    </div>
                                </div>
                            ) : (
                                <strong>{newQuantity}</strong>
                            )}
                        </span>
                    </li>
                    {edit && (
                        <li>
                            <button
                                type="button"
                                className="mm-btn-success"
                                style={{ marginTop: '15px', minWidth: '110px' }}
                                onClick={() => {
                                    handleUpdate();
                                    setEdit(false);
                                }}
                            >
                                Save
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles['delete-wrapper']}>
                {remove && (
                    <div className={styles['delete-confirm-buttons']}>
                        <button role="button" onClick={() => setRemove(false)}>
                            Cancel
                        </button>
                        <HomeButton
                            onClick={() => {
                                handleDelete();
                                setEdit(false);
                                setRemove(false);
                            }}
                            text="Delete"
                            type="delete"
                        />
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

export default Product;
