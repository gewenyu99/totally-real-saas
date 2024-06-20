import type { HttpContext } from '@adonisjs/core/http';
import { randAlphaNumeric, randLine, randParagraph } from '@ngneat/falso';

export default class PostsController {
    public async index({ response }: HttpContext) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to fetch all posts
        const posts = [
            {
                id: randAlphaNumeric({ length: 3 }),
                title: randLine(),
                text: randParagraph()
            },
            {
                id: randAlphaNumeric({ length: 3 }),
                title: randLine(),
                text: randParagraph()
            },
            {
                id: randAlphaNumeric({ length: 3 }),
                title: randLine(),
                text: randParagraph()
            },
        ]
        return response.send(posts);
    }

    public async show({ params, response }: HttpContext) {
        const { id } = params;

        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to fetch a specific post by id
        const post = {
            id: id,
            title: randLine(),
            text: randParagraph()
        };
        post.id = id;
        return response.send(post);
    }

    public async store({ request, response }: HttpContext) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to create a new post
        const newPost = {
            id: randAlphaNumeric({ length: 3 }),
            title: randLine(),
            text: randParagraph()
        };
        return response.send(newPost);
    }

    public async update({ params, request, response }: HttpContext) {
        const { id } = params;

        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

        // Logic to update a specific post by id
        const updatedPost = randParagraph({ id });
        return response.send(updatedPost);
    }

    public async destroy({ params, response }: HttpContext) {
        const { id } = params;

        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
        // Logic to delete a specific post by id
        return response.send({ message: `Post with id ${id} has been deleted` });
    }
}

