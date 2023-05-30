
const name = 'dduy9sqh1'

const API_URL_CLOUDINARY = `https://api.cloudinary.com/v1_1/${name}/image/upload`

export async function postImage(file:File) {

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'xos6quzw');

  const response = await fetch(API_URL_CLOUDINARY, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to post");
  }
  const log = await response.json();

  return log.secure_url
}