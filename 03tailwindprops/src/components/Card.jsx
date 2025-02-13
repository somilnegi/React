import React from 'react'

function Card({title, head, para}) {
  // console.log("props", props);
  
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.unsplash.com/photo-1733169948862-ce455177abaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8MzAwJTIwWCUyMDMwMHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title || "Lorem, ipsum."}
            
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{head || "Lorem ipsum dolor sit."}</h2>
          
        </div>
        <p className="text-gray-300">
          {para || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, nesciunt."}
          
        </p>
      </div>
  )
}

export default Card