import { Pressable, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          pressed && styles.pressed,
          mode === "flat" && styles.flat,
        ]}
      >
        <View
          style={[
            styles.button,
            mode === "flat" && styles.flat,
            // pressed && styles.pressed,
          ]}
        >
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>

        {children}
      </Pressable>
    </View>
  );
};
const styles = {
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
  flat: {
    backgroundColor: "transparent",
  },
};

export default Button;
