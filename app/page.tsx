import Image from "next/image";
import Navbar from "@/components/navbar";
import ButtonCTA from "@/components/btnCTA";
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
          <div className="container h-100 w-500 flex gap-0 m-auto mt-24">
            <div className="flex-1 w-3/4 ">
              <h1 className=" inline-clocktext-white text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-purple-100 to red-200">Créons votre site web moderne et professionnel</h1>
              <p className="text-xl text-white py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur beatae sapiente inventore eveniet, quasi velit fugit ullam fuga itaque, consequuntur alias? Nulla voluptatum nostrum minima enim, veritatis vero nisi!</p>
              <div className="py-2">
                <ButtonCTA text="C'est parti !"/>
              </div>
            </div>
            <div className="relative w-2/4 h-full py-10 ">
              <div className="relative  w-full h-full">
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
      </main>
    </>
  );
}
