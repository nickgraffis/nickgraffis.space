import Fields from "./Fields"
import React, { useContext, useState } from "react"

const FormContext = React.createContext();
const FormUpdateContext = React.createContext();

export function useForm() {
  return useContext(FormContext);
};

export function useFormState() {
  return useContext(FormUpdateContext);
};

export function Modal({ children, classes}) {
  return <div className={`h-screen w-full absolute z-40 flex items-center justify-center ${classes}}`}>
    {children}
  </div>
}

export function Form({ children, classes }) {

  const [formState, setFormState] = useState({});

  return <FormContext.Provider value={formState}>
      <FormUpdateContext.Provider value={setFormState}>
        <Modal>
          <div className={`dark:bg-aro lg:dark:bg-nosferatu z-40 rounded-lg p-6 lg:w-4/12 w-8/12 dark:text-cullen flex flex-col ${classes}`}>
            {children}
          </div>
        </Modal>
      </FormUpdateContext.Provider>
  </FormContext.Provider>
}

export const Field = Fields
