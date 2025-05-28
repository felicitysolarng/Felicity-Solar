import { z } from "zod";

const AddProductSchema = z.object({
    name: z.string().min(1, 'Product name is required'),
    category: z.string().min(1, 'Category is required'),
    description: z.string().min(1, 'description is required'),
    price: z.string().min(1, 'Price is required'),
    discount: z.string().min(1, 'Discount is required'),
    thumbnail1: z.string().min(1, ' required'),
    thumbnail2: z.string().min(1, ' required'),
    thumbnail3: z.string().min(1, 'required'),
    thumbnail4: z.string().optional().nullable(),
    //thumbnail5: z.string().optional(),
    keyFeatures: z.string().optional(),
});
const OrderProductSchema = z.object({
    fullnames: z.string().min(1, 'Fullnames is required'),
    productName: z.string().min(1, 'Product name is required'),
    email: z.string().min(1, 'Email is required'),
    phone: z.string().min(5, 'Phone number is required'),
    qty: z.string().optional(),
    notes: z.string().optional()
});


export { AddProductSchema, OrderProductSchema }