import ContactCard from "@/components/ContactCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" font-[noto-serif] text-[var(--clr-secondary-400)] p-0  m-0 z-0 flex flex-col gap-15 pt-6  md:bg-[#aabec280] md:gap-0">
      <section
        id="heroSection"
        className="flex flex-col bg-[var(--clr-primary-400)] p-2 md:w-8/10 md:mx-auto md:pt-10"
      >
        <h1 className="text-[5.357rem] font-medium">Diana Lily</h1>
        <h2 className="text-2xl font-medium">
          Como gato de apartamento, vou dormir e existir
        </h2>
        <Button
          className="bg-[var(--clr-primary-400)] border-solid border-2 border-gray-500 p-10 m-5 self-center justify-self-center text-2xl uppercase"
          variant="secondary"
        >
          Fale Comigo
        </Button>
        <div className=" bg-hero-img w-full h-60 bg-no-repeat bg-cover lg:max-w-3xl mx-auto"></div>
      </section>
      <section
        id="about"
        className="flex flex-col bg-white p-2 md:w-8/10 md:mx-auto md:pt-10"
      >
        <h2 className="text-[3.5rem] font-medium ">Sobre</h2>
        <p className="leading-6 my-8">
          Neste espaço, adicione uma breve biografia falando da pessoa. Você
          pode falar sobre sua especialização ou sua experiência. Convença o
          leitor de que essa é a pessoa certa.
        </p>
        <div className=" bg-about-img w-full h-60 bg-no-repeat bg-cover lg:max-w-3xl mx-auto"></div>
      </section>
      <section
        id="services"
        className="flex flex-col bg-[var(--clr-primary-400)] p-2 md:w-8/10 md:mx-auto md:pt-10"
      >
        <h2 className="text-[3.5rem] font-medium ">Serviços</h2>
        <ServiceCard
          title="Contabilidade de Ração"
          content="Gerenciamento do estoque de ração"
        />
        <ServiceCard
          title="Conformidade Felina"
          content="Auditoria contínua dos padrões felinos do ambiente"
        />
        <ServiceCard
          title="Registro de Gato"
          content="Consultoria jurídica junto ao sindicato dos felídeos"
        />
      </section>
      <section
        id="testimonials"
        className="flex flex-col bg-[var(--clr-neutral)] p-2 md:w-8/10 md:mx-auto md:pt-10"
      >
        <h2 className="text-[3.5rem] font-medium ">Depoimentos</h2>
        <TestimonialCard
          title="Denise, humana Mãe"
          content="Diana é uma gata que dorme muito e vive derramando água do pote."
        />
        <TestimonialCard
          title="Lucas, melhor humano"
          content="Citação minha sobre a Diana: Gordola bunita!"
        />
        <TestimonialCard title="Maria, humana mais incrível" content="Feia." />
      </section>
      <section
        id="contact"
        className="flex flex-col bg-[var(--clr-primary-400)] p-2 md:w-8/10 md:mx-auto md:pt-10"
      >
        <h2 className="text-[3.5rem] font-medium ">Trabalhe Comigo!</h2>
        <ContactCard title="Telefone" content="(xx) xxxxx-xxxx" />
        <ContactCard title="e-mail" content="consultoriafelina@felideos.br" />
        <ContactCard title="linkedin" content="diana-designer" />
      </section>
    </main>
  );
}
