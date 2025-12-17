interface ButtonCTA2Props {
    text: string;
  }
  
  export default function ButtonCTA2({ text }: ButtonCTA2Props) {
    return (
      <button className="cursor-pointer bg-[#E687D8] px-8 py-4 text-center rounded-full font-semibold border-3 border-red-100 hover:border-[#D8D3DA] text-white focus:bg-blue-300">
        {text}
      </button>
    )
  }