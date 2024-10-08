import colors from "@/app/config/colors";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";

import defaultStyles from "../app/config/styles";
import Icon from "./Icon";

interface CustomDropdownProps {
  items: { label: string; value: string }[]; // Array of objects directly defined in the prop
  onValueChange: (value: string) => void;
}

const CustomDropdown = ({ items, onValueChange }: CustomDropdownProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (item: { label: string; value: string }) => {
    setSelectedValue(item.label);
    onValueChange(item.value);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.pickerLabel}>
          <Icon
            name={"apps"}
            iconColor={colors.darkGrey}
            backgroundColor={colors.ligthGrey}
          />
          <Text style={defaultStyles.text}>
            {selectedValue || "Select an item"}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <Text style={[defaultStyles.text, styles.text]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  dropdownButton: {
    backgroundColor: colors.ligthGrey,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    paddingLeft: 4,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
  },
  itemText: {
    padding: 10,
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#A9A9A9", // Dark grey
    color: "white",
    borderRadius: 10,
  },
  text: {
    marginVertical: 10,
    color: "white",
  },
  pickerLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomDropdown;
