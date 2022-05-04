import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image} from 'react-native';

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState([]);
    const createTask = (e) => {
        setTask(e.target.value);
    };
    const addTask = () => {
        setTasks([...tasks,{task:task}]);
        setShow(false);
        setTask('');
    };
    const removeTask = (task) => {
        var removedTasks = tasks.filter(item => item.task !== task);
        setTasks(removedTasks);
    };
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>YOUR TO DO LIST</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={() => setShow(true)}
            ><Text style={styles.buttonText}>Add A Task</Text></TouchableOpacity>
            { show ? 
            (
            <View style={styles.inputView}>    
            <TextInput
            placeholder='Add A Task'
            style={styles.inputStyle}
            onBlur={createTask} 
            />
            <TouchableOpacity style={styles.addButton} onPress={addTask}><Text style={styles.buttonText}>ADD</Text></TouchableOpacity>
            </View>
            ) : null
            }
            <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(key) => {return key.task}}
            data={tasks} 
            renderItem={(element) =>{return <Text style={styles.flatlistText}>{element.item.task} <TouchableOpacity style={styles.flatlistButton} onPress={() => removeTask(element.item.task)}><Image style={styles.imageStyle} source={require("../assets/delete.svg")}/></TouchableOpacity></Text> 
            }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        color:'red',
        fontWeight:700,
        fontSize: '2.5rem',
        marginBottom: '1.875rem',
        marginTop: '0.938rem'
    },
    viewStyle:{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    inputStyle:{
        display: 'inline',
        borderWidth: '0.063rem',
        borderRadius: '0.938rem',
        width: '60%',
        marginTop: '1.875rem',
        marginBottom: '1.25rem',
        textAlign: 'center' 
    },
    button:{
        backgroundColor:'#32cd32',
        height: '2.5rem',
        width: '7.5rem',
        paddingTop: '0.625rem',
        paddingBottom: '0.625rem',
        borderRadius: '0.938rem',
    },
    buttonText:{
        fontSize:'0.875rem',
        fontWeight:700,
        color: 'white'
    },
    inputView:{
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    addButton:{
        width: '3.75rem',
        display: 'inline',
        backgroundColor:'blue',
        borderRadius: '0.625rem',
    },
    flatlistText: {
        fontSize: '1.25rem',
        padding: '1.875rem',        
        backgroundColor: "#1e90ff",
        margin: '0.625rem',
        color: "white",
        width: '21.875rem',
        display: 'flex',
        justifyContent: 'space-between'
      },
    flatlistButton:{
        color: 'white'
    },  
    imageStyle:{
          height: '1.25rem',
          width:'0.938rem',
          marginLeft: '0.938rem'
      }
})
export default ToDoList;