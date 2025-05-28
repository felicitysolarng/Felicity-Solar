import { FieldError, UseFormRegister } from "react-hook-form";

export type AddProductFormData = {
    name: string;
    category: string;
    description: number;
    price: string;
    keyFeatures?: string;
    discount: string;
};

export type ISubmitOrder = {
    fullnames: string;
    productName: string;
    email: string;
    phone: string;
    qty?: string;
    notes?: string;
}

export type ICreateProduct = {
    product_name: string;
    category_id: string;
    description: string;
    price: string;
    total_stock: string,
    key_features?: string;
    discount_rate: string;
    image_1: string;
    image_2: string;
    image_3: string;
    image_4?: string | null;
}

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<AddProductFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};


export type ValidFieldNames =
    | "name"
    | "category"
    | "description"
    | "price"
    | "keyFeatures"
    | "discount";