import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, CopyIcon, User2Icon } from 'lucide-react'

export default function Home() {
  return (
    <main className='p-4 h-screen space-y-4'>
      <Button>
        Click me
        <ArrowRight />
      </Button>
      <IconButton>
        <CopyIcon />
      </IconButton>
      <InputRoot>
        <InputIcon>
          <User2Icon />
        </InputIcon>
        <InputField placeholder='Informe seu email' />
      </InputRoot>
    </main>
  )
}
