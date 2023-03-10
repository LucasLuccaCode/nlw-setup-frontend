import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'phosphor-react'
import logoImage from '../assets/logo.svg'

import { NewHabitForm } from './NewHabitForm'

export function Header() {
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img className='' src={logoImage} alt="Logo do habits" />


      <Dialog.Root>
        <Dialog.Trigger
          type='button'
          className='flex items-center gap-2 border-4 border-violet-500 font-semibold rounded-lg px-6 py-4 hover:border-violet-300'
        >
          <Plus size={20} className="text-violet-400" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='w-screen h-screen bg-black/70 fixed inset-0' />

          <Dialog.Content className='absolute p-8 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Dialog.Close className='absolute right-4 top-4 text-zinc-400 hover:text-zinc-200' >
              <X size={24} arial-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className='text-3xl leading-tight font-extrabold'>
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}