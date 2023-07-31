import Auth from '@/pages/Auth';
import Main from '@/pages/Main';
import Quests from '@/pages/Quests';
import Goods from '@/pages/Goods';
import Verification from '@/pages/Verification';
import Administration from '@/pages/Administration';
import StartQuiz from '@/pages/StartQuiz';
import Orders from '@/pages/Orders';
import Reports from '@/pages/Reports';
import Events from '@/pages/Events';

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
	{
		path: '/quests',
		component: Quests,
	},
	{
		path: '/goods',
		component: Goods,
	},
	{
		path: '/verification',
		component: Verification,
	},
	{
		path: '/administration',
		component: Administration,
	},
	{
		path: '/startQuiz',
		component: StartQuiz,
	},
	{
		path: '/orders',
		component: Orders,
	},
	{
		path: '/reports',
		component: Reports,
	},
	{
		path: '/events',
		component: Events,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
