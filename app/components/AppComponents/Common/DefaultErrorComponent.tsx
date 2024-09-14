import { Button } from '@/components/ui/button'
import {
  ErrorComponent,
  ErrorComponentProps,
  Link,
  useRouter,
} from '@tanstack/react-router'

const DefaultErrorComponent = ({ error }: ErrorComponentProps) => {
  const router = useRouter()
  return (
    <div className="flex flex-row justify-center mt-6">
      <div className="flex flex-col gap-2">
        <ErrorComponent error={error} />

        <div className="flex flex-row justify-center gap-2">
          <Button onClick={() => router.invalidate()}>Försök igen</Button>
          <Button onClick={() => window.history.go(-1)}>Gå tillbaka</Button>
          <Link to="/">
            <Button>Förstasidan</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DefaultErrorComponent
