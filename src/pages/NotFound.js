export default function NotFound () {
  return <>
    <div className="w-full font-bold text-dracula text-8xl flex items-center justify-center -mt-12">
      <div className="flex items-center justify-center">
        <svg className="z-30 text-aro lg:w-45rem md:w-45rem w-30rem" fill="currentColor" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.4,-63.2C47.6,-54.2,60.5,-48.3,66.1,-38.2C71.8,-28.2,70.2,-14.1,66.3,-2.2C62.4,9.6,56.2,19.2,51.9,31.7C47.7,44.1,45.3,59.3,37,63.2C28.7,67.2,14.3,59.8,3.5,53.8C-7.4,47.8,-14.8,43.2,-28.9,42.5C-42.9,41.9,-63.5,45.2,-69.3,38.8C-75.2,32.3,-66.4,16.2,-66.3,0.1C-66.2,-16.1,-74.8,-32.1,-70.3,-40.9C-65.8,-49.7,-48.1,-51.2,-34.2,-59.2C-20.3,-67.2,-10.1,-81.7,0.7,-83C11.6,-84.2,23.1,-72.2,35.4,-63.2Z" transform="translate(100 100)" />
        </svg>
        <div className="absolute z-50 -ml-12 -mt-20">
          <div className="moon">
            <div className="shade"></div>
          </div>
        </div>
        <p className="absolute z-40 text-center -mt-10">4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4</p>
        <div className="z-40 absolute rounded-full h-2 w-2 bg-lincoln ml-24 -mt-24"></div>
        <div className="z-40 absolute rounded-full h-2 w-2 bg-lincoln lg:ml-24 lg:-mt-36 ml-12 -mt-36"></div>
        <div className="z-40 absolute rounded-full h-2 w-2 bg-lincoln lg:ml-0 lg:-mt-48 ml-0 -mt-40"></div>
        <div className="z-40 absolute rounded-full h-2 w-2 bg-lincoln lg:-ml-24 lg:mt-24 -ml-24 mt-12"></div>
        <div className="z-40 absolute rounded-full h-2 w-2 bg-lincoln lg:ml-24 lg:mt-36 ml-12 mt-16"></div>
        <div className="z-40 absolute rounded-full h-2 w-2 bg-lincoln lg:-ml-48 lg:-mt-12 -ml-24 -mt-24"></div>
        <div className="z-40 absolute rounded-full h-2 w-2 bg-lincoln lg:ml-48 lg:-mt-24"></div>
        <div className="z-40 absolute rounded-full h-2 w-2 bg-lincoln lg:-ml-36 lg:-mt-36"></div>
      </div>
    </div>
    <div className="flex items-center justify-center w-full -mt-24 z-50">
      <div className="cursor-pointer shadow-lg hover:shadow-xl transform duration-150 ease-in-out hover:-translate-y-1 flex items-center jusitfy-between space-x-2 bg-dracula text-cullen py-1 px-3 rounded-lg font-semibold text-lg">
        <span>Home</span>
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </>
}
