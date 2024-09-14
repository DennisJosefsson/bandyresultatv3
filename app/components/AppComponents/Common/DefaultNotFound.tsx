import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

const DefaultNotFound = () => {
  return (
    <div className="flex flex-row justify-center mt-6">
      <div className="flex flex-col gap-2">
        <p className="text-[10px] md:text-sm font-semibold">
          Den sidan finns inte.
        </p>
        <div className="flex flex-row justify-center gap-2">
          <Button onClick={() => window.history.go(-1)}>Gå tillbaka</Button>
          <Link to="/">
            <Button>Förstasidan</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DefaultNotFound
