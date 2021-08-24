import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userId = this.usersRepository.findById(user_id);

    if (!userId) {
      throw new Error("User doesn't exist!");
    }

    if (userId.admin === false) {
      throw new Error("You don't have permission!");
    }
    const allUsers = this.usersRepository.list();
    return allUsers;
  }
}

export { ListAllUsersUseCase };
