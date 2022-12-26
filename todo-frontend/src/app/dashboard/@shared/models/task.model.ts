const TASK_STATUS = ['backlog', 'doing', 'closed'] as const;
export type TaskStatus = typeof TASK_STATUS[number];

export interface CreateTaskDTO {
    title : string,
    description ?: string;
    status : TaskStatus
}