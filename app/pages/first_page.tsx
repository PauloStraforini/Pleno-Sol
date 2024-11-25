import { Phone } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import painel01 from "@/components/img/painel01.jpg"
import painel02 from "@/components/img/painel02.jpg"
import painel03 from "@/components/img/painel03.jpg"

export default function FirsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold tracking-tight">Pleno Sol</h1>
          <a
            href="tel:866-330-3260"
            className="flex items-center gap-2 text-white"
          >
            <Phone className="h-4 w-4" />
            Ligue: (15) 998327410
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold leading-tight">
                Voce está pronto
                <br />
                Para
                <br />
                O futuro?
              </h2>
              <p className="mt-4 text-lg">

              Monitore, maximize eficiência e receba alertas inteligentes. Simples, eficiente e sustentável. 🌞

              </p>
              <Button className="mt-8 bg-green-700 text-white hover:bg-green-600">
                Venha com a gente
              </Button>
            </div>
            <div className="hidden lg:block">
              <svg
                className="h-32 w-32 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                
              >
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM12 15a3 3 0 110-6 3 3 0 010 6z" />
                <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7.05 7.05L5.63 5.63M18.37 18.37l-1.42-1.42M7.05 16.95l-1.42 1.42M18.37 5.63l-1.42 1.42" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-700 py-12 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold">20M</div>
            <div className="mt-2">Aparelhos Instalados!</div>
          </div>
          <div>
            <div className="text-4xl font-bold">8 Estados</div>
            <div className="mt-2">Presente nos Estados Brasileiros </div>
          </div>
          <div>
            <div className="text-4xl font-bold">THE BEST !!! </div>
            <div className="mt-2">Melhor Compania de Energia Solar do Brasil</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            
SISTEMAS DE PAINÉIS SOLARES INSTALADOS POR ESPECIALISTAS
            <br />
            PARA EMPRESAS, FAZENDAS E RESIDÊNCIAS
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Instalações Residenciais de Energia Solar 🌞",
                image: painel01,
                description:
                  "Transforme sua casa com energia solar! Cuidamos do projeto, instalação e monitoramento, garantindo eficiência e economia. Aproveite os benefícios de energia limpa, redução de custos e incentivos financeiros. Um investimento inteligente para o futuro da sua casa.",
              },
              {
                title: "Instalações Comerciais de Energia Solar 🌞",
                image: painel02,
                description:
                  "Impulsione sua empresa com energia solar! Oferecemos soluções completas, desde o projeto até a instalação e monitoramento, para maximizar a eficiência e reduzir custos operacionais. Aproveite a energia limpa, incentivos fiscais e uma gestão sustentável. Um investimento que gera economia.",
              },
              {
                title: "nstalações de Energia Solar para Condomínios 🌞",
                image: painel03,
                description:
                  "Soluções solares completas para condomínios! Cuidamos do projeto, instalação e monitoramento, proporcionando economia significativa na conta de energia e sustentabilidade para todos. Aproveite os benefícios fiscais, reduza custos operacionais e valorize seu imóvel com energia limpa.",
              },
            ].map((service) => (
              <Card key={service.title}>
                <CardContent className="p-0 bg-green-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="mb-4 text-center text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-center text-white">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-700 py-16 text-white">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          {[
            {
              quote:
                "O PlenoSol transformou a forma como acompanho minha energia solar. Agora, consigo ver a produção diária e saber exatamente quando é hora de fazer manutenção.",
              author: "Christian ",
            },
            {
              quote:
                "Com o PlenoSol, conseguimos monitorar todos os nossos sistemas de energia solar em tempo real. Os relatórios mensais são essenciais para tomar decisões rápidas e melhorar a performance. É uma ferramenta indispensável para nosso negócio!",
              author: "Paulo (CTO - Scania)",
            },
            {
              quote:
                "Usar o PlenoSol foi um divisor de águas para nossa empresa. O sistema de alertas me permite agir rapidamente em qualquer necessidade de manutenção, e os dados de eficiência ajudaram a otimizar nossos gastos. Altamente recomendado!",
              author: "Andrade",
            }
          ].map((testimonial) => (
            <div key={testimonial.author} className="text-center">
              <p className="mb-4">{testimonial.quote}</p>
              <p className="font-bold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">Voce está pronto para futuro? </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            
          cuidamos do design, monitoramento, geração de relatórios, alertas de 
          manutenção e otimização do desempenho do seu sistema solar. Deixe o 
          trabalho pesado conosco e aproveite os benefícios de uma energia limpa 
          e eficiente!

          </p>
          <Button className="mt-8 bg-green-700 text-white hover:bg-green-600">
            Venha com a gente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-4 text-center text-sm text-zinc-400">
        <p>
          Copyright © PlenoSol.com. 

        </p>
      </footer>
    </div>
  )
}