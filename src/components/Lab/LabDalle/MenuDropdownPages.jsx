import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export default function Example() {
  return (
    <div className="fixed bottom-0 md:bottom-auto top-auto md:top-1 md:right-12 right-0 z-50 w-64 m-3 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="btn !text-sm uppercase yellow">
            Indice
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2 -mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 text-white origin-top-right divide-y divide-gray-100 rounded-md shadow-lg w-72 bg-gray-800/80 bottom-12 md:bottom-auto md:top-12 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col items-center justify-center px-1 py-1 pb-2 space-y-3 ">
              <Menu.Item>
                {({ active }) => (
                  <a
                    aria-label="Ir al primer ejemplo"
                    href="#intro"
                    className={`${active ? " black " : ""} btn !text-xs w-full !justify-between !px-2`}
                  >
                    0<span> Introducción </span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    aria-label="Ir al primer ejemplo"
                    href="#ejemplo1"
                    className={`${active ? " blue" : ""} btn !text-xs w-full !justify-between !px-2`}
                  >
                    1<span> Comparar estilos </span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    aria-label="Ir al primer ejemplo"
                    href="#ejemplo2"
                    className={`${active ? " red" : ""} btn !text-xs w-full !justify-between !px-2`}
                  >
                    2<span> Variaciones de una imagen </span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    aria-label="Ir al primer ejemplo"
                    href="#ejemplo3"
                    className={`${active ? " yellow" : ""} btn !text-xs w-full !justify-between !px-2`}
                  >
                    3<span> Variaciones de textos </span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    aria-label="Ir al primer ejemplo"
                    href="#ejemplo4"
                    className={`${active ? " green" : ""} btn !text-xs w-full !justify-between !px-2`}
                  >
                    4<span> Generación espontánea </span>
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
