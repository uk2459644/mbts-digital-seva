import Image from 'next/image'

export default function AnalysisQuestionCard({ question }) {

    return (
        <div className=" bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4  bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">

                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                               {question.id+1}
                                {
                                    question.comp_text.split("@@").map(q => {
                                        return (
                                            <div>
                                                {
                                                    q.includes('https://firebasestorage') ? (
                                                        <Image
                                                            src={q}
                                                            alt="comprehenionn photo"
                                                            classNameName="w-full h-auto overflow-y-auto"
                                                            width={350}
                                                            height={350}
                                                        />

                                                    ) : (
                                                            <p>
                                                                {q}
                                                            </p>
                                                        )
                                                }
                                            </div>
                                        )
                                    })
                                }
                                {
                                    question.q_text.split("@@").map(q => {
                                        return (
                                            <div>
                                                {
                                                    q.includes('https://firebasestorage') ? (
                                                        <Image
                                                            src={q}
                                                            alt="comprehenionn photo"
                                                            classNameName="w-full h-auto overflow-y-auto"
                                                            width={350}
                                                            height={350}
                                                        />

                                                    ) : (
                                                            <p>
                                                                {q}
                                                            </p>
                                                        )
                                                }
                                            </div>
                                        )
                                    })
                                }
                                <ul className="list-disc space-y-2">
                                    <li className="flex items-start">
                                        <span className="h-6 flex items-center sm:h-7">
                                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        
                                        {
                                            question.correct_text.includes('https://firebasestorage') ? (
                                                <Image
                                                    src={question.correct_text}
                                                    width={100}
                                                    height={50} />
                                            ) :
                                                (
                                                    <p className="ml-2">{question.correct_text}</p>
                                                )
                                        }
                                    </li>
                                    <li className="flex items-start">
                                        <span className="h-6 flex items-center sm:h-7">
                                            <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        {
                                            question.user_text.includes('https://firebasestorage') ? (
                                                <Image
                                                    src={question.user_text}
                                                    width={100}
                                                    height={50} />
                                            ) :
                                                (
                                                    <p className="ml-2">{question.user_text}</p>
                                                )
                                        }
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}