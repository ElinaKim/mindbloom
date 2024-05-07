/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthImport } from './routes/_auth'
import { Route as AuthTasksUpcomingImport } from './routes/_auth.tasks.upcoming'
import { Route as AuthTasksTaskIdImport } from './routes/_auth.tasks.$taskId'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const AuthTasksTodayLazyImport = createFileRoute('/_auth/tasks/today')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AuthTasksTodayLazyRoute = AuthTasksTodayLazyImport.update({
  path: '/tasks/today',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.tasks.today.lazy').then((d) => d.Route),
)

const AuthTasksUpcomingRoute = AuthTasksUpcomingImport.update({
  path: '/tasks/upcoming',
  getParentRoute: () => AuthRoute,
} as any)

const AuthTasksTaskIdRoute = AuthTasksTaskIdImport.update({
  path: '/tasks/$taskId',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth/tasks/$taskId': {
      preLoaderRoute: typeof AuthTasksTaskIdImport
      parentRoute: typeof AuthImport
    }
    '/_auth/tasks/upcoming': {
      preLoaderRoute: typeof AuthTasksUpcomingImport
      parentRoute: typeof AuthImport
    }
    '/_auth/tasks/today': {
      preLoaderRoute: typeof AuthTasksTodayLazyImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AuthRoute.addChildren([
    AuthTasksTaskIdRoute,
    AuthTasksUpcomingRoute,
    AuthTasksTodayLazyRoute,
  ]),
  LoginRoute,
  AboutLazyRoute,
  RegisterLazyRoute,
])

/* prettier-ignore-end */
