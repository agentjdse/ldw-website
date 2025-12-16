interface ButtonCTA2Props {
    text: string;
  }
  
  export default function ButtonCTA2({ text }: ButtonCTA2Props) {
    return (
      <button className="cursor-pointer bg-[#E687D8] px-8 py-4 text-center rounded-full font-semibold border-3 border-red-100 hover:shadow-[0px_0px_10px_5px_#f5c1ec] hover:border-red-300 text-white">
        {text}
      </button>
    )
  }