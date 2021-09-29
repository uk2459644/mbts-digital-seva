
export default function AnalysisCard({total_question,attempt_question,correct_question,
  wrong_question,skiped_question,final_marks,total_marks}){

    return (
        <div class="bg-white shadow overflow-hidden sm:rounded-lg m-4 md:m-8">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium uppercase text-gray-900">
     Test Analysis
    </h3>
    <p class="mt-1 max-w-2xl uppercase font-semibold text-sm text-green-500">
     {final_marks} / {total_marks}
    </p>
  </div>
  <div class="border-t border-gray-200">
    <dl>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium uppercase text-gray-500">
         Total questions
        </dt>
        <dd class="mt-1 font-semiblod text-md text-cyan-500 sm:mt-0 sm:col-span-2">
          {total_question}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium uppercase text-gray-500">
         Attempted questions
        </dt>
        <dd class="mt-1 font-semiblod text-md text-green-400 sm:mt-0 sm:col-span-2">
         {attempt_question}
        </dd>
      </div>
     
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium uppercase text-gray-500">
          Right answers
        </dt>
        <dd class="mt-1 font-semiblod text-md text-yellow-600 sm:mt-0 sm:col-span-2">
        {correct_question}
         </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
         <dt class="text-sm font-medium uppercase text-gray-500">
          Wrong answers
        </dt>
        <dd class="mt-1 font-semiblod text-md text-red-600 sm:mt-0 sm:col-span-2">
         {wrong_question}
         </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium uppercase text-gray-500">
          skipped questions
        </dt>
        <dd class="mt-1 font-semiblod text-md text-gray-600 sm:mt-0 sm:col-span-2">
        {skiped_question}
         </dd>
      </div>

    </dl>
  </div>
</div>
    )
}