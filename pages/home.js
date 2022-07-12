// import { BrowserRouter as Router, Link } from "react-router-dom";
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

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <section class="text-gray-600 bg-gray-900 font-poppins">
        <div class="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            {/* <div class=" bg-gray-800 rounded-full h-96 w-96"> */}
            <img
              class="object-cover object-center rounded-full mx-auto"
              alt="hero"
              src="/saif.jpeg"
            />
            {/* </div> */}
          </div>
          <div class="lg:flex-grow md:w-1/2  md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class=" sm:text-3xl text-2xl mb-4 text-white">
              Hello World. 👋🏻
              {/* <br class="hidden lg:inline-block" />
            readymade gluten */}
            </h1>
            <h1 class="sm:text-4xl text-3xl mb-4 text-green-400 font-poppins-bold">
              I'm Saif Ullah Sajid.
            </h1>
            <h1 class="sm:text-lg text-lg mb-4 text-gray-300">
              IOS ENGINEER | UI/UX
            </h1>

            <p class="mb-8 leading-relaxed font-poppins text-gray-300">
              I am an experienced iOS Engineer and UI Designer with a
              demonstrated history of working in the industry. Strong media and
              communication professional with a Bachelor's degree focused in
              Computer Software Engineering from Institute Of Management
              Sciences, Peshawar, Pakistan.
            </p>
            <div class="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1MDfz5t_NxwIWgaQoTavDHrJ53VKEUjOT/view"
                class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
              >
                Resume
              </a>
              <a
                href="https://pk.linkedin.com/in/saifsajid99"
                class="ml-4 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
              >
                Contact
              </a>
            </div>
            <div class="flex mb-8 mt-6">
              <a
                class="text-white"
                href="https://apps.apple.com/us/developer/saif-ullah-sajid/id1527861472"
              >
                <FaApple class="w-8 h-8 text-white mr-6" />
              </a>
              <a
                class="text-gray-300"
                href="https://pk.linkedin.com/in/saifsajid99"
              >
                <FaLinkedinIn class="w-8 h-8 text-white mr-6" />
              </a>
              <a class="text-gray-300" href="https://github.com/saifullahsajid">
                <FaGithub class="w-8 h-8 text-white mr-6" />
              </a>
              <button
                onClick={() => router.push("mailto:saifbinsajid7@gmail.com")}
              >
                <FaEnvelope class="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}

      <section class="text-gray-400 font-poppins bg-gray-900">
        <div class="container px-5 py-12 mt-12 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
              PORTFOLIO
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
              Projects i am proud of.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="h-60 rounded-3xl w-full object-cover object-center mb-6"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/81/4b/9a/814b9a95-d530-b499-cc95-d392698cbc90/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
                  alt="content"
                />
                <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">
                  iOS
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Therappy
                </h2>
                <p class="leading-relaxed text-base">
                  Therappy provides a secure online platform for psychological
                  counsling for therapists.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="h-60 rounded-3xl w-full object-cover object-center mb-6"
                  src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/cc/07/47/cc074710-92e8-f268-7b8f-0dd860dff207/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
                  alt="content"
                />
                <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">
                  iOS
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Therapists
                </h2>
                <p class="leading-relaxed text-base">
                  Therappy allows you to book & conduct online counseling
                  sessions without leaving the comfort of your home.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="h-60 rounded-3xl w-full object-cover object-center mb-6"
                  src="https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/e7/48/72/e748723f-0941-fd31-5979-26e20aa3c11a/AppIcon-0-1x_U007emarketing-0-7-0-P3-85-220.png/460x0w.webp"
                  alt="content"
                />
                <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">
                  iOS
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Private Island
                </h2>
                <p class="leading-relaxed text-base">
                  To empower you to discover and experience real life social
                  opportunities within your network.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="h-60 rounded-3xl w-full object-cover object-center mb-6"
                  src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/e5/8b/73/e58b7377-737d-b92f-1d17-458a059534de/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp"
                  alt="content"
                />
                <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">
                  iOS
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  SwiftHub
                </h2>
                <p class="leading-relaxed text-base">
                  A platform for the iOS developer community to explore new
                  APIs/frameworks, jobs & developers.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="h-60 rounded-3xl w-full object-cover object-center mb-6"
                  src="https://scontent.fpew2-1.fna.fbcdn.net/v/t1.6435-9/78261458_2508805532734707_3603850587843592192_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=973b4a&_nc_ohc=pUmrNXda3o4AX9DnurL&_nc_ht=scontent.fpew2-1.fna&oh=00_AT9tpoIKSz6klPMYcRFvZ3VgiUO2WuJRjyl7Pr1DIHVRjg&oe=62ECDF04"
                  alt="content"
                />
                <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">
                  iOS
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  ConectApp
                </h2>
                <p class="leading-relaxed text-base">
                  A platform to find the best fitness trainers and events in
                  Australia to stay healthy and fit forever.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="h-60 rounded-3xl w-full object-cover object-center mb-6"
                  src="https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/b4/6e/c1/b46ec179-5330-4af3-88c9-357ea90d0986/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-P3-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
                  alt="content"
                />
                <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">
                  iOS
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Unicorn
                </h2>
                <p class="leading-relaxed text-base">
                  Helping preschool kids learn alphabets, counting, animals and
                  color difference in an easy and fun way.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-700 bg-opacity-40 p-6 rounded-3xl">
                <img
                  class="h-60 rounded-3xl w-full object-cover object-center mb-6"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/4c/7d/b8/4c7db824-5232-0fd5-5d99-8f6c9ca67e32/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
                  alt="content"
                />
                <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">
                  React Native
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Yaad Memory Tools
                </h2>
                <p class="leading-relaxed text-base">
                  For family caregivers from family caregivers based on real
                  world findings and clinical studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* static numbers */}
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-12 mt-12 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-green-400 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">
                  150K+
                </h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-green-400 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">
                  100K+
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-green-400 w-12 h-12 mb-3 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                <h2 class="title-font font-medium text-3xl text-white">40+</h2>
                <p class="leading-relaxed">Ideas</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-green-400 w-12 h-12 mb-3 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">70+</h2>
                <p class="leading-relaxed">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-400 bg-gray-900 font-poppins">
        <div class="container px-5 py-12 mt-12 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
              SERVICES
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
              What can i do for you?
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5 flex-shrink-0">
                <FaMobileAlt class="w-12 h-12 text-green" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  iOS Development
                </h2>
                <p class="leading-relaxed text-base">
                  I develop robust iOS applications. I can build cost-effective
                  and secured iOS applications at a fast turn around time. Based
                  on your requirements I produce apps which can be standalone or
                  integrate with other data sources using secure management
                  systems. I will work with you to ensure the latest smartphone
                  features are integrated with your mobile app.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5 flex-shrink-0">
                <FaBriefcase class="w-12 h-12 text-green fa-regular" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Project Management
                </h2>
                <p class="leading-relaxed text-base">
                  I will lead the project from analysis and scheduling to
                  support of the released product, determine the requirements,
                  resources and schedule for project implementation, create and
                  maintain technical and project documentation, perform team
                  assessment and evaluation, assign individual responsibilities
                  within the team, effectively predict, prevent and/or solve
                  project issues.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5 flex-shrink-0">
                <FaBug class="w-12 h-12 text-green" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Mobile App Testing
                </h2>
                <p class="leading-relaxed text-base">
                  I build the most reliable and flexible iOS application testing
                  strategy. My iOS app testing solution can support your
                  development processes with additional application quality
                  assurance testing and make sure your application runs with
                  perfections.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5 flex-shrink-0">
                <FaBezierCurve class="w-12 h-12 text-green" />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  UI/UX
                </h2>
                <p class="leading-relaxed text-base">
                  I help you understanding the users, their needs and
                  identifying requirements of the product using the right UX
                  research technique at the right time in the product
                  development process. With a flavor of visual design that
                  focuses on the aesthetics of a app and its related materials
                  by strategically implementing branding, images, colours,
                  fonts, and other elements.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push("mailto:saifbinsajid7@gmail.com")}
            class="flex mx-auto mt-16 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
          >
            Get a Qoute
          </button>
        </div>
      </section>
    </div>
  );
}
