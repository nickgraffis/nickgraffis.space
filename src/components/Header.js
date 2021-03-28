import Parser from 'html-react-parser';

function Header (props) {
  return <>
    <p className="text-5xl lg:text-7xl md:text-7xl font-bold text-left mb-4 mt-6 text-gray-800 dark:text-cullen">
      {props.title}
    </p>
    <p className="text-lg text-left mb-6 dark:text-cullen">
      I'm a  <span class="text-buffy">software engineer </span>
      from Long Beach, Calif. I love <span class="text-buffy">solving </span>
      complicated <span class="text-buffy">problems</span> by
      <span class="text-buffy"> creating simple solutions</span>,
      fast, <span class="text-buffy">with</span>out sacrificing
      <span class="text-buffy"> care</span>. I am currently working at
      Model Match as a full stack web developer. Get to know more about me 😉.
    <svg className="h-5 w-5 inline-block cursor-pointer dark:text-blade mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
    </p>
    </>
}

export default Header;
