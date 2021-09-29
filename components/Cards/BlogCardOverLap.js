export default function BlogCardOverLap(){

    return(
        <div class="flex flex-col pb-16 bg-gray-200">
        <div class="flex flex-col items-center md:mt-4">
          <img class="sm:rounded-lg w-full h-auto max-w-screen-md" src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" />
        </div>
        <div class="flex flex-col px-2 items-center -mt-16 md:-mt-32">
          <div class="flex flex-col rounded-lg bg-white p-4 sm:p-8 shadow-md w-full max-w-screen-sm mx-2 box-border ">
            <p class="text-black font-bold text-lg">
              Exploration of some of the elements needed for the story page in a news app. Hope you like.
            </p>
            <div class="mt-4 flex items-center">
              <img class="h-12 w-12 rounded-full mr-4" src="https://www.w3schools.com/howto/img_avatar.png"/>
              <div class="text-left flex-1">
                <p class="text-base font-medium">De Oliveira Tristan</p>
                <p class="text-sm text-gray-700">Jun 20, 2019</p>
              </div>
              <a href="https://codepen.io/tde-oliv" target="_blank" class="h-full w-auto flex items-center text-gray-600 p-4 self-end">
                <i class="fa fa-share" title="Find others from Tristan"></i>
              </a>
            </div>
            <p class="mt-5 text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin enim urna, vitae porta nunc ullamcorper sit amet. Sed molestie ullamcorper nulla. class aptent taciti sociosqu ad litora torquent per.</p>
            <p class="mt-5 text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin enim urna, vitae porta nunc ullamcorper sit amet. Sed molestie ullamcorper nulla. class aptent taciti sociosqu ad litora torquent per.</p>
            <p class="mt-5 text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin enim urna, vitae porta nunc ullamcorper sit amet. Sed molestie ullamcorper nulla. class aptent taciti sociosqu ad litora torquent per.</p>
          </div>
         
        </div>
      </div> 
    )
}