import React from "react";

function Notifications() {
  return (
    <div className=" overflow-x-hidden p-6 text-text-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">21</div>
              </div>
              <div className="text-sm font-medium text-gray-400">Inbox</div>
            </div>
            <div className="group">
              <button
                type="button"
                className="dropdown-toggle text-gray-400 hover:text-text-100"
              >
                ...
                <i className="ri-more-fill" />
              </button>
              <ul className="absolute shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="/gebruikers"
            className="text-accent-200 font-medium text-sm hover:text-red-800"
          >
            View
          </a>
        </div>
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-4">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">53</div>
                <div className="p-1 rounded bg-green-100 text-primary-300 text-[12px] font-semibold leading-none ml-2">
                  +30%
                </div>
              </div>
              <div className="text-sm font-medium text-gray-400">Important</div>
            </div>
            <div className="group">
              <button
                type="button"
                className="dropdown-toggle text-gray-400 hover:text-text-100"
              >
                ...
                <i className="ri-more-fill" />
              </button>
              <ul className="absolute shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="/dierenartsen"
            className="text-accent-200 font-medium text-sm hover:text-red-800"
          >
            View
          </a>
        </div>
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">84</div>
              <div className="text-sm font-medium text-gray-400">All</div>
            </div>
            <div className="group">
              <button
                type="button"
                className="dropdown-toggle text-gray-400 hover:text-text-100"
              >
                ...
                <i className="ri-more-fill" />
              </button>
              <ul className="absolute shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href=""
            className="text-accent-200 font-medium text-sm hover:text-red-800"
          >
            View
          </a>
        </div>
      </div>
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2 mb-6">
        <div className="flex justify-between mb-4 items-start">
          <div className="font-medium">Notifications</div>
          <div className="group">
            <button
              type="button"
              className="dropdown-toggle text-gray-400 hover:text-text-100"
            >
              ...
              <i className="ri-more-fill" />
            </button>
            <ul className="absolute shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[460px]">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Name
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                  Inbox
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Time
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-primary-200">
                    <input type="checkbox" name="" id="" />
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-bg-300"
                    >
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      John Doe
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod nostrum dolorum voluptate tempore eum quaerat nam
                      corporis eos perspiciatis adipisci praaperiam?
                    </a>
                  </div>
                </td>

                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                    Sun Jun 2024
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <button className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-accent-200 hover:bg-rose-700 text-white">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-primary-200">
                    <input type="checkbox" name="" id="" />
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-bg-300"
                    >
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      John Doe
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod nostrum dolorum voluptate tempore eum quaerat nam
                      corporis eos perspiciatis adipisci praaperiam?
                    </a>
                  </div>
                </td>

                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                    Sat Feb 2024
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <button className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-accent-200 hover:bg-rose-700 text-white">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-primary-200">
                    <input type="checkbox" name="" id="" />
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-bg-300"
                    >
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      John Doe
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod nostrum dolorum voluptate tempore eum quaerat nam
                      corporis eos perspiciatis adipisci praaperiam?
                    </a>
                  </div>
                </td>

                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                    Sun Jun 2022
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <button className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-accent-200 hover:bg-rose-700 text-white">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-primary-200">
                    <input type="checkbox" name="" id="" />
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-bg-300"
                    >
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      John Doe
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod nostrum dolorum voluptate tempore eum quaerat nam
                      corporis eos perspiciatis adipisci praaperiam?
                    </a>
                  </div>
                </td>

                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                    Mon Apr 2022
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <button className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-accent-200 hover:bg-rose-700 text-white">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-primary-200">
                    <input type="checkbox" name="" id="" />
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-bg-300"
                    >
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      John Doe
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod nostrum dolorum voluptate tempore eum quaerat nam
                      corporis eos perspiciatis adipisci praaperiam?
                    </a>
                  </div>
                </td>

                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                    Sun Jun 2021
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <button className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-accent-200 hover:bg-rose-700 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
