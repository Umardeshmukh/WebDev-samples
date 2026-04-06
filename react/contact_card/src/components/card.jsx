import React from 'react'

const Card = (props) => {
  return (
    <div className="w-[260px] bg-white rounded-2xl px-6 pt-7 pb-5 flex flex-col items-center text-center border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out">

      {/* Avatar */}
      <img
        className="w-[72px] h-[72px] rounded-full object-cover object-center ring-4 ring-zinc-50"
        src={props.elem.imageURL}
        alt={props.elem.userName}
      />

      {/* Name */}
      <h2 className="mt-4 text-[15px] font-semibold text-zinc-900 tracking-tight leading-tight">
        {props.elem.userName}
      </h2>

      {/* Role */}
      <span className="mt-1.5 text-[12px] font-medium text-indigo-500 tracking-wide uppercase">
        {props.elem.userRole}
      </span>

      {/* Description */}
      <p className="mt-3 text-[13px] leading-relaxed text-zinc-400 line-clamp-3">
        {props.elem.userDesc}
      </p>

      {/* Divider */}
      <div className="w-full mt-5 mb-4 border-t border-zinc-100" />

      {/* Remove Button */}
      <button
        onClick={() => props.deleteHandler(props.idx)}
        className="w-full py-2 rounded-xl text-[13px] font-medium text-zinc-400 hover:text-red-500 hover:bg-red-50 active:scale-[0.97] transition-all duration-150 cursor-pointer"
      >
        Remove
      </button>
    </div>
  )
}

export default Card
