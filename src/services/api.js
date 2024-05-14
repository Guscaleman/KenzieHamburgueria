import axios from "axios";

export const burgerAPI = axios.create({
	baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
	timeout: 5000,
});
