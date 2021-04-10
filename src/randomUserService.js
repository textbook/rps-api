import { fetchJson } from "./api";

export const getRandomUser = () => fetchJson("https://api.randomuser.me").then(({ results: [user] }) => user);
