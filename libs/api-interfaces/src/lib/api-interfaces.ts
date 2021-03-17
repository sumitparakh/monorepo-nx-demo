export type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>
export interface Task {
  id: number;
  task: string;
}
