"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NewsletterFormSchema } from "../schema/newsletter"
import { saveEmail } from "../actions/newsletter"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast";

export function NewsletterForm() {
  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: z.infer<typeof NewsletterFormSchema>) {
    const response = await saveEmail(data)

    if (response?.success) {
      toast({
        description: "Your message has been sent.",
      })
    } else if (response?.error) {
      toast({
        description: response.error.toString(),
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 justify-between">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder="sebastien.payet@gmail.com" onClearClick={() => form.setValue(field.name, '')} startIcon={<Mail />} type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-fit" type="submit">Get More Informations</Button>
      </form>
    </Form>
  )
}