import Vue from 'vue';
import VueRouter from 'vue-router';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail'
import Chat from './pages/Chat';
import MessageList from './pages/MessageList';

Vue.use(VueRouter);

export default new VueRouter ({
    routes: [
        {
            path: '/',
            name: 'UserList',
            component: UserList,
        },
        {
            path: '/user/:id',
            name: 'UserDetail',
            component: UserDetail,
        },
        {
            path: '/user/:id/chat',
            name: 'Chat',
            component: Chat
        },
        {
            path: '/message-list',
            name: 'MessageList',
            component: MessageList
        }
    ]
})