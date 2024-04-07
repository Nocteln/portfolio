interface Link {
  name: string;
  link: string;
  id: number;
}

interface Social {
  name: string;
  link: string;
  icone: string;
}

export const links: Link[] = [
  // {
  //   name: "Home",
  //   link: "#",
  //   id: 1,
  // },
  {
    name: "Projects",
    link: "projects",
    id: 2,
  },
  {
    name: "Skills",
    link: "skills",
    id: 3,
  },
  {
    name: "About",
    link: "about",
    id: 4,
  },
  {
    name: "Contact",
    link: "contact",
    id: 5,
  },
];

export const social: Social[] = [
  {
    name: "Github",
    link: "https://github.com/nocteln",
    icone: "/github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/eliott-mieze-b15114232/",
    icone: "/linkedin.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nocteln/",
    icone: "/instagram.svg",
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/562693590514532362",
    icone: "/discord.svg",
  },
];
