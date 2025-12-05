import { educationProgressRepository } from "../repositories/educationProgressRepository";

export const educationProgressService = {
  markCompleted: (id: string, token: string) =>
    educationProgressRepository.markCompleted(id, token),

  getCompleted: (token: string) =>
    educationProgressRepository.getCompleted(token),

  
  removeCompleted: (id: string, token: string) =>
    educationProgressRepository.removeCompleted(id, token),
};
