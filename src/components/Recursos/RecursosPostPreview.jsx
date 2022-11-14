import React from "react";
import { Highlight } from "react-instantsearch-dom";
const PostPreview = ({ hit }) => {
  return (
    <>
      <div className="relative flex overflow-hidden duration-700 bg-gray-900 border-transparent shadow-sm ring-2 hover:ring-yellow-400 ring-gray-600 ring-inset h-96 w-96 hover:shadow-lg from-gray-800 via-gray-800 bg-gradient-to-br group hover:shadow-amber-400/50 hover:border-amber-400 rounded-2xl">
        <div className="absolute inset-0 z-0 block overflow-hidden duration-700 group-hover:opacity-20 w-96 h-96 ">
          <img
            className="object-cover pb-0 mb-0 w-96 h-96 opacity-10 "
            alt={hit.title}
            src={`https:${hit.featuredImg.file.url}?w=600&h=600&fm=png&q=80`}
          />
        </div>
        <div className="z-10 flex flex-col items-start justify-start w-full px-6 py-12">
          <div className="flex items-baseline justify-between w-full">
            <a
              rel="noopener noreferrer"
              href={`https://www.cooparaje.com.ar/recursos/${hit.slug}`}
              target="_blank"
              className="block w-full font-mono text-2xl font-bold text-left text-yellow-500 duration-700 group-hover:opacity-100 hover:text-white "
            >
              {hit.title}
            </a>
          </div>
          <p className="my-2 font-mono text-xl text-left text-white">
            <Highlight hit={hit} attribute="excerpt.excerpt" tagName="mark" />
          </p>
          <div className="absolute  group bottom-0 right-0 z-[999]">
            <a
              rel="noopener noreferrer"
              href={hit.url}
              target="_blank"
              className=" block m-6 z-10 relative text-2xl font-bold text-left text-yellow-500 duration-700 group-hover:opacity-100 hover:bg-gray-800/80 bg-gray-800/20 p-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
            <div className="opacity-0 absolute right-6 top-9 z-0 font-bold w-64 font-mono duration-300 group-hover:opacity-100">Link al recurso</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPreview;
