import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
