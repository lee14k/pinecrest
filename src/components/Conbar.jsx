const facebook = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/pages/Pinecrest-of-Lake-Geneva/104751166259267",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Conbar({ phone, address }) {
  return (
    <div className="flex my-10 mx-0 items-center justify-evenly conbar">
      <div className="flex flex-col mx-2">
        <div> {phone}</div>
        <div> {address}</div>
      </div>
      <a href="/">
        <img className="conlog" src="./pinecrestlogo.png" />
      </a>
      <div className="mt-5 mx-20">
        {facebook.social.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-16 w-16" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
