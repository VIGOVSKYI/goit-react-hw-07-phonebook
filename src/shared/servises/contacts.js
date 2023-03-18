import axios from 'axios';

const contactsInstanse = axios.create({
  baseURL: 'https://640355ec302b5d671c4cac66.mockapi.io/api/contacts',
});

export const getСontacts = async () => {
  const { data } = await contactsInstanse.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstanse.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstanse.delete(`/${id}`);
  return data;
};
