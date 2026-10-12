import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";

import {
  landingAudiences,
  landingCapabilities,
  landingCopy,
  landingSteps,
} from "./content";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-base font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href="#plataforma" size="sm">
          Explorar
        </ButtonLink>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ocean-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_0%,rgba(18,168,157,0.35),transparent_60%),radial-gradient(50%_50%_at_85%_15%,rgba(47,140,160,0.4),transparent_65%)]"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="motion-safe:animate-fade-up">
          <Badge className="border-white/20 bg-white/10 text-white/90">
            {landingCopy.eyebrow}
          </Badge>
        </div>

        <h1
          className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance motion-safe:animate-fade-up sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {landingCopy.title}
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 motion-safe:animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          {landingCopy.subtitle}
        </p>

        <div
          className="mt-10 flex flex-col gap-3 motion-safe:animate-fade-up sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <ButtonLink href={landingCopy.primaryAction.href} variant="secondary">
            {landingCopy.primaryAction.label}
          </ButtonLink>
          <ButtonLink
            href={landingCopy.secondaryAction.href}
            variant="outline"
            className="border-white/25 bg-white/5 text-white hover:border-white/50 hover:text-white"
          >
            {landingCopy.secondaryAction.label}
          </ButtonLink>
        </div>
      </Container>

      <div aria-hidden className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 120"
          className="h-16 w-full fill-background sm:h-24"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,72 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="plataforma" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Plataforma"
          title="Una operación fresca, coordinada de punta a punta"
          description="MareaEnlace reúne la oferta mayorista y la demanda de las plantas compradoras en un mismo flujo de reserva y preventa."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {landingCapabilities.map((capability, index) => (
            <Card
              key={capability.title}
              hover
              className="motion-safe:animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col gap-3">
                <span
                  aria-hidden
                  className="numeric text-xs font-semibold tracking-wider text-accent-strong"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 border-y border-border bg-surface-muted py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="De la oferta en muelle a la planta"
            description="Tres pasos claros para cerrar una reserva con condiciones conocidas por ambas partes."
          />

          <ol className="flex flex-col gap-4">
            {landingSteps.map((step, index) => (
              <li
                key={step.order}
                className="flex gap-5 rounded-2xl border border-border bg-surface p-6 shadow-soft motion-safe:animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="numeric flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                  {step.order}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function Audiences() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Para quién" title="Dos lados, un mismo enlace" />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {landingAudiences.map((audience) => (
            <Card
              key={audience.role}
              hover
              className="flex flex-col gap-4 p-8 motion-safe:animate-fade-up"
            >
              <Badge>{audience.role}</Badge>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {audience.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClosingBand() {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ocean-950 px-8 py-14 text-center text-white sm:px-16 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_0%,rgba(18,168,157,0.32),transparent_65%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {site.tagline}
            </h2>
            <p className="mt-4 text-white/75">
              Reserva antes de la descarga y entrega con la confianza de una
              operación enlazada.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="#plataforma" variant="secondary">
                Conocer la plataforma
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <BrandMark />
          <div>
            <p className="font-display text-sm font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="text-sm text-muted-foreground">{site.tagline}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Prototipo en desarrollo. Sin operaciones comerciales reales.
        </p>
      </Container>
    </footer>
  );
}

export function LandingView() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main id="main-content" className="flex flex-1 flex-col">
        <Hero />
        <Capabilities />
        <HowItWorks />
        <Audiences />
        <ClosingBand />
      </main>
      <SiteFooter />
    </div>
  );
}