import { IEventsRepository } from "../../repositories/IEventsRepository";
import { ICreateEventRequestDTO } from "./DTO";
import { Event } from "../../entities/Event";

// S - Single Responsability principle (esta classe tem por única responsabilidade a criacao do evento)
export class CreateEventUseCase {
  // D - Dependency inversion principle (depender de uma interface e nao diretamente do repositorio)
  // L - Liscov Substitution principle (receber IEventsRepository = uma interface que define os métodos que irão existir em um repositório)
  constructor(private eventsRepository: IEventsRepository) {}

  async execute(data: ICreateEventRequestDTO) {
    const eventAlreadyExists = await this.eventsRepository.findByTitle(
      data.title
    );

    if (eventAlreadyExists) {
      throw new Error("Event already exists.");
    }

    const event = new Event(data);

    await this.eventsRepository.save(event);
  }
}
