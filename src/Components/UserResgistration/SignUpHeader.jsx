import React from 'react'

function SignUpHeader() {
  return (
    <div className ="grid grid-cols-12 gap-4 mt-4">
      <div className ="col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12 h-full flex flex-col sm:flex-row border-b border-gray-200 dark:border-dark-5">
        <div className ="flex items-center w-full">
          <a
            id="logo"
            href="https://www.dev.fxmaster.co.uk"
            className ="-intro-x flex items-center pt-0 mr-auto"
          >
            <img
              alt=""
              className ="w-20 sm:w-40"
              src=" https://www.dev.fxmaster.co.uk/dist/images/logo1.png"
            />
          </a>
          <a
            id="home"
            href="https://www.dev.fxmaster.co.uk"
            className ="-intro-x flex items-end btn btn-primary mb-0 mr-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              icon-name="home"
              data-lucide="home"
              className ="lucide lucide-home w-5 h-5 mr-1"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>{" "}
            Home
          </a>

          <a
            id="Logout"
            href="https://www.dev.fxmaster.co.uk/logout"
            className ="-intro-x flex items-end btn btn-primary mb-0 mr-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              icon-name="log-out"
              data-lucide="log-out"
              className ="lucide lucide-log-out w-4 h-4 mr-2"
            >
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>{" "}
            Logout
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUpHeader