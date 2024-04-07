import { links, social } from "@/data/data";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white flex flex-col lg:flex-row  items-center justify-between text-center  border-t-4 w-full border-green-400 p-[5vh]">
      <div className="flex justify-between items-center pb-5 lg:pb-0 w-full lg:w-[30vw]">
        {social.map((social) => {
          return (
            <Link href={social.link}>
              <Image
                src={social.icone}
                alt={social.name}
                width={75}
                height={75}
                className="text-white bg-green-400 rounded-full p-5 hover:bg-green-500"
              />
            </Link>
          );
        })}
      </div>
      <div className="w-[50vw]">
        <ul className="flex flex-col lg:flex-row items-center justify-evenly w-full">
          {links.map((link) => {
            return (
              <li key={link.name} className="p-3">
                <Link className="text-bold text-2xl" href={`#${link.link}`}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/admin" className="text-bold text-2xl">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
