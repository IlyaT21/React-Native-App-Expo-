import { StyleSheet, Pressable } from "react-native";
import { Colors } from "../contstants/Colors";

const ThememButton = ({ style, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default ThememButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
  },

  pressed: {
    opacity: 0.5,
  },
});
