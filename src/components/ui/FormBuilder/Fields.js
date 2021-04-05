import { useState } from "react"
import { useForm, useFormState } from "./index"

export default {
  Input: function Input({ id, title, type, placeholder, value, onChange }) {
    const updateForm = useFormState()
    let form = useForm()

    const update = (event) => {
      updateForm({...form, [id]: event.target.value})
      console.log(form)
    }

    return <div className="my-4">
      <label className="block dark:text-cullen text-base font-bold mb-2" for={id}>
        {title}
      </label>
      <input onChange={onChange || update} className="focus:outline-none focus:ring-2 focus:ring-dracula shadow appearance-none rounded w-full px-5 py-3 text-cullen placeholder-cullen lg:bg-aro bg-nosferatu text-base" id={id} type={type} placeholder={placeholder} />
    </div>
  },
  Title: function Title({ title, classes }) {
    return <p className={`text-center text-3xl font-semibold mb-4 ${classes}`}>{title}</p>
  },
  Buttons: function Buttons({ classes, children }) {
    return <div className={`flex justify-between mt-4 ${classes}`}>
      {children}
    </div>
  },
  Button: function Button({ func, title }) {
    let form = useForm()
    return <div onClick={() => func(form)} className="cursor-pointer shadow-lg hover:shadow-xl transform duration-150 ease-in-out hover:-translate-y-1 flex items-center jusitfy-between space-x-2 bg-dracula text-cullen px-5 py-3 text-base font-medium rounded-lg">
      <span>{title}</span>
      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  }
}
