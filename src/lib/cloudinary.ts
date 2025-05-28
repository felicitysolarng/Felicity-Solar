import axios from 'axios';

export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('felicity-solar', 'your_unsigned_preset'); // replace with your preset
  //formData.append('upload_preset', 'your_unsigned_preset'); // replace with your preset

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
    formData
  );

  return res.data.secure_url; // URL to store in DB
};
export const deleteFromCloudinary = async (publicId: string) => {
  const res = await axios.delete(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/destroy`,
    {
      data: {
        public_id: publicId,
        invalidate: true,
      },
    }
  );

  return res.data; // response from Cloudinary
};
export const getCloudinaryImageUrl = (publicId: string, options: Record<string, any> = {}) => {
  const baseUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`;
  const queryParams = new URLSearchParams(options).toString();
  return `${baseUrl}/${publicId}${queryParams ? `?${queryParams}` : ''}`;
};
