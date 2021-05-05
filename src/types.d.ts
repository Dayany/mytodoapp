  interface ITask{
    uuid: string,
    isDone: boolean,
    title: string,
    content: string,
    user: string,
    createdAt: string
    priority: IPriority
  }

  interface IPriority{
    level: number,
    special: boolean
  }