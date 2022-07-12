import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
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
        <p class="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
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
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            class="text-gray-300"
            href="https://apps.apple.com/us/developer/saif-ullah-sajid/id1527861472"
          >
            <img
              class="object-cover object-center rounded-3xl h-5 w-5 ml-5"
              alt="hero"
              src="/images/apple.png"
            />
          </a>
          <a
            class="text-gray-300"
            href="https://pk.linkedin.com/in/saifsajid99"
          >
            <img
              class="object-cover object-center rounded-3xl h-5 w-5 ml-5"
              alt="hero"
              src="/images/linkedin.png"
            />
          </a>
          <a class="text-gray-300" href="https://github.com/saifullahsajid">
            <img
              class="object-cover object-center rounded-3xl h-5 w-5 ml-5"
              alt="hero"
              src="/images/github.png"
            />
          </a>
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
