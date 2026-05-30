import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  BookOpen,
  Star,
  Cake,
  CalendarDays,
  Utensils,
  Package,
  Flower2,
  Mountain,
  MapPin,
  Clock,
  Instagram,
} from "lucide-react";

import logo from "@/assets/maharasa-logo.png";
import heroImg from "@/assets/hero-kue.jpg";
import bugisMandi from "@/assets/bugis-mandi.jpg";
import kueCincin from "@/assets/kue-cincin.jpg";
import pieSusu from "@/assets/pie-susu.jpg";
import dadarGulung from "@/assets/dadar-gulung.jpg";
import bugisKetan from "@/assets/bugis-ketan-hitam.jpg";
import talamUbi from "@/assets/talam-ubi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maharasa by Alfa 99 — Kue Tradisional, Fresh Everyday" },
      {
        name: "description",
        content:
          "Maharasa by Alfa 99 — kue tradisional Nusantara dengan 200+ varian, fresh setiap hari. Melayani retail & catering event. Pesan via WhatsApp.",
      },
      { property: "og:title", content: "Maharasa by Alfa 99 — Kue Tradisional, Fresh Everyday" },
      {
        property: "og:description",
        content:
          "200+ varian kue nusantara, dibuat fresh setiap hari. Rating 4.8 dari ribuan pelanggan.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const WA_LINK = "#";
const CATALOG_LINK = "#";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z" />
    </svg>
  );
}

function GrabIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.5 14.5c-1 0-1.8-.5-2.3-1.2-.5.4-1.2.7-2 .7-1.7 0-3-1.2-3-2.9 0-1.5 1-2.7 2.4-2.9V9c0-1.7 1.4-3 3.1-3 1.5 0 2.8 1 3.1 2.4l-1.5.4c-.2-.7-.8-1.2-1.6-1.2-.9 0-1.6.7-1.6 1.6v1.2c1.4.3 2.4 1.5 2.4 2.9 0 .4-.1.8-.2 1.1.2.2.5.3.8.3.5 0 .9-.3 1.1-.7l1.3.8c-.5.9-1.4 1.7-2 1.7zm-4.3-2c.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4z" />
    </svg>
  );
}

function GoFoodIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
  );
}

function ShopeeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1.5c-2.485 0-4.5 2.015-4.5 4.5v.5h-4l1 14a3 3 0 0 0 3 2.75h9a3 3 0 0 0 3-2.75l1-14h-4V6c0-2.485-2.015-4.5-4.5-4.5zm0 1.5c1.657 0 3 1.343 3 3v.5h-6V6c0-1.657 1.343-3 3-3zm-.25 6.5c2.071 0 3.75 1.343 3.75 3 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.69-.96-1.5-2.25-1.5s-2.25.81-2.25 1.5c0 .69.96 1.5 2.25 1.5 2.071 0 3.75 1.343 3.75 3s-1.679 3-3.75 3c-2.071 0-3.75-1.343-3.75-3 0-.414.336-.75.75-.75s.75.336.75.75c0 .69.96 1.5 2.25 1.5s2.25-.81 2.25-1.5c0-.69-.96-1.5-2.25-1.5-2.071 0-3.75-1.343-3.75-3s1.679-3 3.75-3z" />
    </svg>
  );
}

const services = [
  { icon: Utensils, title: "Catering", desc: "Hidangan tradisional untuk berbagai acara" },
  { icon: Package, title: "Snack Box", desc: "Paket snack box untuk event & meeting" },
  {
    icon: Flower2,
    title: "Kue Tampah Nusantara",
    desc: "Aneka kue dalam tampah, cocok untuk hantaran",
  },
  {
    icon: Mountain,
    title: "Tumpeng Nusantara",
    desc: "Hidangan tumpeng untuk perayaan & syukuran",
  },
];

const menu = [
  { name: "Bugis Mandi", price: "Rp 2.500", img: bugisMandi },
  { name: "Kue Cincin", price: "Rp 2.500", img: kueCincin },
  { name: "Pie Susu", price: "Rp 3.000", img: pieSusu },
  { name: "Dadar Gulung", price: "Rp 2.000", img: dadarGulung },
  { name: "Bugis Ketan Hitam", price: "Rp 2.000", img: bugisKetan },
  { name: "Talam Ubi", price: "Rp 2.500", img: talamUbi },
];

const orderChannels = [
  {
    name: "WhatsApp",
    Icon: WhatsAppIcon,
    href: WA_LINK,
    color: "bg-whatsapp text-whatsapp-foreground",
  },
  { name: "GrabFood", Icon: GrabIcon, href: "#", color: "bg-[#00B14F] text-white" },
  { name: "GoFood", Icon: GoFoodIcon, href: "#", color: "bg-[#E53935] text-white" },
  { name: "ShopeeFood", Icon: ShopeeIcon, href: "#", color: "bg-[#EE4D2D] text-white" },
];

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-grain">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-5 sm:pt-7">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Maharasa by Alfa 99" className="h-10 w-auto sm:h-12" />
          </div>
          <a
            href={WA_LINK}
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground shadow-sm transition hover:opacity-90 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </header>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:pb-24 sm:pt-14 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary uppercase">
              <Cake className="h-3.5 w-3.5" /> Delicious Cake & Excellent Taste
            </span>
            <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Kue Tradisional,
              <br />
              <em className="not-italic text-primary">Fresh Everyday</em>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Lebih dari <strong className="text-foreground">200+ varian kue nusantara</strong>,
              dibuat fresh setiap hari. Melayani kebutuhan retail hingga catering event & korporat.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={WA_LINK}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-gold-foreground shadow-sm transition hover:-translate-y-0.5 hover:opacity-95"
              >
                <BookOpen className="h-5 w-5" />
                Lihat Katalog
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span>4.8 dari ribuan pelanggan</span>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/15 via-gold/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
              <img
                src={heroImg}
                alt="Aneka kue tradisional Maharasa"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-xl sm:flex sm:items-center sm:gap-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Cake className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">200+ Varian</div>
                <div className="text-muted-foreground">Fresh setiap hari</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-espresso text-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-5 py-8 text-center sm:py-10">
          {[
            { k: "4.8★", v: "7K+ ulasan" },
            { k: "200+", v: "varian kue" },
            { k: "Sejak 2019", v: "dipercaya pelanggan" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-serif text-2xl text-gold sm:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs text-cream/70 sm:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Tentang Kami
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl sm:text-4xl">
            Cita rasa Nusantara, dibuat dengan sepenuh hati
          </h2>
        </div>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            <strong className="text-foreground">Maharasa by Alfa 99</strong> berdiri sejak{" "}
            <strong className="text-foreground">23 Maret 2019</strong>, bergerak di bidang food &
            beverage dengan fokus pada makanan tradisional Nusantara — mulai dari aneka kue
            nusantara hingga hidangan berat. Pada 2024, brand kami resmi dipatenkan menjadi{" "}
            <em>Maharasa by Alfa 99</em> sebagai komitmen menghadirkan kualitas terbaik di setiap
            produk.
          </p>
          <p>
            Dengan lebih dari <strong className="text-foreground">200 varian</strong> dan rating{" "}
            <strong className="text-foreground">4.8 dari ribuan pelanggan</strong>, kami melayani
            kebutuhan harian hingga acara spesial — baik pelanggan personal maupun kebutuhan event
            dan korporat. <em className="text-primary">Delicious cake & excellent taste.</em>
          </p>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="bg-white/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Layanan Kami
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Untuk setiap momen spesial</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU UNGGULAN */}
      <section id="menu" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Menu Unggulan
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Best seller favorit pelanggan</h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Pilihan kue paling dicari, dibuat fresh setiap pagi.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {menu.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-2 p-4 sm:p-5">
                <h3 className="font-serif text-base sm:text-lg">{m.name}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:text-sm">
                  {m.price}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={WA_LINK}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pesan Sekarang
          </a>
        </div>
      </section>

      {/* CATALOG CTA */}
      <section className="px-5 pb-16 sm:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-espresso px-6 py-12 text-cream shadow-xl sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Katalog Lengkap
              </span>
              <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
                Lihat 200+ Pilihan Kue
              </h2>
              <p className="mt-3 text-cream/70">Katalog lengkap dalam PDF — gratis diunduh.</p>
            </div>
            <a
              href={CATALOG_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-gold-foreground shadow-lg transition hover:-translate-y-0.5"
            >
              <BookOpen className="h-5 w-5" /> Buka Katalog
            </a>
          </div>
        </div>
      </section>

      {/* CARA PESAN */}
      <section id="pesan" className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Cara Pesan
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Pesan Sekarang Lewat</h2>
          <p className="mt-3 text-muted-foreground">
            Pilih channel favoritmu — kami siap melayani.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {orderChannels.map(({ name, Icon, href, color }) => (
            <a
              key={name}
              href={href}
              className={`group flex flex-col items-center justify-center gap-3 rounded-2xl ${color} px-4 py-8 font-semibold shadow-md transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <Icon className="h-10 w-10 transition group-hover:scale-110" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-espresso text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-cream">Maharasa by Alfa 99</h3>
            <p className="mt-2 text-sm text-gold">Kue Tradisional, Fresh Everyday</p>
            <p className="mt-4 text-sm text-cream/70">
              Delicious cake & excellent taste — sejak 2019.
            </p>
          </div>
          <div className="space-y-3 text-sm text-cream/80">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>Tersedia di pasar-pasar besar di kota Anda</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-gold" />
              <span>Buka 06.00 WIB</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-cream">Ikuti Kami</div>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition hover:bg-gold hover:text-espresso"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={WA_LINK}
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition hover:bg-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-cream/50 sm:flex-row">
            <div>© {new Date().getFullYear()} Maharasa by Alfa 99. All rights reserved.</div>
            <div>maharasa.co</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        aria-label="Pesan via WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl shadow-whatsapp/40 transition hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </main>
  );
}

// Suppress unused import warning if any icons reserved for future
void CalendarDays;
