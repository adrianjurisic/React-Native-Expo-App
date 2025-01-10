import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setGoals((currentGoals) => [
      ...goals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <>
    <StatusBar style='auto'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#ffe40f" onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} 
                 onAddGoal={addGoalHandler}
                 onCancel= {endAddGoalHandler}
                 />
      <View style={styles.goalsContainer}>
        <FlatList 
            data={goals} 
            renderItem={(itemData) => {
                return( <GoalItem text={itemData.item.text} 
                                  id= {itemData.item.id}
                                  onDeleteItem={deleteGoalHandler}
                                  /> )}} 
          keyExtractor={(item, index)=> {return item.id;}}
          alwaysBounceVertical={false}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#ec4726',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },

});
