export interface TaskState {
  tasks: ITask[];
  displayDoneTasks: boolean;
}

const initialState: TaskState = {
  tasks: [],
  displayDoneTasks: false,
};

type ActionA = { type: "ADD_TASK"; payload: ITask };

type ActionB = { type: "ADD_INITIAL_TASKS"; payload: ITask[] };

type ActionC = { type: "REMOVE_TASK"; payload: string };

type ActionD = { type: "CHANGE_CATEGORY"; payload: boolean };

type ActionE = { type: "MODIFY_TASK"; payload: ITask };

type Action = ActionA | ActionB | ActionC | ActionD | ActionE;

export const tasksReducer = (
  state: TaskState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_INITIAL_TASKS": {
      return {
        tasks: [...action.payload],
        displayDoneTasks: state.displayDoneTasks,
      };
    }
    case "ADD_TASK": {
      return {
        tasks: [...state.tasks, action.payload],
        displayDoneTasks: state.displayDoneTasks,
      };
    }
    case "REMOVE_TASK": {
      return {
        tasks: state.tasks.filter((curr) => {
          return curr.uuid !== action.payload;
        }),
        displayDoneTasks: state.displayDoneTasks,
      };
    }
    case "MODIFY_TASK": {
      return {
        tasks: state.tasks.map((curr) =>
          curr.uuid === action.payload.uuid ? { ...action.payload } : curr
        ),
        displayDoneTasks: state.displayDoneTasks,
      };
    }
    case "CHANGE_CATEGORY": {
      return { tasks: [...state.tasks], displayDoneTasks: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default tasksReducer;
