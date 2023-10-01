export default function Colorrow() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-emerald-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
          <circle cx={512} cy={512} r={512} fill="url(#green-to-white-gradient)" fillOpacity="0.7" />
<defs>
    <radialGradient id="green-to-white-gradient">
        <stop stopColor="#FFFFFF" /> 
        <stop offset={1} stopColor="#FFFFFF" /> 
    </radialGradient>
</defs>
</svg>

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
Quality assisted living.            <br />
            Schedule your visit.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-200">
            Located in Lake Geneva, Pinecrest offers a bright atmosphere where our caring staff provides service to 12 residents. Our small adult living facility offers high levels of personalized services.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/Contactus"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-emerald-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
Contact Us              </a>
              
            </div>
          </div>
          <div className="relative mt-16 h-80 ml-30  ">
            <img
              className="absolute left-0 top-0 w-[27rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 mr-10 ml-10"
              src="/homeone.jpeg"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
