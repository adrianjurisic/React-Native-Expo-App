import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props){
    return(
      <View style={styles.goalItem}>
        <Pressable 
            android_ripple={{color: '#211a44'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style= {({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#ffe40f',
    color: 'black',
  },
  goalText: {
    padding: 8,
    color: 'black',
  },
  pressedItem: {
    opacity: 0.5,
  },
});