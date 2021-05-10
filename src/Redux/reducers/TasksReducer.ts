import { AnyAction } from 'redux'

export interface TaskState {
  tasks: ITask[]
}

const initialState: TaskState = {
  tasks: [],
}

type ActionA = { type: "ADD_TASK", payload: ITask }

type ActionB = { type: "ADD_INITIAL_TASKS", payload: ITask[] }

type Action = ActionA | ActionB

export const tasksReducer = (state: TaskState = initialState, action: Action ) => {
  switch (action.type ){
    case "ADD_INITIAL_TASKS": {
      return {tasks: [ ...action.payload]}
    }
    case "ADD_TASK": {
      return {tasks: [...state.tasks, action.payload]}
    }
    default: {
      return state;
    }
  }
}


export default tasksReducer;