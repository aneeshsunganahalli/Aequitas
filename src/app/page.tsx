import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <section className="bg-linear-to-r from-[#6A2BBF] to-[#9B6DD1] py-16 md:py-24 px-4 md:px-8 text-center shadow-lg">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl md:text-[3.5rem] font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            What is Aequitas?
          </h1>
          <p className="text-lg md:text-2xl font-normal text-[#E5DFF5] tracking-wide">
            The Ancient Roman Concept of Justice and Fairness
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto py-8 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20 bg-white p-6 md:p-12 rounded-2xl shadow-lg transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-[#6A2BBF] mb-2 tracking-tight">
              The Meaning of Aequitas
            </h2>
            <p className="text-base md:text-xl leading-relaxed text-[#1E1E1E] font-medium p-4 md:p-6 bg-[#E5DFF5] rounded-xl border-l-4 border-[#6A2BBF]">
              <span className="text-[#6A2BBF] font-bold italic">Aequitas</span> (genitive aequitatis) is the Latin concept of justice, conformity, symmetry, or fairness. 
              It is the origin of the English word <span className="text-[#6A2BBF] font-bold italic">equity</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#1E1E1E] opacity-90">
              In ancient Rome, it could refer to either the legal concept of equity, or fairness between individuals.
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
            <Image
              src="/post1.png"
              alt="Aequitas - Roman concept of justice"
              width={500}
              height={400}
              className="w-full h-auto object-cover block rounded-xl"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center bg-white p-6 md:p-12 rounded-2xl shadow-lg transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl">
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 order-2 lg:order-1">
            <Image
              src="/post2.png"
              alt="Representation of fairness and equity"
              width={500}
              height={400}
              className="w-full h-auto object-cover block rounded-xl"
            />
          </div>
          
          <div className="flex flex-col gap-4 md:gap-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#6A2BBF] mb-2 tracking-tight">
              Justice and Symmetry
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#1E1E1E] opacity-90">
              The concept of Aequitas represents more than just legal justice—it embodies the fundamental 
              principles of balance, proportion, and moral fairness that were central to Roman philosophy 
              and governance.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#1E1E1E] opacity-90">
              Through this concept, we try to understand how the concept persists in the current times
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
