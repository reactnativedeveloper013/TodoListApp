
import React, {useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import {  wp } from '../../Helper/responsiveScreen';
import TaskService from '../../services/TaskService';
import { colors } from '../../Utils/colors';
import Button from '../../Components/Common/Button';
import InputText from '../../Components/Common/InputText';
import { commonStyles } from '../../Utils/commonStyle';


const AddTaskScreen = ({ navigation, route }) => {

    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [dueString, setDueString] = useState('');
    const [priority, setPriority] = useState('');

    function BackClick() {
        navigation.goBack();
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'AddTask',
            headerLeft: () => {
                return (
                    <TouchableOpacity onPress={() => BackClick()}>
                        <Image source={require('../../Assets/Images/arrow.png')} style={{ height: wp(5), width: wp(5), marginHorizontal: wp(4) }}></Image>
                    </TouchableOpacity>
                )
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
            },
        });
    }, [navigation]);


    // add task and check empty validation
    const AddTaskData = async () => {

        if(content.length === 0)
        {
            alert('please enter content')
        }
        else if(dueString.length === 0)
        {
            alert('please enter valid due string(ex: next monday)')
        }
        else if(!priority.includes('1' || '2' || '3' || '4'))
        {
            alert('Please add priority between 1(normal) to 4(high)')
        }
        else
        {
            const obj = {
                "content": content,
                "description": description,
                "due_string": dueString,
                "due_lang": "en",
                "priority": priority
            }
    
            let res = await TaskService.AddTask(obj)
            if (!res?.error) {
                route.params && route.params.goBack();
                navigation.goBack();
            }
        }
       
    }

    return (
        <View style={styles.container}>
            <InputText
                placeholder={'Enter content...'}
                placeholderTextColor={colors.BLACK2}
                containerStyle={{ ...commonStyles.inputContainerStyle }}
                onChangeText={text => {
                    setContent(text)
                }}
                value={content}
                autoCorrect={false}
                returnKeyType={'next'}
            />

            <InputText
                placeholder={'Enter task description...'}
                placeholderTextColor={colors.BLACK2}
                containerStyle={{ ...commonStyles.inputContainerStyle }}
                onChangeText={text => {
                    setDescription(text)
                }}
                value={description}
                autoCorrect={false}
                returnKeyType={'next'}
            />

            <InputText
                placeholder={'Enter due string...'}
                placeholderTextColor={colors.BLACK2}
                containerStyle={{ ...commonStyles.inputContainerStyle }}
                onChangeText={text => {
                    setDueString(text)
                }}
                value={dueString}
                autoCorrect={false}
                returnKeyType={'next'}
            />

            <InputText
                placeholder={'Enter Priority...'}
                placeholderTextColor={colors.BLACK2}
                containerStyle={{ ...commonStyles.inputContainerStyle }}
                onChangeText={text => {
                    setPriority(text)
                }}
                keyboardType={'numeric'}
                value={priority}
                autoCorrect={false}
                returnKeyType={'next'}
            />


            <Button
                title={'Add'}
                customStyle={{ width: wp(90) }}
                customTextStyle={{ color: colors.WHITE }}
                onPress={() => AddTaskData()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
});

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(AddTaskScreen);

