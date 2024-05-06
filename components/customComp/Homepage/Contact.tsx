import Link from "next/link";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

export default function Contact() {
  return (
    <article className="absolute bottom-2 right-0 flex h-[110px] max-h-[350px] w-[40%] max-md:w-svw">
      <h3 className="absolute left-0 top-full h-[40px] w-[110px] max-w-[350px] origin-top-left -rotate-90 text-center max-md:hidden">
        CONTACTS
      </h3>

      <div className="absolute left-[40px] hidden h-full w-[7px] bg-primary md:block" />

      <div className="absolute bottom-0 left-[47px] flex h-full w-full flex-col items-stretch justify-center gap-2 overflow-hidden pl-2 max-md:left-0 max-md:h-[60px] max-md:flex-row md:w-[calc(100%-47px)]">
        <Link
          href="https://www.gmail.com"
          target="_blank"
          className="group flex items-center space-x-3 hover:text-black dark:hover:text-white max-md:p-2"
        >
          <BiLogoGmail
            size={25}
            className="text-neutral-600 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white"
          />
          <span className="max-md:hidden">hery.ralaison@gmail.com</span>
        </Link>

        <Link
          href="https://www.github.com"
          target="_blank"
          className="group flex items-center space-x-3 hover:text-black dark:hover:text-white max-md:p-2"
        >
          <BiLogoGithub
            size={25}
            className="text-neutral-600 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white"
          />
          <span className="max-md:hidden">Joël Rlsn</span>
        </Link>

        <Link
          href="https://www.linkedIn.com"
          target="_blank"
          className="group flex items-center space-x-3 hover:text-black dark:hover:text-white max-md:p-2"
        >
          <BiLogoLinkedin
            size={25}
            className="text-neutral-600 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white"
          />
          <span className="max-md:hidden">Joël Ralaison</span>
        </Link>
      </div>
    </article>
  );
}
