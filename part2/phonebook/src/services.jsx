import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getPhonebookList = () => {
	return axios.get(baseUrl);
};

const addNewPerson = (newPerson) => {
	return axios.post(baseUrl, newPerson);
};

const updatePhonebookList = (id, newObject) => {
	return axios.put(`${baseUrl}/${id}`, newObject);
};

const deletePerson = (id) => {
	return axios.delete(`${baseUrl}/${id}`);
};

export { getPhonebookList, addNewPerson, updatePhonebookList, deletePerson };
