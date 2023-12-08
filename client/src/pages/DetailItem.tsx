import React from 'react'

function DetailItem() {
  return (
    <div>
      <h2 className='text-4xl mb-24'>Menu : </h2>
      <div>
        <h3 className='text-2xl underline mb-12'>Items</h3>
        <div className="lg:flex items-center flex-wrap justify-center w-full">
                  <div aria-label="card 2" tabindex="0" className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0  bg-white p-6 shadow rounded mt-8">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex flex-shrink-0"></div>
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p tabindex="0" className="focus:outline-none text-xl font-medium leading-5 text-gray-800">Sale And Purchase</p>
                                <p tabindex="0" className="focus:outline-none text-sm leading-normal pt-2 text-gray-500">36 members</p>
                            </div>
                            <div aria-label="bookmark" role="img" className='cursor-pointer'>
                            <i className="fa-solid fa-xmark text-danger text-2xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p tabindex="0" className="focus:outline-none text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                       </div>
                    </div>
                  
                    
          </div>
      </div>
    </div>
  )
}

export default DetailItem