import Link from 'next/link'

export default function BlogCard({job,path}) {


    return (
        <div className="max-w-full flex flex-col justify-center md:flex-row px-4 py-10 mx-auto">
            <div className="w-full  overflow-hidden rounded-xl shadow-xl z-10">
                <img src={job.image} alt={job.image} className=" w-full object-fit max-h-72" />
            </div>
            <div className="bg-white flex flex-col justify-center px-10 py-8 md:pl-20 my-4 -mt-4 mx-4 md:my-auto md:-ml-10 rounded-xl shadow-xl">
                <a >
                    <span className="text-gray-700 text-lg uppercase font-semibold">{job.cat_text}</span>
                </a>
                <Link href={`${path}/${job.keyword}/${job.id}`}>
                    <h1 className="text-2xl leading-tight pb-2 font-semibold">{job.title}</h1>
                </Link>
                {
                    job.short_description.split('@@').map((q,index)=>{
                        return (
                            <p key={index} className="text-lg text-gray-700 leading-tight">{q}</p>
                        )
                    })
                }
               
            </div>
        </div>
    )
}