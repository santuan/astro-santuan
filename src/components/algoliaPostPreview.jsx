import React from "react"
import { Highlight } from "react-instantsearch-dom"
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
              href={hit.url}
              target="_blank"
              className="block w-full font-mono text-2xl font-bold text-left text-yellow-500 duration-700 group-hover:opacity-100 "
            >
              {hit.title}
            </a>
          </div>
          <p className="my-2 font-mono text-xl text-left text-white">
            <Highlight hit={hit} attribute="excerpt.excerpt" tagName="mark" />
          </p>
          <a
              rel="noopener noreferrer"
              href={`https://www.cooparaje.com.ar/recursos/${hit.slug}`}
              
              target="_blank"
              className="absolute bottom-0 right-0 z-50 block m-6 text-2xl font-bold text-left text-yellow-500 duration-700 group-hover:opacity-100 "
            >
-
            </a>
        </div>
      </div>
    </>
  )
}

export default PostPreview
