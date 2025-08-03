// 路由配置
import { lazy } from 'react';

// 懒加载组件
const Home = lazy(() => import('../components/Home'));
const Literature = lazy(() => import('../components/LiteratureDatabase'));
const Database = lazy(() => import('../components/Database'));
const Decision = lazy(() => import('../components/Decision'));
const Resources = lazy(() => import('../components/Resources'));
const About = lazy(() => import('../components/About'));
const Explore = lazy(() => import('../components/Explore'));

// 路由配置数组
export const routeConfig = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/literature',
    component: Literature,
    exact: true
  },
  {
    path: '/database',
    component: Database,
    exact: true
  },
  {
    path: '/decision',
    component: Decision,
    exact: true
  },
  {
    path: '/resources',
    component: Resources,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/explore',
    component: Explore,
    exact: true
  }
];