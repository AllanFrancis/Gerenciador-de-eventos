'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, MailIcon, UserIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type subscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<subscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({ name, email }: subscriptionSchema) {
    const referrer = searchParams.get('referrer')

    const { subscriberId } = await subscribeToEvent({
      name,
      email,
      referrer,
    })
    router.push(`/invite/${subscriberId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-1">
          <InputRoot>
            <InputIcon>
              <UserIcon />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>
          {errors.name && (
            <span className="text-danger text-xs">{errors.name.message}</span>
          )}
        </div>

        <div className="space-y-1">
          <InputRoot>
            <InputIcon>
              <MailIcon />
            </InputIcon>
            <InputField
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <span className="text-danger text-xs ">{errors.email.message}</span>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRightIcon className="size-6" />
      </Button>
    </form>
  )
}
