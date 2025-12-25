  import Image from "next/image";
  import Navbar from "@/components/navbar";
  import ButtonCTA from "@/components/btnCTA";
  import ButtonCTA2 from "@/components/btnCTA2";
  import Footer from "@/components/footer";

  export default function Home() {
    return (
      <>
        <main className="relative w-full min-h-screen">

          <div className="relative w-full min-h-screen py-4">
            <Image 
              src="/img/bg1.png" 
              alt="Background"
              fill
              className="object-cover z-0"
              priority
            />
            
            <div className="relative z-20 w-full px-4 pt-4">
              <Navbar />
              

              <div className="w-full max-w-7xl mx-auto mt-12 md:mt-24">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

                  <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-red-50 leading-tight">
                      Créons ensemble le site web qui propulsera votre activité
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-white py-4 lg:py-6">
                      Transformez votre présence en ligne avec un site web sur mesure, moderne et performant. Nous concevons des solutions digitales qui captivent vos visiteurs et convertissent vos prospects en clients fidèles.
                    </p>
                    <div className="py-2">
                      <ButtonCTA text="Démarrer mon projet"/>
                    </div>
                  </div>
                  

                  <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-96">
                    <Image
                      src="/img/mcbook.png"
                      alt="mcbook"
                      fill 
                      className="object-contain"
                      priority             
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-white w-full ">

            <div className="py-6 lg:py-10 mx-auto w-full max-w-2xl px-4 flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black underline decoration-pink-300">
                Notre expertise à votre service
              </h1>
              <p className="text-base sm:text-lg lg:text-xl">
                Nous créons des expériences digitales qui font la différence. Du design élégant aux fonctionnalités innovantes, chaque détail est pensé pour valoriser votre marque et engager votre audience.
              </p>
              <div className="mt-2">
                <ButtonCTA2 text="Découvrir nos solutions"/>
              </div>
            </div>
            

            <div className="max-w-7xl mx-auto px-4 space-y-8 lg:space-y-10 mt-6 lg:mt-10">
              

              <div className="border-4 border-rose-200 rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <Image
                        src="/img/latoile.png"
                        alt="vitrine"
                        width={50}
                        height={50}
                        className="object-contain w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                        priority
                      />
                      Sites Vitrines
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Offrez à votre entreprise la vitrine digitale qu'elle mérite. Nos sites vitrines allient esthétique contemporaine et performance technique pour mettre en valeur votre activité et séduire vos clients dès la première visite.
                    </p>
                  </div>
                  
                  <div className="lg:min-w-[280px]">
                    <ul className="space-y-3 lg:space-y-4">
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>Design Responsive</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>Interface Moderne</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>SEO Optimisé</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-4 border-purple-200 rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <Image
                        src="/img/e-commerce.png"
                        alt="e-commerce"
                        width={50}
                        height={50}
                        className="object-contain mix-blend-multiply w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                        priority
                      />
                      E-commerce
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Développez vos ventes en ligne avec une boutique performante et sécurisée. Nous créons des expériences d'achat fluides qui transforment vos visiteurs en clients et fidélisent votre clientèle.
                    </p>
                  </div>
                  
                  <div className="lg:min-w-[280px]">
                    <ul className="space-y-3 lg:space-y-4">
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>Paiement Sécurisé</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>Gestion Stock</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>Analytics Avancé</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-4 border-blue-200 rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <Image
                        src="/img/support-informatique.png"
                        alt="maintenance et hébergement"
                        width={50}
                        height={50}
                        className="object-contain mix-blend-multiply w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                        priority
                      />
                      Maintenance
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Profitez d'un site web toujours performant et sécurisé. Nous assurons l'hébergement, les mises à jour de sécurité et la maintenance technique pour que vous puissiez vous concentrer sur votre activité en toute sérénité.
                    </p>
                  </div>
                  
                  <div className="lg:min-w-[280px]">
                    <ul className="space-y-3 lg:space-y-4">
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>Hébergement Fiable</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>Mises à Jour</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                      <li className="text-lg sm:text-xl lg:text-2xl flex items-center gap-3">
                        <span>Support Technique</span>
                        <Image
                          src="/img/check.png"
                          alt="check"
                          width={25}
                          height={25}
                          className="flex-shrink-0"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-48 sm:h-96 min-h-165 mt-12 lg:mt-20">
              <Image
                src="/img/bg2.png"
                alt=""
                fill
                className="object-cover z-0"
                priority
              />
              <div className="relative m-auto py-10 justify-center items-center mt-center">
                <div className="w-4/4 m-auto text-center h-34 lg:h-100">
                  <h1 className="text-7xl text-white tracking-widest font-extrabold underline decoration-6 underline-offset-10">
                    Exemples de nos créations
                  </h1>
                    <div className="flex py-15 justify-center relative h-full gap-20">
                    <div className=" w-120 h-64 mt-10  rounded-lg backdrop-blur-sm shadow-2xl ">
                    <Image
                    src="/img/Website1.png"
                    alt="Yelli1"
                    fill
                    className="object-cover rounded-xl"
                    priority
                    />
                    </div>
                    <div className="w-120 h-64 mt-35 backdrop-blur-sm shadow-2xl ">
                      <Image
                    src="/img/Website2.png"
                    alt="Yelli2"
                    fill
                    className="object-cover rounded-xl"
                    priority
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <Footer />
        </main>
      </>
    );
  }