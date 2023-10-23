import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Do we offer short stay or respite services?",
    answer: "Yes, based on available rooms at the time services are requested.",
  },
  {
    question: "Are the rooms private?",
    answer:
      "Yes, each of our twelve resident rooms are spacious and include a large walk in closet and accessible pull cord alert system.  Each private room offered comes ready to decorate based on the resident’s individual taste and style. We can supply a twin sized bed, night stand, and dresser if needed. Residents are encouraged to hang pictures and personalize the room to help make it feel comfortable.",
  },
  {
    question: "Is there a bathroom inside each room?",
    answer:
      "Yes. Each bathroom offers a sink and vanity area as well as a toilet equipped with safety grab bars for support and an easily accessible pull cord alert system.",
  },
  {
    question: "Can I continue seeing my own doctor?",
    answer:
      "It is every resident’s right to continue seeing his / her own doctor if they so choose. Usually a resident will utilize one of the many quality physicians in the near by surrounding area as a matter of convenience. If at any time any of our residents wish to switch doctors for whatever reason our staff will gladly assist in locating and setting up all appointments.",
  },
  {
    question:
      "Will my loved one have to move if their health condition changes?",
    answer:
      "Not necessarily. Although no one can predict what happens with their health but we do strive to continue to provide top quality support and services to each resident here at Pinecrest even in the event of a health status change. Our staff will stay in contact with families, and legal representatives along the way so as to determine the most appropriate care options available.",
  },

  {
    question: "How much does it cost?",
    answer:
      "We look at a number of things when assessing an individual for placement at Pinecrest. The monthly rates set are inclusive of most services and amenities. Our management team will do their very best in working with you to establish a comprehensive package with reasonable rates to fit your budget.",
  },
  {
    question:
      "What happens if we can no longer afford to pay the monthly rate? Do you accept Medicaid / Medicare?",
    answer:
      "We understand that certain financial situations can and do arise. Prior to a resident’s admission to Pinecrest we make it a point to refer each family or legal representative to speak with an advisor at the Aging and Disability Resource Center of Walworth County. This is a good source for Seniors to receive information and assistance on the various long term care options available. Here at Pinecrest we do not accept straight Medicaid / Medicare as payment, however, at present we do participate in long term care funding programs.",
  },
  {
    question: "Do you provide transportation to and from various appointments?",
    answer:
      "Our staff can make arrangements for our residents to be transported to various appointments via an outside transport company to include a wheelchair accessible vehicle.",
  },

  {
    question: "Will my loved one lose their independence after moving in?",
    answer:
      "Pinecrest strives to provide an environment which will be the least restrictive but still stay compatible with the needs, care, and services established in the individualized service plan.",
  },
  {
    question:
      "How are the medications managed and administered ?",
    answer:
      "All medications must first be prescribed in writing by the respective resident’s physician. We then work with our contracted pharmacy to package medications and then deliver to us. Our CBRF certified staff will administer and monitor all medications based on the instruction specifications. All medications are kept under lock and key when not in use.",
  },

];

export default function FAQ() {
  return (
    <div id= "FAQ" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 navbar rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm">
              <a id="FAQ">
            Frequently asked questions
            </a>
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
