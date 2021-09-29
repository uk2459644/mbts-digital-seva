
export default function Waiting() {

    return (
        <div>
            <div className="flex flex-col content-center items-center align-center justify-center p-10">

                <div class="flex flex-row p-6 m-4 align-middle justify-items-center content-center">
                    <div class="text-center font-medium  pr-6  font-serif tracking-wider uppercase">Please wait .....</div>
                    <svg class="align-middle content-center w-10 h-10 animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>

                <div className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-blue-400 rounded"></div>
                                <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}