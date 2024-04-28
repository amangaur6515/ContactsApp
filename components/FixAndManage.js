import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const FixAndManage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <MaterialIcons name="account-circle" size={50} color="blue" />
      </View>
      <Text
        style={{
          justifyContent: "flex-start",
          marginLeft: 25,
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Fix & Manage
      </Text>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <AntDesign name="cloudupload" size={30} color="blue" />
          <Text style={styles.listItemText}>Sync to cloud</Text>
        </View>
        <View style={styles.listItem}>
          <Entypo name="trash" size={30} color="blue" />
          <Text style={styles.listItemText}>Clear data</Text>
        </View>
        <View style={styles.listItem}>
          <FontAwesome5 name="file-export" size={30} color="blue" />
          <Text style={styles.listItemText}>Export</Text>
        </View>
        <View style={styles.listItem}>
          <Octicons name="blocked" size={30} color="blue" />
          <Text style={styles.listItemText}>Blocked numbers</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerText}>Made with ❤️ by Aman Gaur</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileContainer: {
    backgroundColor: "white",
    alignItems: "flex-end",
    margin: 20,
  },
  footer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 30,
  },
  footerText: {
    fontSize: 18,
    color: "black",
    elevation: 10,
  },
  list: {
    padding: 20,
    margin: 20,
    justifyContent: "center",
  },
  listItem: {
    padding: 10,
    margin: 20,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#ccd9ff",
    elevation: 9,
  },
  listItemText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default FixAndManage;
