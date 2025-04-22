import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext); // Assuming you have a context to fetch expenses

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
      /* headerRight: () => (
        <IconButton
          name="trash"
          size={24}
          color="white"
          onPress={() => {
            // Handle delete action
            console.log("Delete expense");
          }}
        />
      ),*/
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    // Handle delete action
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    // Handle confirm action
    if (isEditing) {
      // Update existing expense
      expensesCtx.updateExpense(editedExpenseId, {
        // Pass the updated expense data
        editedExpenseId,
        description: "Test!!!",
        amount: 29.99,
        // date: new Date("2025-04-15"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2025-04-15"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          <Text>Cancel</Text>
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          <Text>{isEditing ? "Update" : "Add"}</Text>
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpense;
