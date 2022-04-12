
import React, {useEffect, useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import TaskRenderItem from '../../Components/TaskItem/TaskrenderItem';
import { wp } from '../../Helper/responsiveScreen';
import Utils from '../../Helper/Utils';
import TaskModel from '../../models/TaskModel';
import TaskService from '../../services/TaskService';
import { colors } from '../../Utils/colors';


const HomeScreen = (props) => {

const { navigation, route,tasks } = props;

    React.useEffect(() => {
        GetTaskData();
    }, [navigation]);

  
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Home',
            headerRight: () => {
                return(
                    <TouchableOpacity onPress={() => AddTaskClick()}>
                    <Image source={require('../../Assets/Images/add.png')} style={{height: wp(5), width:wp(5),marginHorizontal: wp(4)}}></Image>
                    </TouchableOpacity>
                )
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
        });
      }, [navigation]);

    //   get all task using api
    const GetTaskData = async() => {
        Utils.startLoader();
        await TaskService.GetTaskList();
        Utils.stopLoader();
    }

    // navigate to add task 
    const AddTaskClick = () => {
        navigation.navigate('AddTask',{goBack: () => GetTaskData()})
    }

    //tap on task to open detail from right side
    const OpenDetail = (item) => {
        navigation.navigate('TaskDetail',{item})
    }

    // update status of task locally 
    const updateStatus = async (item) => {
     await TaskService.updateTask(item);

    }

    return (
        <View style={styles.container}>
          {
              tasks.length == 0 ? 
              <Text style={{alignSelf:'center'}}>No data found.</Text>
              :
            //   list of active task
              <FlatList
              extraData={props?.tasks}
              showsVerticalScrollIndicator={false}
              data={tasks}
              keyExtractor={(_item, index) => `${index}`}
              renderItem={({ item, index }) => {
              return(
              <TaskRenderItem item={item} onPress={() => OpenDetail(item)} changeStatus={() => updateStatus(item)} />)}
            }
              />
          }
      
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        justifyContent:'center',
    },
});

const mapStateToProps = (state) => {
    return {
        tasks : TaskModel.getInstance('taskList', state).props.tasks,
    };
};

export default connect(mapStateToProps)(HomeScreen);

