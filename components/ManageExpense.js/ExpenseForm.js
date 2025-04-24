import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import Input from "./Input";

const ExpenseForm = ({ onSubmit, onCancel, defaultValues }) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount : "",
    date: defaultValues ? defaultValues.date : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prevInputValues) => {
      return { ...prevInputValues, [inputIdentifier]: enteredValue };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +enteredAmount,
      date: new Date(enteredDate),
      description: enteredDescription,
    };
    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          placeholder="0.00"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (enteredAmount) => {
              inputChangedHandler("amount", enteredAmount);
            },
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredDate) => {
              inputChangedHandler("date", enteredDate);
              
            },
            value: inputValues.date,
            
          }}
        />
      </View>

      <Input
        label="Description"
        placeholder="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false, default is true
          // autoCapitalize: "sentences",
          onChangeText: (enteredDescription) => {
            inputChangedHandler("description", enteredDescription);
          },
          value: inputValues.description,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ExpenseForm;
