export const validStatus = ['backlog', 'doing', 'closed'] as const;
export type TaskStatus = typeof validStatus[number];