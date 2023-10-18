import { useState } from "react";

export default function Servicesgrid() {
  // Define the services data
  const services = [
    {
      title: "Dietary",
      link: "/mediation",
      className: "griditem",
      description:
        "Three nutritional home cooked meals and snacks daily, can be tailored and customized to meet resident needs.",
      img: "/meals.jpeg",
    },
    {
      title: "Comfort",
      link: "/organizationalculture",
      className: "griditem miditem",
      description: "Spacious private rooms include a walk-in closet and private half bath, with telephone jack and cable access. A bed, nightstand, and chest of drawers are provided.  (If you prefer, you may bring your own furniture.) Residents are encouraged to decorate room with personal items.",
      img: "/comfort.jpg",
    },
    {
      title: "Health Monitoring",
      link: "/arbitration",
      className: "griditem",
      description: "Weekly vitals as needed, monthly health assessments, and medication monitoring and administration .",
      img: "/missiongrid2.jpeg",
    },
    {
      title: "Personal Care",
      link: "/arbitration",
      className: "griditem",
      description:
        "Our staff is here 24/7. Assistance with showering and bathing, dressing, grooming, and other personal care needs provided as needed. Individualized service plans developed for each resident. Beautician and barber services available.",
      img: "/nursing.jpeg",
    },
    {
      title: "Socialization",
      link: "/arbitration",
      className: "griditem",
      description:
        "With social activities including pet therapy, gardening, outdoor BBQs, visiting entertainment, art projects, games and more, there is something for every resident at Pinecrest of Lake Geneva!",
      img: "/missiongrid.jpeg",
    },
    {
      title: "Housekeeping",
      link: "/arbitration",
      className: "griditem",
      img: "/housekeeping.jpg",
           description:
        "Bath and bed linens are provided, as well as housekeeping and laundry services.",
    },
      {
      title: "Security",
      link: "/arbitration",
      className: "griditem",
      img: "/security.jpg",
           description:
        "Pull cord alert systems in each suite by bed and in the bathroom for added security.",
    },
      {
      title: "Convenience",
      link: "/arbitration",
      className: "griditem",
      img: "/convenience.jpg",
           description:
        "Wheelchair accessible transporation services can be arranged",
    },
      {
      title: "Spiritual Services",
      link: "/arbitration",
      className: "griditem",
      img: "/spiritual.jpg",
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
              backgroundSize: "60% 100%",
              backgroundPosition: "center",
              backgroundRepeat:"no-repeat"
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
