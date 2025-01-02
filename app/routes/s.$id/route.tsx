import { type LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export function clientLoader({ params }: LoaderFunctionArgs) {
  const { id } = params
  return { id }
}

export default function RespondentDetail() {
  const { id } = useLoaderData<typeof clientLoader>()
  console.log({ id })

  return (
    <div className="absolute h-full w-full">
      <div className="relative h-full flex flex-col">
        <div className="flex-1 basis-0 grow shrink">
          <div className="h-full overflow-hidden">
            <div className="h-full w-full overflow-x-hidden overflow-y-auto">
              <div className="w-full min-h-full flex flex-col justify-center items-center">
                <div className="px-10 text-start">
                  <div className="max-w-3xl mx-auto w-full mt-8 mb-12">
                    <div className="cursor-default">
                      <p className="text-2xl leading-8">
                        Are there specific compliance requirements or regulations
                        influencing enterprises to prefer native XDR solutions?*
                      </p>
                    </div>
                    <div className="text-xl leading-7 text-black/70 mt-2">
                      <p>
                        The company’s revenue is approximately $100-120 million, with a
                        constant 7-10% YoY and an EBITDA margin of 10-12%.
                      </p>
                    </div>
                    <div className="mt-8">
                      <input
                        type="text"
                        maxLength={10}
                        placeholder="Type your answer here..."
                        className="w-full border-none outline-none text-[#0142AC] pb-2 text-3xl bg-transparent placeholder:text-[#0142AC]/30 transition-shadow duration-100 ease-out shadow-[0_1px_rgba(1,66,172,0.3)] focus:shadow-[0_2px_rgba(1,66,172,1)]"
                      />
                    </div>
                    <div
                      className="mt-4 flex items-center gap-3
          max-[600px]:fixed max-[600px]:z-10 max-[600px]:left-0 max-[600px]:bottom-0 max-[600px]:w-full max-[600px]:px-4">
                      <button
                        className="font-bold cursor-pointer bg-[#0142AC] text-white outline-none shadow-[0_3px_12px_0_rgba(0,0,0,0.1)] px-[14px] rounded h-10 text-xl transition-colors duration-100 hover:bg-[#275EB8]
            max-[600px]:w-full">
                        OK
                      </button>
                      <p className="text-xs leading-4 hidden lg:block">
                        press <strong className="tracking-[0.2px]">Enter ↵</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 