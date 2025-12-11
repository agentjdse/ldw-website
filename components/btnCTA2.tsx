interface ButtonCTA2Props {
    text: string;
  }
  
  export default function ButtonCTA2({ text }: ButtonCTA2Props) {
    return (
      <button className="cursor-pointer px-5 py-1 rounded-lg border-2 border-[#7961D3] font-semibold">
        {text}
      </button>
    )
  }