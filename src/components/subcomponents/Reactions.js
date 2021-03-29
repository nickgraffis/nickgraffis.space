export default function Reactions () {
  return <>
    <div class="options flex mr-2 items-center">
       <div class="flex space-x-3 items-center justify-center" role="group" aria-label="Reactions">
          <div aria-label="Christian reacted with :rofl:">
             <div class="flex space-x-2 items-center justify-center rounded-md p-1 bg-aro" aria-label="🤣, press to react" aria-pressed="false" role="button" tabindex="0">
              <span>🤣</span>
              <div class="text-sm text-vonCount font-bold">1</div>
             </div>
          </div>
          <div aria-label="Christian reacted with :rofl:">
             <div class="flex space-x-2 items-center justify-center rounded-md p-1 bg-aro" aria-label="🤣, press to react" aria-pressed="false" role="button" tabindex="0">
              <span>🐶</span>
              <div class="text-sm text-vonCount font-bold">1</div>
             </div>
          </div>
          <svg class="text-vonCount h-4 w-4 cursor-pointer" stroke="currentColor" aria-hidden="false" viewBox="0 0 24 24">
             <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.2512 2.00309C12.1677 2.00104 12.084 2 12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.916 21.999 11.8323 21.9969 11.7488C21.3586 11.9128 20.6895 12 20 12C15.5817 12 12 8.41828 12 4C12 3.31052 12.0872 2.6414 12.2512 2.00309ZM10 8C10 6.896 9.104 6 8 6C6.896 6 6 6.896 6 8C6 9.105 6.896 10 8 10C9.104 10 10 9.105 10 8ZM12 19C15.14 19 18 16.617 18 14V13H6V14C6 16.617 8.86 19 12 19Z"></path>
             <path d="M21 3V0H19V3H16V5H19V8H21V5H24V3H21Z" fill="currentColor"></path>
          </svg>
       </div>
       </div>
  </>
}
