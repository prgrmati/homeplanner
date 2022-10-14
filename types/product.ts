export type TProduct = {
    id: number;
    name: string;
    title: string;
    image: string;
    acf: {
        warehouse_product_package: string;
        warehouse_product_quantity: number;
    };
};
