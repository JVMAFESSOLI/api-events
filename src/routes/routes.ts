import { Router } from "express";
import { createEventController } from "../useCases/CreateEvent";

const router = Router();

router.post("/event", (request, response) => {
  return createEventController.handle(request, response);
});

export { router };
