import React from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "@/app/config/colors";

interface SwipeComponentProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  rightSwipeAction?: React.ReactNode;
  leftSwipeAction?: React.ReactNode;
}

const SwipeComponent = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  rightSwipeAction,
  leftSwipeAction,
}: SwipeComponentProps) => {
  const renderLeftActions = () => (
    <Pressable style={styles.leftAction} onPress={onSwipeLeft}>
      {leftSwipeAction ? (
        leftSwipeAction
      ) : (
        <Text style={styles.actionText}>Edit</Text>
      )}
    </Pressable>
  );

  const renderRightActions = () => (
    <Pressable style={styles.rightAction} onPress={onSwipeRight}>
      {rightSwipeAction ? (
        rightSwipeAction
      ) : (
        <Text style={styles.actionText}>
          <FontAwesome name="trash-o" size={24} color="black" />
        </Text>
      )}
    </Pressable>
  );

  return (
    <Swipeable
      // renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      leftThreshold={50}
      rightThreshold={50}
    >
      <View style={styles.container}>{children}</View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  leftAction: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  rightAction: {
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
  },
  actionText: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default SwipeComponent;
