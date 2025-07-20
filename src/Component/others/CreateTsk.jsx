import React from 'react'

const CreateTsk = () => {
  return (
    <div className="bg-[#1c1c1c] p-5 mt-7 rounded ">
        <form className="flex flex-wrap w-full justify-between items-start">
          <div className="w-1/2">
            <div className="">
              <h3 className=" text-sm text-gray-300 mb-0.5 py-2 px-2">
                Task Title
              </h3>
              <input
                className=" text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5 py-2 px-2">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                type="Date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 py-2 px-2">
                Assign To
              </h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 py-2 px-2">
                Category
              </h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                type="text"
                placeholder="Design, Dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5 py-1.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name="text"
              id=""
              cols="30"
              rows="20"
            ></textarea>
            <button className="bg-violet-400 py-3 hover:bg-violet-500 mt-4 text-sm px-5 rounded w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTsk