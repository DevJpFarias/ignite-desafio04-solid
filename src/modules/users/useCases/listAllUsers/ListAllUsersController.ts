import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const listAllUsers = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
      return response.status(201).json(listAllUsers);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Usuário não é admin ou não encontrado!" });
    }
  }
}

export { ListAllUsersController };
