import type { HttpContext } from '@adonisjs/core/http'
import { randUser } from '@ngneat/falso';

export default class UsersController {
    public async index({ response }: HttpContext) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to fetch all users
        const users = randUser();
        return response.send(users);
    }

    public async show({ params, response }: HttpContext) {
        const { id } = params;

        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to fetch a specific user by id
        const user = randUser();
        user.id = id;
        return response.send(user);
    }

    public async store({ request, response }: HttpContext) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to create a new user
        const newUser = randUser();
        return response.send(newUser);
    }

    public async update({ params, request, response }: HttpContext) {
        const { id } = params;

        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to update a specific user by id
        const updatedUser = randUser({ id });
        return response.send(updatedUser);
    }

    public async destroy({ params, response }: HttpContext) {
        const { id } = params;

        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to delete a specific user by id
        return response.send({ message: `User with id ${id} has been deleted` });
    }
}
