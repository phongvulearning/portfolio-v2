"use client";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendMail";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";
import { useRef } from "react";
import { LoaderIcon } from "lucide-react";

export const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              If you have any questions or would like to discuss a project, feel
              free to reach out.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form
              ref={formRef}
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success("Email sent successfully!");
              }}
              className="flex flex-col gap-4"
            >
              <Input
                type="text"
                name="name"
                placeholder="Name"
                className="max-w-lg flex-1"
                required
                maxLength={50}
              />
              <Input
                type="email"
                name="senderEmail"
                placeholder="Email"
                className="max-w-lg flex-1"
                required
                maxLength={500}
              />
              <Textarea
                name="message"
                placeholder="Message"
                className="max-w-lg flex-1 resize-none"
                maxLength={5000}
              />
              <Button type="submit" disabled={pending}>
                {pending ? (
                  <p className="flex items-center gap-2">
                    <LoaderIcon className="animate-spin h-5 w-5" />
                    Submitting...
                  </p>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
