import { Popover } from "@headlessui/react";
import { MailOpenIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/static/images/logo.png";

export default function HeroLanding() {
  const router = useRouter();
  return (
    <div className="relative hero bg-cover overflow-hidden h-screen text-white flex justify-center items-center">
      <Popover className="relative pt-6 pb-16 sm:pb-24">
        {({ open }) => (
          <>
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-sm tracking-tight md:text-xl">
                  <span className="block xl:inline font-serif tracking-wider">
                    Kami mengundang Anda untuk bergabung di hari bahagia kami
                  </span>
                </h1>
                <div className="w-64 md:w-72 mt-5 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-8">
                  <Image src={logo} alt="I & F Wedding" />
                </div>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center justify-center md:mt-12">
                  <div
                    className="rounded-md  flex justify-center"
                    onClick={() => router.push("/home")}
                  >
                    <a className="md:w-full lg:w-full text-center w-64 flex items-center space-x-2 justify-center px-8 py-3  border border-white bg-transparent text-base font-medium rounded-md text-white  hover:bg-white hover:text-black md:py-2 md:text-lg md:px-10">
                      <span>Open The Invitation</span>{" "}
                      <MailOpenIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </>
        )}
      </Popover>
    </div>
  );
}
