/* eslint-disable import/no-cycle */
/* eslint-disable indent */
import { URLS } from '../constants/urls';
import { getRequestApi, postRequestApi } from '../Helper/AxiosHelper';
import TaskModel from '../models/TaskModel';

// get task list api
const GetTaskList = async () => {
    try {

        const response = await getRequestApi(URLS.TASK_LIST);
        console.log(`GetTaskList response...${JSON.stringify(response)}`)

        new TaskModel({
            id: 'taskList',
            tasks: response,
        }).$save();

        return response;
    } catch (error) {
        return error;
    }
};

// add task api
const AddTask = async (data) => {
    try {

        const response = await postRequestApi(URLS.TASK_LIST, data);
        console.log(`AddTask response...${JSON.stringify(response)}`)
        const { tasks } = TaskModel.getInstance('taskList')?.props;

        new TaskModel({
            id: 'taskList',
            tasks: tasks ? [...tasks, ...response] : tasks || [],
        }).$save();
        
        return response;

    } catch (error) {
        return error;
    }
};

const updateTask = (data) => {
    const { tasks } = TaskModel.getInstance('taskList')?.props;
    let index = tasks.findIndex(obj => obj.id == data.id)
    try {
        let arr = tasks

        new TaskModel({
            id: 'taskList',
            tasks: [],
        }).$save();

        if (index != -1) {
            arr[index].completed = !data.completed

            new TaskModel({
                id: 'taskList',
                tasks: arr,
            }).$save();
        }

        return arr

    } catch (error) {
        return error;
    }


}
export default {
    GetTaskList,
    AddTask,
    updateTask
};
