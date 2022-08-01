export default function NavBar(props) {
  return (
    <header class="text-gray-600 bg-gray-900 font-poppins">
      <div class="container flex p-5 flex-col md:flex-row items-center">
        <a class=" title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div class="">
            <button
              type="button"
              class=" text-sm rounded-full focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ease-linear transform hover:scale-125 transition duration-500"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <h1 class="text-6xl p-5 font-smooch text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-900">
                Saif
              </h1>
            </button>
          </div>
        </a>

        {/* </div>
        </a> */}
        {/* <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 justify-between">
            <div class="relative flex items-center justify-between h-16 ">
              <div class="rounded-full p-2 bg-gray-600">
                <div class="flex ">
                  <button
                    type="button"
                    onClick={() => props.getSelectedTab("Contact")}
                    // class={
                    //   (props.selectedTab == "Contact" ? "bg-white" : "") +
                    //   " hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                    // }
                    class="text-white hover:text-gray-300 mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                  >
                    <a href="https://blog.saifullahsajid.com">Blog</a>
                  </button>
                  {/* <button
                    type="button"
                    onClick={() => props.getSelectedTab("Home")}
                    // class=
                    // {
                    //   (props.selectedTab == "Home" ? "bg-white" : "") +
                    //   " hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                    // }
                    class="text-white hover:text-gray-300 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                  >
                    Home
                  </button> */}

        {/* <button
                    type="button"
                    onClick={() => props.getSelectedTab("About")}
                    // class={
                    //   (props.selectedTab == "About" ? "bg-white" : "") +
                    //   " hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                    // }
                    class="text-white hover:text-gray-300 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                  >
                    About
                  </button> */}

        {/* <button
                    type="button"
                    onClick={() => props.getSelectedTab("Projects")}
                    // class={
                    //   (props.selectedTab == "Projects" ? "bg-white" : "") +
                    //   " hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                    // }
                    class="text-white hover:text-gray-300 mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                  >
                    Portfolio
                  </button>

                  <button
                    type="button"
                    onClick={() => props.getSelectedTab("Contact")}
                    // class={
                    //   (props.selectedTab == "Contact" ? "bg-white" : "") +
                    //   " hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                    // }
                    class="text-white hover:text-gray-300 mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                  >
                    Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>   */}
      </div>
    </header>
  );
}
