export default function Missiongrid () {
  return (
    <div className="overflow-hidden bg-white pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl  rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm">Our Mission</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
    Our mission is to provide each resident with a warm and comfortable home where everyone can live meaningful, active,
and enjoyable lives encouraged by compassionate caregivers offering 24 hour support.
Recognizing the challenges of aging, we are dedicated to encouraging a fulfilling lifestyle and promoting independence.
            </p>
          
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="/flag.bmp"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover object-top"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="/missiongrid2.jpeg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover object-top	"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="/missiongrid3.jpeg"
                  alt=""
                  className="aspect-[6/5] w-[27rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover object-top	"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="/missiongrid4.jpeg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover object-top	"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
