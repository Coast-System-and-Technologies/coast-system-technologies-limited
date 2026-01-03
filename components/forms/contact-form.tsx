"use client";

import * as React from "react";
import { Loader2, Paperclip, Send } from "lucide-react";

import { SITE } from "@/content/site";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HELP_OPTIONS = [
  "Governance & Structuring",
  "Legal-Tech & Compliance Systems",
  "Data Protection & Privacy (Nigeria)",
  "Trademark & IP Protection (NIPO)",
  "CAC Registry Services (Accredited Agent)",
  "Not sure (Route me)",
] as const;

const TIMELINE_OPTIONS = ["Urgent", "2–4 weeks", "1–3 weeks", "Flexible"] as const;

const whatsappLink = `https://wa.me/${SITE.contact.phoneTel.replace(/\D/g, "")}`;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Frontend-only stub (safe default).
    // Later you can POST to /api/contact or your CRM endpoint.
    await new Promise((r) => setTimeout(r, 650));

    setIsSubmitting(false);
    setIsSent(true);
  }

  return (
    <Card className="border-border/70 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <CardContent className="p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-tight">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share the context and the outcome you want. We’ll respond with next steps.
          </p>
        </div>

        {isSent ? (
          <div className="rounded-xl border border-border/70 bg-background/60 p-4">
            <p className="text-sm font-medium">
              Received. We’ll review your message and respond with next steps.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              If it’s urgent, email{" "}
              <a
                className="underline underline-offset-4"
                href={`mailto:${SITE.contact.email}`}
              >
                {SITE.contact.email}
              </a>{" "}
              or WhatsApp{" "}
              <a
                className="underline underline-offset-4"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                {SITE.contact.phoneDisplay}
              </a>
              .
            </p>

            <div className="mt-4">
              <Button variant="secondary" onClick={() => setIsSent(false)}>
                Send another message
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" placeholder="Your full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company / Organisation (optional)</Label>
                <Input id="company" name="company" placeholder="Your organisation" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (WhatsApp allowed)</Label>
                <Input id="phone" name="phone" placeholder="+234 ..." required />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>What do you need help with?</Label>
                <Select name="helpWith" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {HELP_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Choose the closest option—we’ll refine it.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Timeline</Label>
                <Select name="timeline" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIMELINE_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message / Project Summary</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="What are you trying to achieve? What’s currently not working?"
                className="min-h-[140px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="files">Upload files (optional)</Label>
              <div className="flex items-center gap-2">
                <Input id="files" name="files" type="file" multiple />
                <Paperclip className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                Contracts, briefs, brand assets, policies, CAC-related documents, or supporting files.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Your information is treated as confidential and used only to respond to this request.
              </p>

              <Button type="submit" className="gap-2" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Send Message
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
