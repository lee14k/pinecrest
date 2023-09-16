export default function Servicesgrid() {
  // Define the services data
  const services = [
    {
      title: 'Nursing & Medical Services',
      link: '/mediation',
      className: 'griditem',
      description:'Our nursing staff is available 24 hours a day, 7 days a week to provide care and assistance to our residents. Our nursing staff is trained to provide a wide range of services, including medication management, assistance with activities of daily living, and coordination of care with physicians and other healthcare providers.'
    },
    {
      title: 'Amenities',
      link: '/organizationalculture',
      className: 'griditem miditem',
      description:'Pinecrest offers a variety of amenities to our residents, including three home-cooked meals a day, snacks, laundry services, housekeeping services, and assistance with activities of daily living. We also offer a variety of social activities, including bingo, crafts, and outings to local restaurants and stores.'
    },
    {
      title: 'Staffing',
      link: '/arbitration',
      className: 'griditem',
      description:'Our staff is trained to provide a wide range of services, including medication management, assistance with activities of daily living, and coordination of care with physicians and other healthcare providers. Our staff is also trained to provide care to residents with dementia and other cognitive impairments.'
    }
  ];

  return (
    <div>
      <div className="gridwrapper">
        {services.map(service => (
          <div className={service.className} key={service.title}>
            <h2 className="gridhead">{service.title}</h2>
            <p>{service.description}</p>
              <button className="gridbutton">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
}
