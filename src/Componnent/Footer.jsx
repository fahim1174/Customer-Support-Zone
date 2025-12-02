import { Facebook, Linkedin, MailPlus, Plane } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="w-11/12 mx-auto p-10 grid grid-cols-1 space-y-8 lg:grid-cols-5">
        <div>
          <h1 className="text-white font-semibold text-lg">CS — Ticket System</h1>
          <p className="text-gray-400 text-sm mt-2"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <h1 className="text-white font-semibold text-lg">Company</h1>
          <p className="text-gray-400  text-sm mt-2">About Us</p>
          <p className="text-gray-400  text-sm mt-2">Our Mission</p>
          <p className="text-gray-400  text-sm mt-2">Contact Saled</p>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold">Services</h1>
          <p className="text-gray-400 text-sm mt-2">Products & Services</p>
          <p className="text-gray-400  text-sm mt-2">Customer Stories</p>
          <p className="text-gray-400  text-sm mt-2">Download Apps</p>
        </div>
       
        <div>
          <h1 className="text-white font-semibold text-lg">Information</h1>
          <p className="text-gray-400  text-sm mt-2">Privacy Policy</p>
          <p className="text-gray-400  text-sm mt-2">Terms & COnditions</p>
          <p className="text-gray-400  text-sm mt-2">Join Us</p>
        </div>

        <div>
          <h1 className="text-white font-semibold text-lg">Social Links</h1>
          <p className="text-gray-400 text-sm mt-2 flex"><span className="mr-2"><Plane /></span>@CS — Ticket System</p>
          <p className="text-gray-400 text-sm mt-2 flex"><span className=" mr-2"><Linkedin /></span>@CS — Ticket System</p>
          <p className="text-gray-400 text-sm mt-2 flex"><span className=" mr-2"><Facebook /></span>@CS — Ticket System</p>
          <p className="text-gray-400 text-sm mt-2 flex"><span className="mr-2"><MailPlus /></span>@CS-- gmail.com</p>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
