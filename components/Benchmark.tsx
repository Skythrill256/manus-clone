import Image from "next/image"
import Link from "next/link"

export default function BenchmarksSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">Benchmarks</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed text-gray-700">
            <Link href="#" className="font-medium">
              GAIA
            </Link>{" "}
            is a benchmark for evaluating General AI Assistants on solving real-world problems. Manus has achieved new
            state-of-the-art (SOTA) performance across all three difficulty levels.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">GAIA Benchmark</h3>

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-black"></div>
            <span className="text-base">manus.ai (pass@1)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-gray-400"></div>
            <span className="text-base">OpenAI/Deep Research (pass@1)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-gray-300"></div>
            <span className="text-base">Previous SOTA</span>
          </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[450px]">
          <Image
            src="https://files.manuscdn.com/webapp/_next/static/media/gaiaBenchmark.cf063638.svg"
            alt="GAIA Benchmark comparison chart showing manus.ai outperforming other systems"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="mt-8 text-sm text-gray-500 text-center space-y-2">
          <p>
            * Manus was evaluated in standard mode using the same configuration as its production version for
            reproducibility.
          </p>
          <p>
            * Comparative data from OpenAI Deep Research and other systems were sourced from OpenAI's{" "}
            <Link href="#" className="underline">
              release blog
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

