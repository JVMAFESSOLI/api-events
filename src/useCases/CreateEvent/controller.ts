import { Request, Response } from "express";
import { CreateEventUseCase } from "./useCase";

export class CreateEventController {
  constructor(private createEventUseCase: CreateEventUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, email, password } = request.body;

    try {
      await this.createEventUseCase.execute({
        title,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
