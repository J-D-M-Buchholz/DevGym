import React from "react"
import Link from "next/link"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="dark:bg-slate-900 bg-gray-200">
      <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <a
              className="flex-none text-xl font-semibold dark:text-white text-black"
              href="#"
              aria-label="Brand"
            >
              DevGym
            </a>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold dark:text-gray-100 text-black">
              Product
            </h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 dark:text-gray-400 text-gray-500 hover:text-gray-200"
                  href="#"
                >
                  Pricing
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 dark:text-gray-400 text-gray-500 hover:text-gray-200"
                  href="#"
                >
                  Courses
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 dark:text-gray-400 text-gray-500 hover:text-gray-200"
                  href="#"
                >
                  Docs
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold dark:text-gray-100 text-black">
              Company
            </h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 dark:text-gray-400 text-gray-500 hover:text-gray-200"
                  href="#"
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 dark:text-gray-400 text-gray-500 hover:text-gray-200"
                  href="#"
                >
                  Blog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 dark:text-gray-400 text-gray-500 hover:text-gray-200"
                  href="#"
                >
                  Careers
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 dark:text-gray-400 text-gray-500 hover:text-gray-200"
                  href="#"
                >
                  Customers
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="font-semibold dark:text-gray-100 text-black">
              Stay up to date
            </h4>

            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 rounded-md">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 dark:text-gray-400 text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
              <p className="mt-3 text-sm dark:text-gray-400 text-gray-500">
                New Updates or big discounts. Never spam.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm dark:text-gray-400 text-gray-500">
              © 2023 DevGym. All rights reserved.
            </p>
          </div>

          <div>
            <Link
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center dark:text-gray-400 text-gray-500 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
              href="#"
            >
              <AiOutlineTwitter />
            </Link>
            <Link
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center dark:text-gray-400 text-gray-500 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
              href="#"
            >
              <AiOutlineGithub />
            </Link>
            <Link
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center dark:text-gray-400 text-gray-500 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
              href="#"
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
// =======
// import { footerLinks } from "./content/content";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import "./footer.css";

// type ColumnProps = {
//   title: string;
//   links: Array<string>;
// };

// const FooterColumn = ({ title, links }: ColumnProps) => {
//   return (
//     <div className="footer_column">
//       <h4 className="font-semibold">{title}</h4>
//       <ul className="flex flex-col gap-2 font-normal">
//         {links.map((link) => (
//           <Link href="/" key={link}>
//             {link}
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="flexStart footer">
//       <div className="flex flex-col gap-12 w-full">
//         <div className="flex items-start flex-col">
//           <Image src="/Logo.svg" width={60} height={30} alt="DevGym" />
//           <p className="text-start text-sm font-normal mt-5 max-w-xs">
//             DevGym is for everyone, a place to start your webdevelopment
//             education.
//           </p>
//         </div>
//         <div className="flex flex-wrap gap-12">
//           <FooterColumn
//             title={footerLinks[0].title}
//             links={footerLinks[0].links}
//           />
//           <div className="flex-1 flex flex-col gap-4">
//             <FooterColumn
//               title={footerLinks[1].title}
//               links={footerLinks[1].links}
//             />
//             <FooterColumn
//               title={footerLinks[2].title}
//               links={footerLinks[2].links}
//             />
//           </div>

//           <FooterColumn
//             title={footerLinks[3].title}
//             links={footerLinks[3].links}
//           />

//           <FooterColumn
//             title={footerLinks[4].title}
//             links={footerLinks[4].links}
//           />
//         </div>
//       </div>
//       <div className="flexBetween footer_copyright">
//         <p>&copy;2023 DevGym - All Rights reserved</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// >>>>>>> bd8207f (Add Footer.tsx)
