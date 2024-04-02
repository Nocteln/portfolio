import Image from "next/image";

const About = () => {
  return (
    <>
      <div className=" flex justify-between m-10 p-10 bg-[#212528] rounded-xl items-center">
        <div className="text-white  max-w-[500px] p-5 text-center rounded-l-xl">
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
        <div className="hover:rotate-180 transition-all">
          <Image
            src="/pdp.png"
            alt="photo de profile"
            width={200}
            height={200}
            className="rounded-br-xl hover:rounded-none"
          />
        </div>
      </div>

      <div className=" flex justify-between m-10  bg-[#212528] rounded-xl items-center">
        <div className="text-white  max-w-[500px] p-5 text-center rounded-l-xl">
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
        <div className="hover:rotate-180 transition-all">
          <Image
            src="/pdp.png"
            alt="photo de profile"
            width={250}
            height={250}
            className="rounded-br-xl hover:rounded-none"
          />
        </div>
      </div>
    </>
  );
};

export default About;
