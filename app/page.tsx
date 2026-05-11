"use client";

import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Menu,
  X,
  House,
  User,
  Briefcase,
  Star,
  Mail,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
const form = useRef<HTMLFormElement | null>(null);
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm(
  "service_m2ig2l4", 
  "template_nmv55fn", 
  form.current!,
  "h7uVoYPrJ8f9yTHtv" 
).then(
    () => {
      alert("Mensaje enviado correctamente");
    form.current?.reset();
    },
    (error) => {
  console.log("ERROR:", error);
  alert(error.text);
}
  );
};
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Copiado: " + text);
  } catch (err) {
    alert("Error al copiar");
  }
};
useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
    observer.disconnect();
  };
}, []);
  return (
    <main className="bg-[#050008] text-white overflow-hidden min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-35deg, #2b001f 0px, #340d82 120px, transparent 120px, transparent 240px)",
          }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/20 blur-[180px] rounded-full" />

        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff20_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-purple-900/30 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
<img
  src="/logo.png"
  alt="logo"
className="w-10 h-10 rounded-xl object-cover object-center shadow-[0_0_40px_rgba(168,85,247,0.6)]"
/>

            <h1 className="text-2xl font-extrabold tracking-wide">
              ByMist
            </h1>
          </div>

          {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-2 px-4 py-3 rounded-full border border-purple-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.2)]">

  {[
    {
      id: "inicio",
      label: "Inicio",
      icon: House,
      href: "#inicio",
    },
    {
      id: "sobre-mi",
      label: "Sobre Mí",
      icon: User,
      href: "#sobre-mi",
    },
    {
      id: "experiencia",
      label: "Experiencia",
      icon: Briefcase,
      href: "#experiencia",
    },
    {
      id: "reseñas",
      label: "Reseñas",
      icon: Star,
      href: "#reseñas",
    },
    {
      id: "contacto",
      label: "Contacto",
      icon: Mail,
      href: "#contacto",
    },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <a
        key={item.id}
        href={item.href}
        onClick={() => {
  setOpen(false);
  document.getElementById(item.id)?.scrollIntoView({
    behavior: "smooth",
  });
}}
        className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 font-medium border

        ${
          active === item.id
            ? "text-purple-200 border-purple-400 bg-purple-500/10 shadow-[0_0_25px_rgba(168,85,247,0.35)]"
            : "text-gray-300 border-transparent hover:text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/20"
        }
        `}
      >
        <Icon size={18} className="text-white" />
        {item.label}
      </a>
    );
  })}
</nav>

          {/* Mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black/70 backdrop-blur-xl border-t border-white/10">
            href="#inicio"
            href="#sobre-mi"
            href="#Trayectoria"
            href="#Reseñas"
            href="#Contacto"
          </div>
        )}
      </header>

      {/* Hero */}
<section
  id="inicio"
  className="relative min-h-screen flex items-center justify-center px-2 scroll-mt-32"
>
        <div className="max-w-1xl text-center pt-40">
          {/* Available */}
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-purple-500/40 bg-purple-900/20 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

            <span className="text-purple-100 text-xs md:text-sm">
              Disponible para nuevos proyectos
            </span>
          </div>

          {/* Small Text */}
          <p className="mt-8 tracking-[2px] text-gray-500 uppercase text-sm">
            Portafolio Profesional
          </p>

          {/* Title */}
          <h2 className="mt-4 text-4xl md:text-3xl text-gray-400 font-light tracking-[2px]">
            HOLA, SOY
          </h2>

          {/* Name */}
          <h1 className="mt-0 text-7xl md:text-[4rem] font-black uppercase tracking-wide text-white">
            MIST
          </h1>

          {/* Main Role */}
          <h2 className="mt-4 text-5xl md:text-[4rem] font-black uppercase leading-none tracking-wide bg-gradient-to-b from-purple-400 to-fuchsia-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
            STAFF MANAGER
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            Cuento con 1 año de experiencia en moderación y gestión de
            comunidades Minecraft. Ofreciendo liderazgo estratégico de 
            equipos, organización de staff y creación de entornos
            estables y profesionales.
          </p>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Staff Manager",
              "SS-Manager",
              "Media Manager",
              "Gestión de Equipos",
              "Moderación",
              "Developer Discord",
            ].map((tag, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full border backdrop-blur-xl text-base transition-all duration-300 ${
                  index < 3
                    ? "border-purple-500/40 bg-purple-500/10 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
                    : "border-white/10 bg-white/5 text-gray-400"
                }`}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
  onClick={() =>
    document
      .getElementById("experiencia")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-700 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.45)] text-base font-semibold flex items-center gap-3"
>
  Ver Trayectoria

  <ArrowRight className="group-hover:translate-x-1 transition" />
</button>
<button
  onClick={() =>
    document
      .getElementById("contacto")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="px-12 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 text-base font-semibold"
>
  Contactar
</button>
          </div>
        </div>
      </section>
{/* SOBRE MI */}
<section
  id="sobre-mi"
  className="relative py-32 px-6 overflow-hidden scroll-mt-32"
>
  {/* Ambient Glow */}
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/10 blur-[180px] rounded-full" />

  {/* Grid */}
  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-[6px] text-purple-400/70 text-xs md:text-sm mb-4">
        QUIÉN SOY
      </p>

      <h2 className="text-5xl md:text-7xl font-black uppercase bg-gradient-to-b from-purple-300 to-fuchsia-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
        SOBRE MÍ
      </h2>

      <div className="mt-6 w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
    </div>

    {/* Main Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.7fr] gap-8 items-start">
      {/* LEFT SIDE */}
      <div className="space-y-8">
        {/* About Card */}
        <div className="relative rounded-[32px] border border-purple-500/15 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.08)] hover:border-purple-500/30 transition-all duration-500">
          {/* Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />

          {/* Accent Line */}
          <div className="absolute left-0 top-10 h-40 w-[3px] bg-gradient-to-b from-purple-400 to-fuchsia-600 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.8)]" />

          <div className="relative z-10 space-y-8 text-gray-300 leading-relaxed text-lg">
            <p>
              Hola, soy <span className="font-bold text-white">ByMist</span>.
              Este portafolio fue creado con el objetivo de demostrar mis habilidades como
              <span className="font-bold text-purple-300"> Staff Manager</span>, especializado en gestión estratégica, coordinación de equipos y moderación profesional.
            </p>

            <p>
              Cuento con experiencia trabajando dentro de comunidades Minecraft y Discord, desarrollando sistemas internos, organización de staff y resolución eficiente de conflictos para mantener entornos estables y profesionales.
            </p>

            <p>
              Mi enfoque principal es crear estructuras sólidas, mejorar la comunicación entre equipos y optimizar el rendimiento interno de cada proyecto mediante liderazgo, disciplina y organización.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            "Gestión avanzada de staff",
            "Liderazgo estratégico",
            "Moderación profesional",
            "Resolución de conflictos",
            "Organización interna",
            "Comunicación efectiva",
            "Coordinación de equipos",
            "Desarrollo en Discord",
          ].map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/15 bg-white/[0.03] backdrop-blur-xl px-6 py-5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-500 hover:-translate-y-1 shadow-[0_0_35px_rgba(168,85,247,0.08)]"
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,1)]" />

                <p className="text-gray-200 font-medium">
                  {skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
        {[
          {
            number: "1+",
            label: "Año de experiencia",
          },
          {
            number: "100+",
            label: "Usuarios gestionados",
          },
          {
            number: "6+",
            label: "Proyectos completados",
          },
          {
            number: "100%",
            label: "Compromiso profesional",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[28px] border border-purple-500/15 bg-white/[0.03] backdrop-blur-2xl p-8 flex flex-col items-center justify-center text-center min-h-[190px] hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1 shadow-[0_0_45px_rgba(168,85,247,0.08)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-purple-500/10 to-fuchsia-500/10" />

            <div className="relative z-10">
              <h3 className="text-5xl font-black bg-gradient-to-b from-purple-300 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                {stat.number}
              </h3>

              <p className="mt-4 text-gray-400 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* EXPERIENCIA */}
<section
  id="experiencia"
  className="relative py-36 px-6 overflow-hidden min-h-screen"
>
  {/* Ambient Glow */}
  <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-700/10 blur-[220px] rounded-full" />

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-28">
      <p className="uppercase tracking-[6px] text-purple-400/70 text-xs md:text-sm mb-4">
        MI TRAYECTORIA PROFESIONAL
      </p>

      <h2 className="text-5xl md:text-7xl font-black uppercase bg-gradient-to-b from-purple-300 to-fuchsia-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
        EXPERIENCIA
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
        Mi trayectoria profesional en moderación, liderazgo y gestión de comunidades.
      </p>

      <div className="mt-6 w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
    </div>

    {/* Timeline */}
    <div className="relative">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 hidden md:block -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent shadow-[0_0_25px_rgba(168,85,247,0.7)] rounded-full" />

      <div className="space-y-20">
        {[
          {
            side: "left",
            server: "MineBoom",
            role: "Mod+ y SrMod en una Modalidad",
            users: "+200 usuarios",
            year: "2025",
            desc: "En este servidor comenzo todo mi trayecto, en este aprendi a moderar gracias a un operador que siempre nos puso atención. (Tqm Cilantro) .",
            tags: ["Moderación", "Atención al Usuario", "Interviewer"],
            logo: "/mineboom.png",
          },
          {
            side: "right",
            server: "KarmaMC",
            role: "Mod+",
            users: "+200 usuarios",
            year: "2025",
            desc: "En este servidor ingrese como Mod, dure 2 meses y por temas de estudios tuve que retirarme del servidor.",
            tags: ["Moderación", "Atención al Usuario", "Interviewer"],
            logo: "/karmamc.png",
          },
          {
            side: "left",
            server: "RayoMC",
            role: "Mod",
            users: "+100 usuarios",
            year: "2026",
            desc: "Coordinación de contenido, gestión de comunidad y administración de sistemas internos en Discord.",
            tags: ["Moderación", "Atención al Usuario", "ScreenShare"],
            logo: "/rayomc.png",
          },
          {
            side: "right",
            server: "ZentrixMC",
            role: "Manager & SS Manager",
            users: "+30 usuarios",
            year: "2026",
            desc: "Actualmente me encuentro moderando dentro de este Servidor.",
            tags: ["Gestión del Servidor", "Management", "ScreenShare"],
            logo: "/logo.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              item.side === "left"
                ? "md:justify-start"
                : "md:justify-end"
            } justify-center`}
          >
            {/* Dot */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,1)] border-4 border-[#050008] z-20" />

            {/* Card */}
            <div className="group relative w-full md:w-[45%] overflow-hidden rounded-[32px] border border-purple-500/15 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_50px_rgba(168,85,247,0.08)]">
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10" />

              {/* Top Glow */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.logo}
                      alt={item.server}
                      className="w-16 h-16 rounded-2xl object-cover border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                    />

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.server}
                      </h3>

                      <p className="text-purple-300 font-medium mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-200 text-sm font-semibold shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    {item.year}
                  </div>
                </div>

                {/* Users */}
                <div className="mt-6 inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm backdrop-blur-xl">
                  {item.users}
                </div>

                {/* Description */}
                <p className="mt-6 text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {item.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-200 text-sm backdrop-blur-xl"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* RESEÑAS */}
<section
  id="reseñas"
  className="relative py-36 px-6 overflow-hidden scroll-mt-32"
>
  {/* Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-700/10 blur-[220px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-24">
      <p className="uppercase tracking-[6px] text-purple-400/70 text-xs md:text-sm mb-4">
        LO QUE DICEN DE MÍ
      </p>

      <h2 className="text-5xl md:text-7xl font-black uppercase bg-gradient-to-b from-purple-300 to-fuchsia-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
        RESEÑAS
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
        Opiniones de proyectos y comunidades con las que he trabajado.
      </p>

      <div className="mt-6 w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
      {[
        {
          number: "3+",
          label: "Reseñas positivas",
        },
        {
          number: "3+",
          label: "Proyectos",
        },
        {
          number: "100%",
          label: "Compromiso",
        },
        {
          number: "1+",
          label: "Año experiencia",
        },
      ].map((stat, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-[28px] border border-purple-500/15 bg-white/[0.03] backdrop-blur-2xl p-8 text-center shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-500"
        >
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-b from-purple-500/10 to-fuchsia-500/10" />

          <div className="relative z-10">
            <h3 className="text-5xl font-black bg-gradient-to-b from-purple-300 to-fuchsia-600 bg-clip-text text-transparent">
              {stat.number}
            </h3>

            <p className="mt-4 text-gray-400">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Reviews Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {[
        {
          name: "uBlitzeh",
          role: "Manager",
          server: "MineBoom",
          image: "/ublizet.gif",
          review:
            "ByMist en el poco tiempo que lo tuve de staff en Mineboom, demostró un buen desempeño. Cumplía con su rol de moderador y nos echaba una mano con algunas tareas del Management como las entrevistas. Lo recomendaria mucho",
        },
        {
          name: "SH1NGEN",
          role: "Manager",
          server: "KarmaMC",
          image: "/shingen.gif",
          review:
            "Desde el primer momento demostró ser una persona carismática, responsable y siempre dispuesta a apoyar al equipo. Su compromiso, liderazgo y actitud positiva lo convierten en un staff con muchísimo potencial.",
        },
        {
          name: "Joacomj77",
          role: "Manager",
          server: "RayoMC",
          image: "/joaco.png",
          review:
            "Por modificar.",
        },
      ].map((review, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-[32px] border border-purple-500/15 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_50px_rgba(168,85,247,0.08)]"
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10" />

          <div className="relative z-10">
            {/* User */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                />

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {review.name}
                  </h3>

                  <p className="text-purple-300 text-sm">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-purple-400 text-lg">
                ★★★★★
              </div>
            </div>

            {/* Review */}
            <p className="mt-8 text-gray-300 leading-relaxed">
              “{review.review}”
            </p>

            {/* Server */}
            <div className="mt-8 inline-flex px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-200 text-sm backdrop-blur-xl">
              {review.server}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom */}
    <div className="mt-20 text-center">
      <p className="text-gray-400 text-lg">
        Gracias a todos los que han confiado en mí y en mi trabajo.
      </p>
    </div>
  </div>
</section>
{/* CONTACTO */}
<section
  id="contacto"
  className="relative py-36 px-6 overflow-hidden min-h-screen"
>
  {/* Ambient Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-700/10 blur-[220px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-24">
      <p className="uppercase tracking-[6px] text-purple-400/70 text-xs md:text-sm mb-4">
        TRABAJEMOS JUNTOS
      </p>

      <h2 className="text-5xl md:text-7xl font-black uppercase bg-gradient-to-b from-purple-300 to-fuchsia-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
        CONTACTO
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
        ¿Interesado en trabajar conmigo o formar parte de un proyecto?
        Estoy disponible para nuevas oportunidades y colaboraciones.
      </p>

      <div className="mt-6 w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
    </div>

    {/* Main Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
      {/* LEFT SIDE */}
      <div className="space-y-6">
        {/* Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-purple-500/15 bg-white/[0.03] backdrop-blur-2xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.08)]">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white">
              Información de contacto
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Puedes comunicarte conmigo mediante cualquiera de estas
              plataformas. Respondo lo más rápido posible.
            </p>

            <div className="mt-10 space-y-5">
{/* Discord */}
<div
  onClick={() => copyToClipboard("_mist.18")}
  className="group flex items-center gap-5 rounded-2xl border border-purple-500/15 bg-white/[0.03] px-5 py-5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-500 cursor-pointer"
>
  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <img
                    src="/discord.png"
                    alt="discord"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Discord
                  </p>

                  <h4 className="text-white font-semibold">
                    _mist.18
                  </h4>
                </div>
              </div>
{/* Gmail */}
<div
  onClick={() => copyToClipboard("byymistt18@gmail.com")}
  className="group flex items-center gap-5 rounded-2xl border border-purple-500/15 bg-white/[0.03] px-5 py-5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-500 cursor-pointer"
>
  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <img
                    src="/gmail.png"
                    alt="gmail"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Gmail
                  </p>

                  <h4 className="text-white font-semibold">
                    byymistt18@gmail.com
                  </h4>
                </div>
              </div>
{/* Gunz */}
<div className="group flex items-center gap-5 rounded-2xl border border-purple-500/15 bg-white/[0.03] px-5 py-5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-500">

  {/* Icono */}
  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] overflow-hidden">
    <img
      src="/gunz.png"
      alt="gunz"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Info */}
  <div>
    <p className="text-sm text-gray-500">
      GunZ
    </p>

    <h4 className="text-white font-semibold">
      GunZ: The Duel Community
    </h4>

    <p className="text-xs text-purple-300 mt-1">
      Staff / Community Manager
    </p>
  </div>
</div>
              {/* Status */}
              <div className="relative overflow-hidden rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-5 shadow-[0_0_25px_rgba(34,197,94,0.15)]">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                  <div>
                    <h4 className="text-green-300 font-semibold">
                      Disponible actualmente
                    </h4>

                    <p className="text-green-200/70 text-sm mt-1">
                      Abierto a nuevos proyectos y colaboraciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative overflow-hidden rounded-[32px] border border-purple-500/15 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-10 shadow-[0_0_60px_rgba(168,85,247,0.08)]">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 pointer-events-none" />

        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white">
            Envíame un mensaje
          </h3>

          <p className="mt-4 text-gray-400">
            Completa el formulario y me pondré en contacto contigo.
          </p>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="mt-10 space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-400 mb-3 block">
                Nombre
              </label>

              <input
  type="text"
  name="from_name"
  placeholder="Tu nombre"
  className="w-full rounded-2xl border border-purple-500/15 bg-white/[0.03] px-5 py-4 text-white"
/>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400 mb-3 block">
                Correo electrónico
              </label>

              <input
  type="email"
  name="from_email"
  placeholder="correo@gmail.com"
  className="w-full rounded-2xl border border-purple-500/15 bg-white/[0.03] px-5 py-4 text-white"
/>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400 mb-3 block">
                Mensaje
              </label>

              <textarea
  name="message"
  rows={6}
  placeholder="Escribe tu mensaje..."
  className="w-full rounded-2xl border border-purple-500/15 bg-white/[0.03] px-5 py-4 text-white"
/>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="group w-full rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-700 px-8 py-5 text-lg font-semibold shadow-[0_0_40px_rgba(168,85,247,0.45)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
            >
              Enviar mensaje

              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<footer className="relative border-t border-purple-500/10 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-center">
    <p className="text-gray-500 text-sm md:text-base tracking-wide">
      © 2026{" "}
      <span className="text-purple-400 font-semibold">
        Mist
      </span>{" "}
      — Portafolio Staff Manager
    </p>
  </div>

  {/* Glow */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-purple-700/10 blur-[100px] pointer-events-none" />
</footer>
    </main>
  );
}