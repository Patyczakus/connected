export default [
	{path: '/', component: import("@/pages/Home"), name: 'home'},
	{path: '/auth/login', component: import("@/pages/auth/Login"), name: 'auth.login'},
	{path: '/auth/register', component: import("@/pages/auth/Register"), name: 'auth.register'},
]