import { useState } from "react";

export default function Servicesgrid() {
  // Define the services data
  const services = [
    {
      title: "Meals",
      link: "/mediation",
      className: "griditem",
      description:
        "Three nutritional home cooked meals and snacks daily, can be tailored and customized to meet resident needs.",
      img: "/meals.jpeg",
    },
    {
      title: "Housekeeping",
      link: "/organizationalculture",
      className: "griditem miditem",
      description: "Bed and bath linens provided and laundered regularly. Private half bath in each room. Pull cord alert systems in each suite by bed and in the bathroom for added security.",
      img: "/bedroom.jpeg",
    },
    {
      title: "Grooming",
      link: "/arbitration",
      className: "griditem",
      description: "On site beautician and barber services.",
      img: "/missiongrid2.jpeg",
    },
    {
      title: "Nursing Services",
      link: "/arbitration",
      className: "griditem",
      description:
        "Our staff is here 24/7. Assistance with showering and bathing, dressing, grooming, and other personal care needs provided as needed",
      img: "/nursing.jpeg",
    },
    {
      title: "Activities",
      link: "/arbitration",
      className: "griditem",
      description:
        "With social activities including pet therapy, comfortable visitng areas for friends and family, and visiting entertainment, there is something for every resident here at Pinecrest of Lake Geneva",
      img: "/activities.jpeg",
    },
    {
      title: "Spiritual Services",
      link: "/arbitration",
      className: "griditem",
      img: "/spiritual.jpeg",
           description:
        "Visiting clergy and spiritual services are available to all residents.",
    },
  ];

  const [flipStates, setFlipStates] = useState(
    new Array(services.length).fill(false)
  );
  const handleFlip = (index) => {
    const newFlipStates = [...flipStates];
    newFlipStates[index] = !newFlipStates[index];
    setFlipStates(newFlipStates);
  };
  return (
    <div>
      <div className="gridwrapper front ">
        {services.map((service, index) => (
          <div
            onClick={() => handleFlip(index)}
            className={`${service.className} ${
              flipStates[index] ? "flip" : ""
            }`}
            key={service.title}
            style={{
              backgroundImage: `url(${
                service.img || "default_image_path_here.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="gridhead">{service.title}</h2>

            <div className="back" onClick={() => handleFlip(index)}>
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
