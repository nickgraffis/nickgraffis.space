export default function ModalForm({ fields, title, buttons, position }) {
  return <>
    <div className={`h-screen w-full ${position || 'fixed'} z-40 flex items-center justify-center`}>
      <div className={`dark:bg-aro lg:dark:bg-nosferatu z-40 rounded-lg p-6 lg:w-4/12 w-8/12 dark:text-cullen flex flex-col`}>
        <p className="text-center text-3xl font-semibold mb-4">{title}</p>
        {fields.map((field, index) => {
          return <div className="my-4">
            <label className="block dark:text-cullen text-base font-bold mb-2" for={field.id}>
              {field.title}
            </label>
            <input onChange={field.updateFunc} className="focus:outline-none focus:ring-2 focus:ring-dracula shadow appearance-none rounded w-full px-5 py-3 text-cullen placeholder-cullen lg:bg-aro bg-nosferatu text-base" id={field.id} type={field.type} placeholder={field.placeholder} />
          </div>
        })}
        <div className={`flex ${buttons.length > 1 ? 'justify-between': 'justify-center'} mt-4`}>
          {buttons.map((button, index) => {
            return <div onClick={button.func} className="cursor-pointer shadow-lg hover:shadow-xl transform duration-150 ease-in-out hover:-translate-y-1 flex items-center jusitfy-between space-x-2 bg-dracula text-cullen px-5 py-3 text-base font-medium rounded-lg">
              <span>{button.title}</span>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          })}
        </div>
      </div>
    </div>
  </>
}
