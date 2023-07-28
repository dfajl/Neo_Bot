import Auth from '@/pages/Auth';
import Main from '@/pages/Main';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: Auth,
	},
	{
		path: '/main',
		component: Main,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
