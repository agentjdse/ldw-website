import Image from "next/image";
import Navbar from "@/components/navbar";
import ButtonCTA from "@/components/btnCTA";
import ButtonCTA2 from "@/components/btnCTA2"

export default function Home() {
  return (
    <>
      <main className="relative w-full h-screen">
        <Image 
          src="/img/bg1.png" 
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="relative z-20 w-full pt-4">
          <Navbar />
          <div className="container w-3/4 flex gap-8 m-auto mt-24">
            <div className="flex-1">
              <h1 className="inline-block text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-red-50">
                Créons ensemble le site web qui propulsera votre activité
              </h1>
              <p className="text-xl text-white py-3">
                Transformez votre présence en ligne avec un site web sur mesure, moderne et performant. Nous concevons des solutions digitales qui captivent vos visiteurs et convertissent vos prospects en clients fidèles.
              </p>
              <div className="py-2">
                <ButtonCTA text="Démarrer mon projet"/>
              </div>
            </div>
            <div className="relative w-1/2 h-96">
              <Image
                src="/img/mcbook.png"
                alt="mcbook"
                fill 
                className="object-contain"
                priority             
              />
            </div>
          </div>
          
          <div className="separator bg-white mt-20 w-full py-12">
            <div className="py-10 m-auto w-1/2 flex flex-col items-center gap-4 text-center">
              <h1 className="text-5xl text-black underline decoration-pink-300">
                Notre expertise à votre service
              </h1>
              <p className="text-xl">
                Nous créons des expériences digitales qui font la différence. Du design élégant aux fonctionnalités innovantes, chaque détail est pensé pour valoriser votre marque et engager votre audience.
              </p>
              <div className="mt-2">
                <ButtonCTA text="Découvrir nos solutions"/>
              </div>
            </div>
            
            <div className="border-4 border-rose-200 rounded-lg py-8 px-6 mt-10 mx-auto w-full max-w-screen-lg flex ">
              <div className="flex">
                <div className="px-6 py-8 relative w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center gap-4">
                      <Image
                        src="/img/latoile.png"
                        alt="vitrine"
                        width={60}
                        height={60}
                        className="object-contain "
                        priority
                      />
                      Sites Vitrines
                    </h1>
                  
                  <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed relative">
                    Offrez à votre entreprise la vitrine digitale qu'elle mérite. Nos sites vitrines allient esthétique contemporaine et performance technique pour mettre en valeur votre activité et séduire vos clients dès la première visite.
                  </p>
                </div>
                <div className="py-25 px-10 ">
                  <ul className="list-decimal list-inside space-y-4">
                    <li className="text-2xl flex gap-4">Design Responsive
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                    <li className="text-2xl flex gap-4">Interface Moderne
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                    <li className="text-2xl flex gap-4">SEO Optimisé
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-4 border-purple-200 rounded-lg py-8 px-6 mt-10 mx-auto w-full max-w-screen-lg flex ">
              <div className="flex">
                <div className="px-6 py-8 relative w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center gap-4">
                      <Image
                        src="/img/e-commerce.png"
                        alt="e-commerce"
                        width={60}
                        height={60}
                        className="object-contain mix-blend-multiply"
                        priority
                      />
                      E-commerce
                    </h1>
                  
                  <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed relative">
                    Développez vos ventes en ligne avec une boutique performante et sécurisée. Nous créons des expériences d'achat fluides qui transforment vos visiteurs en clients et fidélisent votre clientèle.
                  </p>
                </div>
                <div className="py-25 px-10 ">
                  <ul className="list-decimal list-inside space-y-4">
                    <li className="text-2xl flex gap-4">Paiement Sécurisé
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                    <li className="text-2xl flex gap-4">Gestion Stock
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                    <li className="text-2xl flex gap-4">Analytics Avancé
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-4 border-blue-200 rounded-lg py-8 px-6 mt-10 mx-auto w-full max-w-screen-lg flex mb-10">
              <div className="flex">
                <div className="px-6 py-8 relative w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center gap-4">
                      <Image
                        src="/img/support-informatique.png"
                        alt="maintenance et hébergement"
                        width={60}
                        height={60}
                        className="object-contain mix-blend-multiply"
                        priority
                      />
                      Maintenance 
                    </h1>
                  
                  <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed relative">
                    Profitez d'un site web toujours performant et sécurisé. Nous assurons l'hébergement, les mises à jour de sécurité et la maintenance technique pour que vous puissiez vous concentrer sur votre activité en toute sérénité.
                  </p>
                </div>
                <div className="py-25 px-10 ">
                  <ul className="list-decimal list-inside space-y-4">
                    <li className="text-2xl flex gap-4">Hébergement Fiable
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                    <li className="text-2xl flex gap-4">Mises à Jour
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                    <li className="text-2xl flex gap-4">Support Technique
                    <Image
                    src="/img/check.png"
                    alt="check"
                    width={25}
                    height={25}
                    /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
            <Image
            src="/img/bg2.png"
            alt=""
            fill
            className="object-contain w-full h-200"
            priority
            />

          </div>
          </div>

          </div>
      </main>
    </>
  );
}