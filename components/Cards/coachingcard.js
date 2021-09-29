import Link from 'next/link'

export default function CoachingCard({item}) {

    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
            <div className="px-4 py-2">
                <h1 className="text-gray-900 font-bold text-3xl uppercase">{item.name}</h1>
                
            </div>
            <img className="h-56 w-full object-cover mt-2" 
             src={item.image} 
            alt={item.name}/>
                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <Link href={`/institute/coaching-mainpage/${item.keyword}/${item.id}`}>
                    <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">View Test List</button>
                    </Link>
                   
                </div>
</div>
    )
}