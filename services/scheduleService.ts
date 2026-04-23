import { api } from './api';

export interface ScheduleData {
    title: string;
    description: string;
    start_time: string;
    end_time: string;
    status: string;
    team_id: number;
}

export const scheduleService = {
    createSchedule: async (data: ScheduleData) => {
        const response = await api.post('/schedules', data);
        return response.data;
    },
};