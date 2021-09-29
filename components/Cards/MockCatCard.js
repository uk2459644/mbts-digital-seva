export default function MockCatCard() {

    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 ml-6 mr-6">
            <div className="px-4 py-2">
                <h1 className="text-gray-900 font-bold text-3xl uppercase">Test category</h1>
               
            </div>
            <div className="px-4 py-2  mt-2   bg-black ">
               <h1 className="text-yellow-400 text-center font-bold text-2xl py-6 mr-3 ml-3 uppercase ">$129 hello consecutive he</h1>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-gray-600">
                <h1 className="text-gray-200 font-bold text-xl">Free</h1>
                <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Take Test</button>
            </div>
        </div>
    )
}