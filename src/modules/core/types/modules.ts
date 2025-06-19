export enum ModuleType {
  VIDEO = 'video',
  TEXT = 'text',
  EXERCISE = 'exercise',
  TEST = 'test',
}

export interface Module {
  id: number;
  courseId: number;
  name: string;
  type: ModuleType;
  displayOrder: number;
}
