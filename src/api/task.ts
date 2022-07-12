import { TaskModel } from "../models";
import { env } from "../utils";

export class Task {
  obtain(): TaskModel[] {
    const response = localStorage.getItem(env.LOCAL_STORAGE.TASKS);
    if (!response) return [];
    return JSON.parse(response);
  }

  create(task: TaskModel) {
    const tasks: TaskModel[] = this.obtain();
    tasks.push(task);

    localStorage.setItem(env.LOCAL_STORAGE.TASKS, JSON.stringify(tasks));
  }

  changeAllTasks(tasks: TaskModel[]) {
    localStorage.setItem(env.LOCAL_STORAGE.TASKS, JSON.stringify(tasks));
  }
}
