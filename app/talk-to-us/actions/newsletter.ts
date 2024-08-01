'use server'

import { createClient } from "@/utils/supabase/server"
import { NewsletterFormSchema } from "../schema/newsletter";

export async function saveEmail (data: any) {
    const supabase = createClient()

    try {
        const { email } = NewsletterFormSchema.parse({
          email: data.email,
        })

        const { data: existingSubscriptions, error: error1 } = await supabase
            .from("newsletter_apprendrai")
            .select("id")
            .eq("email", email);

        if (existingSubscriptions && existingSubscriptions.length > 0) {
            return {
                success: false,
                error: "Email already registered",
            };
        }

        const { data: newsletter, error } = await supabase.from("newsletter_apprendrai").insert([
          {
            email: email,
          },
        ]);

        if (error) {
          return {
            success: false,
            error: error,
          }
        }

        if (data) {
            return { 
              success: true,
              error: null,
            }
        }
      } catch (error) {
        return {
            success: false,
            error: 'invalid credentials'
          }
      }
}