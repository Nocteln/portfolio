import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Acceuil = () => {
  return (
    <>
      <div className=" flex justify-between p-10 bg-[#212528] rounded-xl items-center border-green-400 border-2 shadow-md shadow-green-400 max-w-[70vw]">
        <div className="text-white  max-w-[500px] p-5 text-center rounded-l-xl font-['pt'] font-bold">
          <h2 className="text-3xl pb-5 text-green-400">Eliott Mieze</h2>
          <p className="text-xl">
            Hey, je suis Eliott, un développeur{" "}
            <span className="underline decoration-green-400">passionné</span>.
            Je sait créer des{" "}
            <span className="underline decoration-green-400">sites web</span>{" "}
            mais aussi des jeux sur la plateforme{" "}
            <span className="underline decoration-green-400">Roblox</span>!
          </p>
        </div>
        <div className="hover:rotate-180 transition-all hidden lg:block">
          <Image
            src="/pdp.png"
            alt="photo de profile"
            width={200}
            height={200}
            className="rounded-full  border-green-400 border-4"
          />
        </div>
      </div>
    </>
  );
};

export default Acceuil;
