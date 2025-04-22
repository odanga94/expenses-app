import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext); // Assuming you have a context to fetch expenses

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    // console.log(expense.date)
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });

  // console.log(recentExpenses);

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"} fallbackText="No expenses registered for the last 7 days." />;
};

export default RecentExpenses;
