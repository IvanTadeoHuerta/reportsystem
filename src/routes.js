/*
 *Modulos que se integran a las rutas
 */

import Login from './components/login.vue'
import Home from './components/home.vue'
import Orientadores from './components/orientadores.vue'
import Grupos from './components/grupos.vue'

const routes = [
    { path: '/', component: Login, name: 'login' },
    {
        path: '/home', component: Home, name: 'home',
        children: [
            {
                path: 'orientadores',
                name: 'orientadores',
                component: Orientadores
            },
            {
                path: 'grupos',
                name: 'grupos',
                component: Grupos
            }

        ]
    }
]

export default routes