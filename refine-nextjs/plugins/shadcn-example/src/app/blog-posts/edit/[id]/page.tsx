'use client'

import { useForm } from '@refinedev/react-hook-form'
import { useSelect } from '@refinedev/core'
import { useRouter } from 'next/navigation'
import { Textarea } from "@/components/ui/textarea";

import { EditView } from '@/components/refine-ui/views/edit-view'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

export default function BlogPostEdit() {
  const router = useRouter()

  const {
    refineCore: { onFinish, query },
    ...form
  } = useForm({})

  const blogPostsData = query?.data?.data

  const { options: categoryOptions } = useSelect({
    resource: 'categories',
    defaultValue: blogPostsData?.<%- blogPostCategoryFieldName %>,
    queryOptions: {
      enabled: !!blogPostsData?.<%- blogPostCategoryFieldName %>,
    },
  })

  function onSubmit(values: Record<string, string>) {
    onFinish(values)
  }

  return (
    <EditView>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='title'
            rules={{ required: 'Title is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ''} placeholder='Enter title' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='content'
            rules={{ required: 'Content is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    value={field.value || ""}
                    placeholder="Enter content"
                    rows={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={<%- blogPostCategoryIdFormField %>}
            rules={{ required: 'Category is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ''}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoryOptions?.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='status'
            rules={{ required: 'Status is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ''}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select status' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='<%- blogPostStatusOptions[0].value%>'><%- blogPostStatusOptions[0].label%></SelectItem>
                    <SelectItem value='<%- blogPostStatusOptions[1].value%>'><%- blogPostStatusOptions[1].label%></SelectItem>
                    <SelectItem value='<%- blogPostStatusOptions[2].value%>'><%- blogPostStatusOptions[2].label%></SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex gap-2'>
            <Button type='submit' {...form.saveButtonProps} disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Updating...' : 'Update'}
            </Button>
            <Button type='button' variant='outline' onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </EditView>
  )
}