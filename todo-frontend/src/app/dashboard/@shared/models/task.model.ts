const TASK_STATUS = ['backlog', 'doing', 'closed'] as const;
export type TaskStatus = typeof TASK_STATUS[number];

export interface CreateTaskDTO {
    title: string,
    description?: string;
    status: TaskStatus
}

export interface Task {
    id: number;
    boardId: number;
    title: string;
    description?: string;
    status: TaskStatus
}