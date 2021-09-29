import Link from 'next/link'

export default function OverLapTestCatCard({cat,link}) {

    
    return (
        <div>
            <div className="w-56 md:w-64 bg-white  shadow-lg rounded-lg overflow-hidden mr-6 ml-6 pt-6">
                <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{cat}</div>
                <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
                    <h1 className="text-gray-800 font-bold ">Free</h1>
                    <Link href={link}>
                    <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Mock Test List</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}