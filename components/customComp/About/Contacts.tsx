import Link from "next/link";
import CardContainer from "../CardContainer";

import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiSolidPhone,
} from "react-icons/bi";

const contactsData = [
  {
    label: "E-mail",
    value: "hery.ralaison@gmail.com",
    link: "#form",
    icon: <BiLogoGmail />,
  },
  {
    label: "GitHub",
    value: "Joel-Ralaison",
    link: "https://github.com/Joel-Ralaison",
    icon: <BiLogoGithub />,
  },
  {
    label: "LinkedIn",
    value: "Joël Heriniaina Ralaison",
    link: "https://www.linkedin.com/in/hery-ralaison",
    icon: <BiLogoLinkedin />,
  },
  {
    label: "Facebook",
    value: "Joël Rlsn",
    link: "https://web.facebook.com/hery.ralaison",
    icon: <BiLogoFacebook />,
  },
  {
    label: "Mobile",
    value: "+261346058002",
    link: "",
    icon: <BiSolidPhone />,
  },
];

export default function Contacts() {
  return (
    <CardContainer className="mx-auto mt-[50px] max-w-[1000px] px-8">
      <h4 className="mb-4 text-3xl">Join me</h4>

      <ul className="grid grid-cols-2 gap-5 rounded-lg max-[500px]:grid-cols-1">
        {contactsData.map((data) => (
          <li key={data.label}>
            <div className="mb-1 flex items-center gap-2">
              <span className="text-2xl">{data.icon}</span>
              <p>{data.label}</p>
            </div>

            {data.link ? (
              <Link
                href={data.link}
                className="md:text-lg lg:text-xl"
                target={data.link.includes("#") ? "_self" : "_blank"}
              >
                {data.value}
              </Link>
            ) : (
              <span className="md:text-lg lg:text-xl">{data.value}</span>
            )}
          </li>
        ))}
      </ul>
    </CardContainer>
  );
}
