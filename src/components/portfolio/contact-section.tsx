'use client';

import { FadeInView } from './fade-in';
import { SectionHeading } from './section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mahla.zph@gmail.com',
    href: 'mailto:mahla.zph@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/MahlaParvaz',
    href: 'https://github.com/MahlaParvaz',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mahla-parvaz',
    href: 'https://linkedin.com/in/mahla-parvaz',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mashhad, Iran',
    href: undefined,
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setSent(true);
      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact me directly via email.',
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-5 gap-10 mt-12">
          {/* Contact Info */}
          <FadeInView direction="left" className="md:col-span-2 space-y-1">
            {contactInfo.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </FadeInView>

          {/* Contact Form */}
          <FadeInView direction="right" delay={100} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-xl border border-border bg-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={sending || sent}
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
