import { Link } from "react-router-dom";

const Footer = () => {
  const resourcesLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/features", text: "Features" },
    { href: "/contact", text: "Contact Us" },
  ];

  const platformLinks = [{ href: "github.com/MinhAnh2610", text: "Github" }];

  return (
    <footer className="flex flex-col justify-center items-center mt-20 border-t py-10 border-neutral-700">
      <div className="grid gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4 text-center">Resources</h3>
          <ul className="space-y-2 text-center">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-neutral-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 text-center">Platform</h3>
          <ul className="space-y-2 text-center">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-neutral-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h1 className="text-medium font-semibold mt-4">© 2024 BeanJournal. All rights reserved.</h1>
    </footer>
  );
};

export default Footer;
