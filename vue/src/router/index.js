import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue';
import Dashboard from '../components/DefaultLayout.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        children: [
            {path: '/dashboard', name: 'Dashboard', component: Dashboard}
        ]
    },
];

const router = createRouter({
    history: createWebHistory(), //donot use createWebHashHistory
    routes
})

export default router;