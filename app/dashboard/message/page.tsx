import React from "react";

function Message() {
  return (
    <div className="p-6 text-text-200 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
          <div className="flex justify-between mb-4 items-start">
            <div className="font-medium">Inbox</div>
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
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                    Name
                  </th>
                  <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <div className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded-full object-cover block"
                      />
                      <a
                        href="#"
                        className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 min-w-20 line-clamp-1"
                      >
                        John Doe
                      </a>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-primary-300 line-clamp-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos explicabo illo nostrum eveniet veniam dolor, aut,
                      reiciendis maiores omnis nobis at id excepturi!
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <div className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded-full object-cover block"
                      />
                      <a
                        href="#"
                        className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 min-w-20 line-clamp-1"
                      >
                        Moshi
                      </a>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-primary-300 line-clamp-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos explicabo illo nostrum eveniet veniam dolor, aut,
                      reiciendis maiores omnis nobis at id excepturi!
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <div className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded-full object-cover block"
                      />
                      <a
                        href="#"
                        className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 min-w-20 line-clamp-1"
                      >
                        Elizabet
                      </a>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-primary-300 line-clamp-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos explicabo illo nostrum eveniet veniam dolor, aut,
                      reiciendis maiores omnis nobis at id excepturi!
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <div className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded-full object-cover block"
                      />
                      <a
                        href="#"
                        className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 min-w-20 line-clamp-1"
                      >
                        David
                      </a>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-primary-300 line-clamp-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos explicabo illo nostrum eveniet veniam dolor, aut,
                      reiciendis maiores omnis nobis at id excepturi!
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <div className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded-full object-cover block"
                      />
                      <a
                        href="#"
                        className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 min-w-20 line-clamp-1"
                      >
                        Kavin
                      </a>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-primary-300 line-clamp-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos explicabo illo nostrum eveniet veniam dolor, aut,
                      reiciendis maiores omnis nobis at id excepturi!
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
          <div className="flex justify-between mb-4 items-start">
            <div className="font-medium">Message</div>
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

          <div className="flex items-center mb-6">
            <img
              src="https://placehold.co/32x32"
              alt=""
              className="w-8 h-8 rounded-full object-cover block"
            />
            <a
              href="#"
              className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 min-w-20 line-clamp-1"
            >
              Elizabet
            </a>
            <span className="text-xs ml-auto">(20 January) 6:00 AM</span>
          </div>

          <div className="py-2 px-4 border-b border-b-gray-50">
            <span className="text-[13px] font-medium text-primary-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              explicabo illo nostrum eveniet veniam dolor, aut, reiciendis
              maiores omnis nobis at id excepturi! explicabo illo nostrum
              eveniet veniam dolor, aut, reiciendis maiores omnis nobis at id
              excepturi! eveniet veniam dolor, aut, reiciendis maiores omnis
              nobis at id excepturi!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
