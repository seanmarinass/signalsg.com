"use client";

import { Controller, useForm } from "react-hook-form";
import {
  ContactUsFormSchema,
  ContactUsFormSchemaData,
} from "../schemas/contact-us-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactUsForm = () => {
  const form = useForm<ContactUsFormSchemaData>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      description: "",
    },
  });

  const handleSubmit = (data: ContactUsFormSchemaData) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="border rounded-xl py-10 px-5 border-site-muted"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Name"
                autoComplete="off"
                className="p-3 border-site-muted border rounded-xl"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Email"
                autoComplete="off"
                className="p-3 border-site-muted border rounded-xl"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="contactNumber"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Contact Number</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Contact Number"
                autoComplete="off"
                className="p-3 border-site-muted border rounded-xl"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="howDidYouFindUs"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>How did you find us?</FieldLabel>
              <Select>
                <SelectTrigger className="p-3 border-site-muted border rounded-xl flex">
                  <SelectValue
                    placeholder="How did you find us?"
                    className="text-site-m"
                  />
                </SelectTrigger>
                <SelectContent className="border-site-muted border rounded-xl flex bg-site-background">
                  <SelectItem value="SOCIAL">Social Media</SelectItem>
                  <SelectItem value="FRIEND">
                    Friend&apos;s Recommendation
                  </SelectItem>
                  <SelectItem value="AD">Advertisements</SelectItem>
                  <SelectItem value="OTHERS">Others</SelectItem>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="col-span-full">
              <FieldLabel htmlFor={field.name}>Tell us more</FieldLabel>
              <Textarea
                placeholder="Tell us more"
                className="border border-site-muted p-3 h-[150px]"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <Button
        variant="outline"
        className="bg-site-background text-site-foreground border border-site-muted px-3 py-2 text-xl h-fit mt-10"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactUsForm;
