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
    icon: <BiLogoGmail />,
  },
  {
    label: "GitHub",
    value: "Joel-ralaison",
    icon: <BiLogoGithub />,
  },
  {
    label: "LinkedIn",
    value: "Joel ralaison",
    icon: <BiLogoLinkedin />,
  },
  {
    label: "Facebook",
    value: "Joël Rlsn",
    icon: <BiLogoFacebook />,
  },
  {
    label: "Mobile",
    value: "+261346058002",
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
              <span>{data.label}</span>
            </div>
            <p>{data.value}</p>
          </li>
        ))}
      </ul>
    </CardContainer>
  );
}
