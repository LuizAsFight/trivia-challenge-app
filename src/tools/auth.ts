export const TOKEN_KEY = 'TriviaChallenge/@token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setTokenLocalStorage = (value: string) =>
  localStorage.setItem(TOKEN_KEY, value);

export const removeTokenLocalStorage = () => {
  localStorage.removeItem(TOKEN_KEY);
};
