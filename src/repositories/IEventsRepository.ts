import { Event } from "../entities/Event";

export interface IEventsRepository {
  findByTitle(email: string): Promise<Event>;
  save(event: Event): Promise<void>;
}
