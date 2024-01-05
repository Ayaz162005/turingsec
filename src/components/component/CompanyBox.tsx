export default function CompanyBox() {
  return (
    <div className="rounded-xl overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-300">
      <div className="bg-[#D4C5C5] dark:bg-zinc-700 h-[200px] flex justify-center">
        <img src="/assets/images/Vector.svg" alt="" width={100} />
      </div>
      <div className=" bg-[#D9D9D9] dark:bg-slate-900 py-4 px-4 rounded-b-xl">
        <h3 className="font-bold text-[18px] ">Hackers nickname</h3>
        <p className="text-[16px] font-light ">
          informa tion informationinformati oninform ationinformati oninfo
          rmationi nformat ionin formation information
        </p>
        <div className="mt-2 flex justify-between">
          <p className="text-[16px] font-light">154 points</p>
          <button>
            <img src="/assets/images/plus.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
