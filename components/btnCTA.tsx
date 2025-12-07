interface ButtonCTAProps {
    text: string;
  }
  
  export default function ButtonCTA({ text }: ButtonCTAProps) {
    return (
      <button className="cursor-pointer bg-white rounded-full text-gray-800 py-3 px-8 border-4 border-[#E687D8] hover:bg-[#E687D8] hover:text-white hover:border-[#E687D8] transition-all duration-300 font-semibold">
        {text}
      </button>
    )
  }