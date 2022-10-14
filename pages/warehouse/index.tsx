import Icon from '@/components/ui/Icon/Icon';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import Notification from '@/components/ui/Notification/Notification';
import Layout from '@/shared/layout';
import Product from './lib/Product';
import styles from './Warehouse.module.css';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { useEffect, useMemo, useState } from 'react';
import { apiWordpress } from 'config/api';
import { GetStaticProps } from 'next';
import { TProduct } from 'types/product';
import { httpDelete, httpUpdate } from '@/helpers/httpMethods';

type TWarehouse = {
    products: TProduct[];
};

const WarehousePage: React.FC<TWarehouse> = ({ products }): JSX.Element => {
    const [currentProducts, setCurrentProducts] = useState<TProduct[]>([]);
    const [add, setAdd] = useState<boolean>(false);
    const [productName, setProductName] = useState<string>('');
    const [productPackage, setProductPackage] = useState<string>('');
    const [productQuantity, setProductQuantity] = useState<number>(0);
    const [serverError, setServerError] = useState<string>('');

    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [notificationText, setNotificationText] = useState<string>('');
    const [notifcationType, setNotificationType] = useState<'success' | 'danger'>('success');

    useEffect(() => {
        setCurrentProducts([...products]);
    }, [products]);

    const clearAddProductForm = (): void => {
        setAdd(false);
        setProductName('');
        setProductPackage('');
        setProductQuantity(null);
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

    const addProduct = (): Promise<void> => {
        const product = {
            title: productName,
            acf: {
                warehouse_product_quantity: productQuantity,
                warehouse_product_package: productPackage
            },
            status: 'publish'
        };

        return httpUpdate(`${apiWordpress.v2}/warehouse-products`, JSON.stringify(product)).then(
            (res: Response) => {
                notificationSetup(true, 'Product has been updated', 'success');
                if (res.status === 201) {
                    return res.json().then((data) => {
                        notificationSetup(true, 'New product has been added', 'success');
                        setCurrentProducts([
                            ...currentProducts,
                            { ...product, name: productName, id: data.id, image: '' }
                        ]);
                        clearAddProductForm();
                    });
                } else {
                    setServerError('An error occured while adding new product.');
                }
            }
        );
    };

    const handleUpdate = (updatedProduct: TProduct): Promise<Response> => {
        return httpUpdate(
            `${apiWordpress.v2}/warehouse-products/${updatedProduct.id}`,
            JSON.stringify({ acf: updatedProduct.acf })
        ).then((res: Response) => {
            notificationSetup(true, 'Product has been updated', 'success');
            setCurrentProducts(
                currentProducts.map((product) =>
                    product.id == updatedProduct.id ? updatedProduct : product
                )
            );
            return res.json();
        });
    };

    const handleDelete = (id: number): Promise<Response> => {
        return httpDelete(`${apiWordpress.v2}/warehouse-products/${id}`).then((res: Response) => {
            setCurrentProducts([...currentProducts.filter((product) => product.id !== id)]);

            return res.json();
        });
    };

    const renderProducts: JSX.Element[] = useMemo(
        () =>
            currentProducts
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((product, index) => {
                    console.log(product);
                    return (
                        <Product
                            key={product.id}
                            product={product}
                            onUpdate={(updatedProduct) => handleUpdate(updatedProduct)}
                            onDelete={(id) => handleDelete(product.id)}
                        />
                    );
                }),
        [currentProducts]
    );

    return (
        <Layout title={'TODO'}>
            <>
                <div className={styles['header']}>
                    <h1>Food stock</h1>
                    <PlusCircleTwoTone
                        twoToneColor="#29d315"
                        style={{ fontSize: '30px', marginBottom: '15px' }}
                        onClick={() => setAdd(!add)}
                    />
                    {add && (
                        <div>
                            <div className={styles['add-product-form']}>
                                <Input
                                    placeholder="Product name (e.g. Rice)"
                                    type="text"
                                    onChange={(value) => setProductName(value)}
                                />
                                <Input
                                    placeholder="Package (e.g. 10kg)"
                                    type="text"
                                    onChange={(value) => setProductPackage(value)}
                                />
                                <Input
                                    placeholder="Available (e.g. 25)"
                                    type="number"
                                    onChange={(value) => setProductQuantity(parseInt(value))}
                                />
                                <Button onClick={() => addProduct()} type="success" text="Add" />
                            </div>
                        </div>
                    )}
                    <div className={styles['header-image']}>
                        <Icon name="warehouse" size={50} />
                    </div>
                </div>
                <div className={styles['products']}>{renderProducts}</div>
                {showNotification && (
                    <Notification type={notifcationType} text={notificationText} />
                )}
            </>
        </Layout>
    );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${apiWordpress.dev}/warehouse-products`);
    const products = await res.json().then((data: any) => data);

    return { props: { products } };
};

export default WarehousePage;
