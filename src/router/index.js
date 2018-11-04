import Vue from 'vue';
import Router from 'vue-router';
import Edit from '@/views/Edit';
import List from '@/views/List';
import Star from '@/views/Star';

Vue.use(Router);

export default new Router({
    routes: [
        {
            // 默认跳转到 edit
            path: '/',
            redirect: '/edit'
        },
        {
            path: '/edit',
            name: 'edit',
            component: Edit
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/star',
            name: 'star',
            component: Star
        }
    ]
});
