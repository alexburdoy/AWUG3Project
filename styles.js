import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  person: {
    padding: 10,
    backgroundColor: "#ccf",
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  planet: {
    padding: 10,
    backgroundColor: "#fcc",
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    color: "#666",
  },
});
