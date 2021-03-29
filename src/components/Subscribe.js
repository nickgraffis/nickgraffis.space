export default function Subscribe () {
  return (
        <div class="w-full px-3 my-6">
         <div class="relative">
            <div class="relative px-6 py-10 overflow-hidden bg-indigo-600 border border-gray-700 shadow-xl dark:border-gray-400 dark:bg-indigo-800 rounded-2xl sm:px-12">
               <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                  <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                     <path class="text-indigo-500 text-opacity-40 dark:text-indigo-700" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
                     <path class="text-indigo-700 text-opacity-40 dark:text-indigo-900" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
                  </svg>
               </div>
               <div class="relative">
                  <h2 class="text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">Subscribe to my newsletter.</h2>
                  <p class="max-w-2xl mx-auto mt-4 text-sm text-indigo-50">Every Sunday I write an email newsletter with some thoughts, life lessons and insights regading my journey. I would love for you to join.</p>
                  <form class="mt-6 sm:mx-auto sm:max-w-lg sm:flex">
                     <div class="relative flex-1 min-w-0"><label for="email" class="sr-only">Email address</label><input id="email" name="email" type="email" class="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600" placeholder="Enter your email" /></div>
                     <div class="mt-4 sm:mt-0 sm:ml-3"><button type="submit" class="inline-flex items-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow dark:bg-indigo-600 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10 dark:hover:bg-indigo-500">Subscribe</button></div>
                  </form>
                  <p class="flex max-w-2xl mx-auto mt-4 text-xs font-medium align-text-bottom text-indigo-50">
                     <svg class="w-4 h-4" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                     </svg>
                     16 Subscribers
                  </p>
               </div>
            </div>
         </div>
        </div>
  )
}
