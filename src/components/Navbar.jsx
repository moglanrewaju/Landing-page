export default function Navbar() {
  const $ = (el) => document.getElementById(el);

  function showNav(e) {
    e.preventDefault();
    const over = $("over");

    over.classList.toggle("hidden");
  }

  function hideNav() {
    $("over").classList.toggle("hidden");
    console.log("We so good");
  }

  return (
    <>
      <div id="over" className="relative hidden">
        <div
          onClick={hideNav}
          className=" w-screen h-screen fixed bg-black bg-opacity-80 z-10"
        ></div>

        <div className="fixed w-screen h-screen top-0 shadow-2xl bg-black animate__animated animate__bounceInDown animate__fast z-10">
          <div className="flex items-center justify-left  w-full mt-28 ">
            <ul className="w-full space-y-6 px-5 text-left">
              <li className="text-gray-200 hover:text-blue-600 text-sm border-b border-neutral-700 pb-2">
                <a href="/comingSoon">Auction Center</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600 text-sm border-b border-neutral-700 pb-2">
                <a href="/comingSoon">Data Library</a>
              </li>

              <li className="text-gray-200 hover:text-blue-600 text-sm border-b border-neutral-700 pb-2">
                <a href="/comingSoon"> Head2Head</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600 text-sm border-b border-neutral-700 pb-2">
                <a href="/comingSoon">Subscriptions</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600 text-sm border-b border-neutral-700 pb-2">
                <a href="/comingSoon">Esports & Gaming</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600 text-sm border-b border-neutral-700 pb-2">
                <a href="/comingSoon">About</a>
              </li>

              <li className="text-gray-200 hover:text-blue-600 text-sm border-b border-neutral-700 pb-2">
                <a href="www.google.com">Invest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between fixed px-4  md:px-10 top-0    w-full bg-black z-20 shadow-md py-4 ">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className=" text-lg md:text-xl text-neutral-100 font-bold"
          >
            WhoScore?
            <span className="border-l-4 rounded-full ml-1 border-yellow-500"></span>
            <span className="text-xs pl-1 brand-logo">For Business</span>
          </a>

          <button id="navBtn" onClick={showNav} className="md:hidden text-2xl">
            <span id="menu" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center space-x-2 lg:space-x-6">
            <li className="nav-link">
              <a href="/comingSoon">Livescores</a>
            </li>
            <li className="nav-link">
              <a href="/comingSoon"> LiveMatches</a>
            </li>
            <li className="nav-link">
              <a href="/comingSoon"> Predictions</a>
            </li>
            <li className="nav-link">
              <a href="/comingSoon">Esports</a>
            </li>
            <li className="nav-link">
              <a href="/comingSoon"> Head2Head</a>
            </li>
            <li className="nav-link">
              <a href="/comingSoon">News</a>
            </li>
            <li className="bg-yellow-400 hover:bg-yellow-500 transform transition hover:-translate-y-1 text-xs text-neutral-700 px-6 py-3 rounded-md">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
