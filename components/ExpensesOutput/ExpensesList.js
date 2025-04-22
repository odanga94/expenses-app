import { FlatList, Text, View } from "react-native";

import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  const { item } = itemData;
  return <ExpenseItem {...item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
