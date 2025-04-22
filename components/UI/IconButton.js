import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      {/* <View style={styles.buttonContainer}> */}
      <View style={styles.buttonContainer}>
        <Ionicons name={name} size={size} color={color} onPress={onPress} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    //backgroundColor: "#5e0acc",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
