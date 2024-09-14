import { ThemeProvider } from '@/components/ui/theme-provider'
import { Theme } from '@/lib/types/theme/theme'
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start'

import { cookieParser } from '@/lib/utils/cookies'
// @ts-expect-error
import appCss from '@/styles/app.css?url'

//import { getCookie } from 'vinxi/http'

export const Route = createRootRoute({
  pendingComponent: () => <p>Laddar...</p>,
  loader: async () => {
    const cookies = await cookieParser('bandyresultat-theme')
    return cookies
  },
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'Bandyresultat',
    },
  ],
  component: RootComponent,
  links: () => [{ rel: 'stylesheet', href: appCss }],
})

function RootComponent() {
  return (
    <RootDocument>
      {/* <p>{JSON.stringify(cookies)}</p> */}
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const cookies = Route.useLoaderData()

  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <ThemeProvider
        defaultTheme={cookies as Theme}
        storageKey="bandyresultat-theme"
      >
        <Body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </Body>
      </ThemeProvider>
    </Html>
  )
}
