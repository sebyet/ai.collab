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
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function NewsletterForm() {
  const [open, setOpen] = useState(false);
  const [newSubscription, setNewSubscribtion] = useState(true)
  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: z.infer<typeof NewsletterFormSchema>) {
    const response = await saveEmail(data)
    setOpen(true);
    if (response?.success) {
      setNewSubscribtion(true);
    } else if (response?.error) {
      setNewSubscribtion(false);
    }
  }

  return (
    <>
 
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 justify-between">
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
          <Button className="w-fit" variant="accent" type="submit">Get More Informations</Button>
        </form>
      </Form>
      <Dialog onOpenChange={() => setOpen(false)} open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you for your interest!</DialogTitle>
            <DialogDescription>
              {newSubscription &&  "We received your email adress and will come back as soon as possible to you to give you more informations."}
              {!newSubscription &&  "Hey it looks like you have already registered your email, we will come back as soon as possible to you to give you more informations."}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
   </>
  )
}