  interface ITask{
    id: string,
    isDone: boolean,
    title: string,
    content: string,
    user: string,
    createdAt: Date
    priority: IPriority
  }

  interface IPriority{
    level: number,
    special: boolean
  }