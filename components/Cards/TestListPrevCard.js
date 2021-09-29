import Link from 'next/link'

export default function TestListCardPrev({test,testlink}) {

    return (
        <div>
            <div className="bg-gray-600 md:rounded-md md:m-2 m-1 rounded-md">
                <div className="  py-3 px-3 sm:py-3 sm:px-4 ">
                    <div className="flex items-center  flex-wrap">
                        <div className=" flex-1  items-center">
                            <p className="ml-3 font-medium text-white  uppercase">
                                <span className=""> {test.test_name} </span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                           <Link href={testlink}>
                           <button href="#" className="uppercase flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-white hover:bg-indigo-50">Take Test</button>
                           </Link>
                            
                        </div>
                        <div className="order-2  sm:order-3 sm:ml-3">
                           
                            <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}