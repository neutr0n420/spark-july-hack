import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
        email : z.string().email(),
        password : z.string(),
        rollnumber : z.number(),
    })

const AttendanceForm:React.FC = () => {

    const form =useForm<z.infer<typeof FormSchema>>({
        resolver:zodResolver(FormSchema) 
    })

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        console.log(values)
    }
    return (
        <>
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input required type='email' placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your Email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input  type='password' placeholder="****" {...field} />
              </FormControl>
              <FormDescription>
                This is your Password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="rollnumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>rollnumber</FormLabel>
              <FormControl>
                <Input placeholder="17" {...field} />
              </FormControl>
              <FormDescription>
                This is your Rollnumber.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form> 
        </>
    )
}

export default AttendanceForm