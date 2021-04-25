import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementValue = () => {
    this.setState({ count: this.state.count + 1 });
  };
  resetValue = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.author}>Developer: sardor</Text>
        <View style={styles.tasbeh}>
          <View style={styles.count}>
            <Text style={styles.countText}>{this.state.count}</Text>
          </View>
          <CountButton onPress={this.incrementValue} />
          <ResetButton onPress={this.resetValue} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000814",
    alignItems: "center",
    justifyContent: "center",
  },
  author: {
    fontSize: 10,
    marginBottom: 4,
    color: "#ccc",  
  },
  tasbeh: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: 90,
    height: 100,
    backgroundColor: "#ffd60a",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  count: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: 70,
    height: 15,
    marginBottom: 15,
    borderRadius: 2,
    backgroundColor: "#000",
  },
  countText: {
    color: "#fff",
    fontSize: 10,
    paddingRight: 4,
    paddingBottom: 1,
  },
  resetBtn: {
    padding: 4,
    marginTop: 5,
    backgroundColor: "#ced4da",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#001d3d",
    borderRadius: 2,
    marginTop: 8,
  },
});
