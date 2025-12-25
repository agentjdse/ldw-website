interface ButtonCTA2Props {
    text: string;
  }
  
  export default function ButtonCTA2({ text }: ButtonCTA2Props) {
    return (
      <button className="cursor-pointer bg-[#E687D8] px-8 py-4 text-center rounded-full font-semibold border-3 border-red-100 hover:border-[rgba(236,_72,_153,_0.5)] text-white focus:bg-blue-300 hover:shadow-[-1px_0px_15px_6px_rgba(236,_72,_153,_0.5)]">
        {text}
      </button>
    )
  }