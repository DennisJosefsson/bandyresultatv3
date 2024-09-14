//'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/lib/hooks/useTheme'
import { cookieSetter } from '@/lib/utils/cookies'
import { Moon, Sun } from 'lucide-react'

const ModeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <>
      <button onClick={() => console.log('click click')}>Klick</button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={() => console.log('click')}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={async () => {
              await cookieSetter({
                name: 'bandyresultat-theme',
                value: 'light',
              })
              setTheme('light')
            }}
          >
            Ljus
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => {
              await cookieSetter({
                name: 'bandyresultat-theme',
                value: 'dark',
              })
              setTheme('dark')
            }}
          >
            Mörk
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => {
              await cookieSetter({
                name: 'bandyresultat-theme',
                value: 'system',
              })
              setTheme('system')
            }}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default ModeToggle
