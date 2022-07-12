import { useRouter } from "next/router";
import {
  FaApple,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaBug,
  FaBezierCurve,
  FaMobileAlt,
  FaBriefcase,
} from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  return (
    <footer class="text-gray-600 bg-gray-900 font-poppins">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> */}
        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          > */}
        {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
        {/* <span class="ml-3 text-xl">Tailblocks</span> */}
        {/* </a> */}
        <p class="text-sm text-gray-300 sm:mx-auto sm:py-2 sm:mt-0 mt-4 pr-6 text-center">
          © 2022 Saif Ullah Sajid — Made with 💚 by me using Next.js and
          Tailwind —
          <a
            href="https://twitter.com/saifcodes"
            class="text-gray-300 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @saifcodes
          </a>
        </p>
        <span class="inline-flex sm:mx-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            class="text-gray-300"
            href="https://apps.apple.com/us/developer/saif-ullah-sajid/id1527861472"
          >
            <FaApple class="w-5 h-5 text-gray-300 mr-6" />
          </a>
          <a
            class="text-gray-300"
            href="https://pk.linkedin.com/in/saifsajid99"
          >
            <FaLinkedinIn class="w-5 h-5 text-gray-300 mr-6" />
          </a>
          <a class="text-gray-300" href="https://github.com/saifullahsajid">
            <FaGithub class="w-5 h-5 text-gray-300 mr-6" />
          </a>
          <button onClick={() => router.push("mailto:saifbinsajid7@gmail.com")}>
            <FaEnvelope class="w-5 h-5 text-gray-300" />
          </button>
        </span>
      </div>
    </footer>

    // <footer class="flex items-center justify-start pl-4 pr-4 rounded-full h-10 bg-gray-600 text-white">
    //   <a
    //     class="flex items-center justify-center font-poppins"
    //     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Created by Saif Ullah Sajid Using Next.js and Tailwind CSS
    //   </a>
    // </footer>
  );
}
