import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Do we offer short stay or respite services?",
    answer:
      "Yes, based on available rooms at the time services are requested.",
  }, {
    question: "Are the rooms private?",
    answer:
      "Yes, each of our twelve resident rooms are spacious and private and can be decorated based on the resident’s style.",
  }, {
    question: "Is there a bathroom inside each room?",
    answer:
      "Yes. Each bathroom offers a sink and vanity area as well as a toilet equipped with safety grab bars for support and an easily accessible pull cord alert system.",
  }, {
    question: "Can I continue seeing my own doctor?",
    answer:
      "It is every resident’s right to continue seeing his / her own doctor if they so choose. Usually a resident will utilize one of the many quality physicians in the near by surrounding area as a matter of convenience. If at any time any of our residents wish to switch doctors for whatever reason our staff will gladly assist in locating and setting up all appointments. Pinecrest utilizes a Podiatrist who can treat resident foot care on site.",
  },{
    question: "Will my loved one have to move if their health condition changes?",
    answer:
      "Not necessarily. Although no one can predict what happens with their health but we do strive to continue to provide top quality support and services to each resident here at Pinecrest even in the event of a health status change. Our staff will stay in contact with families, and legal representatives along the way so as to determine the most appropriate care options available.",
  },
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
