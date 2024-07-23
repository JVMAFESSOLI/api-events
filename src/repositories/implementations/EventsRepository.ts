import { Event } from "../../entities/Event";
import { IEventsRepository } from "../IEventsRepository";

export class EventsRepository implements IEventsRepository {
  private events: Event[] = [];

  async findByTitle(title: string): Promise<Event> {
    const event = this.events.find((event) => event.title === title);
    return event;
  }

  async save(event: Event): Promise<void> {
    this.events.push(event);
  }
}
