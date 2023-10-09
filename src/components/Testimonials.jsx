const testimonials = [
  {
    body: 'The staff here cared for our mother far, far above and beyond the call of duty. They considered her to be family. I love these people.',
    author: {
      name: 'Jeff',

    },
  },
 {
    body: 'Thanks to the staff at Pinecrest for the compassionate care that was given to my father.',
    author: {
      name: 'Jim',
    
    },
  }
    ,
   {
    body: 'The caregivers are all very caring and dedicated in giving their all in making my dad feel safe and secure',
    author: {
      name: 'Current loved one',

    },
  },
   {
    body: 'Thank you for your tender loving care. Thanks for all your hard work and dedication. Thank you for the exceptional care you provided for my mom.',
    author: {
      name: 'Connie, Vicki and Mary',

    },
  },
  
 
]

export default function Testimonials() {
  return (
    <div className="bg-white py-18 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-emerald-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rounded-md bg-emerald-600 px-6 py-3 text-xl font-semibold text-white shadow-sm">
We love helping families          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 leading-6">
                  <blockquote className="text-gray-900 text-xl">
                    <p className="text-xl">{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
               
                    <div>
                      <div className="font-semibold text-gray-900 text-xl">{testimonial.author.name}</div>
                      
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
