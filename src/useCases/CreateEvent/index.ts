import { EventsRepository } from "../../repositories/implementations/EventsRepository";
import { CreateEventController } from "./controller";
import { CreateEventUseCase } from "./useCase";

const eventsRepository = new EventsRepository();

const createEventUseCase = new CreateEventUseCase(eventsRepository);

const createEventController = new CreateEventController(createEventUseCase);

export { createEventUseCase, createEventController };
