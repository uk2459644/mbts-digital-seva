import { useState } from "react"

export default function QuestionCard({question,useranswer,userAnswer}) {

    const[compOn,setCompOn]=useState(false)


    return (
        <div>
            <div  class={ `  flex flex-row flex-wrap pt-3 pl-12 pr-12`}>
                    <div className={`${question.comprehension_show ? 'block' : 'hidden'} flex-1 justify-start `}>
                    <button onClick={()=>setCompOn(!compOn)} class={`${compOn ?'bg-cyan-400 border-cyan-400' : 'bg-white border-gray-400'} border-2   h-5 w-5 rounded-full ring-cyan-400`}>
                    <div class={`${compOn ? 'block' : 'hidden'} border-2 bg-cyan-400  h-4 w-4 rounded-full `}></div>

                    </button>
                    <a class="text-light flex-wrap text-sm uppercase pl-2 font-semibold"> comprehension</a>

                    </div>
                    <div className="flex-1 justify-end">
                    <a class="text-light flex-wrap text-sm uppercase pl-2 font-semibold"> Time</a>
                    </div>
                    
                    
                </div>
                <hr class="border-gray-400 mt-2" />
            <div className="flex  flex-col md:flex-row ">
                {
                    question.comprehension_doc ? (
                        <div className={`${compOn ? 'block' : 'hidden'} flex-1 flex-wrap text-md text-justify md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6`}>
                      
                         </div>

                    ):(
                        <div className={`${compOn ? 'block' : 'hidden'} flex-1 flex-wrap text-md text-justify md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6`}>
                           {question.comprehension}
                        </div>

                    )
                }

                
                <div className="flex-1 flex-wrap text-md text-justify md:text-md text-gray-700 font-light font-serif pl-12 pr-12 pt-6">
                         {
                         question.question_doc ? (
                            <p>
                                doc file here
                            </p>
                         ):(
                            <p>
                             <h4 className="font-semibold">Q {question.question_number}</h4> {question.question}
                           </p>

                         )
                         }
                         <div className="flex-col flex-wrap text-md text-justify md:text-md text-gray-700 font-light font-serif ">
                                <div className="flex items-start pt-4 flex-row">
                                    <button onClick={()=>{userAnswer(question.correct_opt,'a','v')}}
                                            className={`${useranswer.user_ans == 'a' ? 'bg-cyan-500' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                                    <p className="ml-2">{question.opt_a}</p>
                                </div>
                                <div className="flex items-start pt-4">
                                    <button onClick={()=>{userAnswer(question.correct_opt,'b','v')}} className={`${useranswer.user_ans == 'b' ? 'bg-cyan-500' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                                    <p className="ml-2">{question.opt_b}</p>
                                </div>
                                <div className="flex items-start pt-4">
                                    <button onClick={()=>{userAnswer(question.correct_opt,'c','v')}} className={`${useranswer.user_ans == 'c' ? 'bg-cyan-500' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                                    <p className="ml-2">{question.opt_c}</p>
                                </div>
                                <div className="flex items-start pt-4">
                                    <button onClick={()=>{userAnswer(question.correct_opt,'d','v')}} className={`${useranswer.user_ans == 'd' ? 'bg-cyan-500' : 'border-gray-500'} block h-5 w-5  border-2 rounded-full `}> </button>
                                    <p className="ml-2">{question.opt_d}</p>
                                </div>
                            </div>
               
                  </div>
               
            </div>
        </div>
    )
}