import Link from 'next/link'


export default function AnalysisFooter({link}){

    return(
        <div class="bg-gray-50">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Do you like it?</span>
      <span class="block text-indigo-600">Tell your friends to try it.</span>
    </h2>
    <div class="mt-8 lex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
          <Link href="/">
          <a  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
         Back to home
        </a>
          </Link>
       
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
          <Link href={link}>
          <a  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
          Take another test
        </a>
          </Link>
       
      </div>
    </div>
  </div>
</div>
    )
}