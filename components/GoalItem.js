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
    backgroundColor: '#191d8c',
    color: 'white',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});