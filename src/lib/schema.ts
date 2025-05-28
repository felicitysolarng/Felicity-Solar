import { z } from "zod";

const AddProductSchema = z.object({
    name: z.string().min(1, 'Product name is required'),
    category: z.string().min(1, 'Category is required'),
    description: z.string().min(1, 'description is required'),
    price: z.string().min(1, 'Price is required'),
    discount: z.string().min(1, 'Discount is required'),
    thumbnail1: z.string().min(1, 'Thumbnail  is required'),
    thumbnail2: z.string().min(1, 'Thumbnail 2 is required'),
    thumbnail3: z.string().min(1, 'Thumbnail 3 is required'),
    thumbnail4: z.string().optional().nullable(),
    //thumbnail5: z.string().optional(),
    keyFeatures: z.string().optional(),
});


export { AddProductSchema }