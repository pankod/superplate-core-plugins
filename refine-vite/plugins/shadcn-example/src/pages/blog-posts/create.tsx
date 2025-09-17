import { useForm } from '@refinedev/react-hook-form'
import { useSelect } from '@refinedev/core'
import { useNavigate } from 'react-router'
import { Textarea } from "@/components/ui/textarea";

import { CreateView } from '@/components/refine-ui/views/create-view'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

<%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
import { BLOG_POSTS_QUERY, BLOG_POSTS_CATEGORIES_SELECT_QUERY } from './queries'
<%_ } _%>
<%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
import { POST_CREATE_MUTATION, CATEGORIES_SELECT_QUERY } from './queries'
<%_ } _%>

export const BlogPostCreate = () => {
  const navigate = useNavigate()

  const {
    refineCore: { onFinish },
    ...form
  } = useForm({
    refineCoreProps: {
      <%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
      meta: {
        fields: BLOG_POSTS_QUERY,
      },
      <%_ } _%>
      <%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
      meta: {
        gqlMutation: POST_CREATE_MUTATION,
      },
      <%_ } _%>
    },
    })

    const { options: categoryOptions } = useSelect({
      resource: 'categories',
      <%_ if (answers["data-provider"] === "data-provider-hasura") { _%>
      meta: {
        fields: BLOG_POSTS_CATEGORIES_SELECT_QUERY,
      },
      <%_ } _%>
      <%_ if (answers["data-provider"] === "data-provider-nestjs-query") { _%>
      meta: {
        gqlQuery: CATEGORIES_SELECT_QUERY,
      },
      <%_ } _%>
    })

  function onSubmit(values: Record<string, string>) {
    onFinish(values)
  }

  return (
    <CreateView>
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
                <Select onValueChange={field.onChange} defaultValue={<%- blogPostStatusDefaultValue %>}>
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
              {form.formState.isSubmitting ? 'Creating...' : 'Create'}
            </Button>
            <Button type='button' variant='outline' onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </CreateView>
  )
}