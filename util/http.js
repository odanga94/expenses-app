import axios from "axios";

const FIREBASE_DOMAIN =
  "https://expenses-app-e76fb-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(
    `${FIREBASE_DOMAIN}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${FIREBASE_DOMAIN}/expenses.json`);

  const expenses = [];

  // console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(`${FIREBASE_DOMAIN}/expenses/${id}.json`, expenseData);
};
export const deleteExpense = (id) => {
  return axios.delete(`${FIREBASE_DOMAIN}/expenses/${id}.json`);
};
