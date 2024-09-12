/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const PostController = () => import('#controllers/posts_controller')


router.on('/').render('pages/home')
router.group(() => {
    // User APIs
    router.get('/user', [UsersController, 'index'])
    router.get('/user/:id', [UsersController, 'show'])
    router.post('/user', [UsersController, 'store'])
    router.put('/user/:id', [UsersController, 'update'])
    router.delete('/user/:id', [UsersController, 'destroy'])

    // Post APIs
    router.get('/posts', [PostController, 'index'])
    router.get('/posts/:id', [PostController, 'show'])
    router.post('/posts', [PostController, 'store'])
    router.put('/posts/:id', [PostController, 'update'])
    router.delete('/posts/:id', [PostController, 'destroy'])
}).prefix('/api')
