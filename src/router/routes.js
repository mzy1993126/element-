import Login from '@/views/login/Login';
import Home from '@/views/Home/home';
import Main from '@/views/Main';
import Error from '@/views/default/start404';

import Table from '@/views/nav1/Table';
import Form from '@/views/nav1/Form';
import user from '@/views/nav1/user';
import Page4 from '@/views/nav2/Page4';
import Page5 from '@/views/nav2/Page5';
import Page6 from '@/views/nav3/Page6';
import Page7 from '@/views/nav2/Page7';
import echarts from '@/views/charts/echarts';

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    { 	
    	path: '/main',
    	component: Main, 
    	name:'主页',
    	hidden: true,
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'el-icon-upload',//图标样式class
        children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' },
			{ path: '/page7', component: Page7, name: '页面7' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航三',
        iconCls: 'el-icon-date',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航四',
        iconCls: 'el-icon-edit'
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'el-icon-share',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' },
		component:Error
    }
];

export default routes;