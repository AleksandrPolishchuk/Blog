import React from 'react'

export const PostItem = () => {
  return (
    <div className="flex flex-col basis-1/4 flex-grow">
        <div>IMAGE</div>
        <div className="flexjustify-between items-center pt-2">
            <div className="text-xs text-white opacity-50">USERNAME</div>
            <div className="text-xs text-white opacity-50">DATA</div>
        </div>
        <div className="text-white text-xl">POST TITLE</div>
    </div>
  )
}
