import SimpleErrorComponent from '@/components/AppComponents/Common/SimpleErrorComponent'
import Header from '@/components/AppComponents/Header/Header'
import { getGender, setGender } from '@/lib/zustand/women'
import { CatchBoundary, createFileRoute, Outlet } from '@tanstack/react-router'
import { useEffect } from 'react'
import { z } from 'zod'
const searchWomen = z.object({ women: z.boolean().optional().default(false) })
export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
  validateSearch: searchWomen,
})

function LayoutComponent() {
  const { women: womenContext } = getGender()
  const women = Route.useSearch({ select: (search) => search.women })

  useEffect(() => {
    if (women !== womenContext) {
      setGender(women)
    }
  }, [women, womenContext])
  return (
    <div className="flex flex-col bg-background text-foreground w-full">
      <Header />
      {/* <Toaster /> */}

      <div className="w-full">
        <CatchBoundary
          getResetKey={() => 'reset'}
          onCatch={(error) => {
            console.error(error)
          }}
          errorComponent={({ error, reset }) => (
            <SimpleErrorComponent id="layout" error={error} reset={reset} />
          )}
        >
          <button onClick={() => console.log('click click')}>Klick</button>
          <Outlet />
        </CatchBoundary>
      </div>
    </div>
  )
}
