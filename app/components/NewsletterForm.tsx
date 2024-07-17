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

function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin lucide lucide-loader-circle"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

export function NewsletterForm() {
  const [open, setOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [newSubscription, setNewSubscription] = useState(true)
  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: z.infer<typeof NewsletterFormSchema>) {
    setShowSpinner(true);
    try {
      const response = await saveEmail(data);
      setOpen(true);
      if (response?.success) {
        setNewSubscription(true);
      } else if (response?.error) {
        setNewSubscription(false);
      }
    } catch (error) {
      setNewSubscription(false);
    } finally {
      setShowSpinner(false);
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
          <Button className="sm:w-fit flex flex-row gap-1 items-center" variant="accent" type="submit">
            {showSpinner && <Spinner />}
            Get More Informations
          </Button> 
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