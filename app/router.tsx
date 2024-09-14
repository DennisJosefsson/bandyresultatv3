import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import DefaultErrorComponent from './components/AppComponents/Common/DefaultErrorComponent'
import DefaultNotFound from './components/AppComponents/Common/DefaultNotFound'
import { routeTree } from './routeTree.gen'

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultErrorComponent: DefaultErrorComponent,
    defaultNotFoundComponent: DefaultNotFound,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
