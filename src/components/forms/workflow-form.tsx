import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { onCreateWorkflow } from '@/app/(main)/(pages)/workflows/_actions/workflow-connections'
import { WorkflowFormSchema } from '@/lib/types'
import { useModal } from '@/providers/modal-provider'

import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'


type Props = {
  title?: string
  subTitle?: string
}

const Workflowform = ({ subTitle, title }: Props) => {
  const { setClose } = useModal()
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const isLoading = form.formState.isLoading
  const router = useRouter()

  const handleSubmit = async (values: z.infer<typeof WorkflowFormSchema>) => {
    const workflow = await onCreateWorkflow(values.name, values.description)
    if (workflow) {
      toast.message(workflow.message)
      router.refresh()
    }
    setClose()
  }

  return (
    <Card className="w-full max-w-[650px] border-none">
      {title && subTitle && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subTitle}</CardDescription>
        </CardHeader>
      )}
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 text-left"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormControl>
                    <Input
                      id="name"  // Added id attribute
                      {...field}
                      placeholder="Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormControl>
                    <Input
                      id="description"  // Added id attribute
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-4"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                </>
              ) : (
                'Save Settings'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Workflowform
