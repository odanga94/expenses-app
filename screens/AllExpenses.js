import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext); // Assuming you have a context to fetch expenses
  return (
    <ExpensesOutput
      expensesPeriod={"Total"}
      expenses={expensesCtx.expenses} // Use the context to get expenses
      fallbackText="No registered expenses found!"
    /> // Pass an empty array for expenses
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default AllExpenses;
