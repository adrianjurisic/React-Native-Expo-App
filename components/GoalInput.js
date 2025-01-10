import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.jpg')} style= {styles.image}/>
            <TextInput placeholder='Your course goal!' 
                       style= {styles.textInput} 
                       onChangeText={goalInputHandler}
                       value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.singleButton}>
                    <Button title='Add goal' onPress={addGoalHandler} color='#acedfe'/>
                </View>
                <View style={styles.singleButton}>
                    <Button title='Cancel' onPress={props.onCancel} color='#aced5e'/>
                </View>
            </View>
            
        </View>
      </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ec4726',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ffe40f',
    backgroundColor: '#ffe40f',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  singleButton: {
    width: '40%',
    marginHorizontal: 8,
  },
  image: {
    width: 300, 
    height: 300,
    margin: 20,
  },
});