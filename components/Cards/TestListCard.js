import Link from 'next/link'

export default function TestListCard({test,testlink}) {

  return (
    <div>
      <div className="bg-cyan-600 md:rounded-md md:m-4 m-2 rounded-md">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <p className="ml-3 font-medium text-white truncate uppercase">
                <span className=""> {test.test_name} </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link href={testlink}>
              
              <button href="#" className="uppercase flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-cyan-600 bg-white hover:bg-indigo-50">Take Test</button>
              </Link>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"></button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}