import StarryNight from '../components/subcomponents/StarryNight'
import { useAuth, useAuthUpdate } from '../App'
import { useState } from 'react'
import { useNavigation } from "react-navi"
import { Form, Field } from "../components/ui/FormBuilder"

export default function Login () {
  const auth = useAuth()
  const authenticate = useAuthUpdate()
  const navi = useNavigation()

  const signin = (data) => {
    console.log(data)
    if (data.username === 'Nick' && data.password === '12345') {
      authenticate(true)
      navi.navigate('/')
    } else {
      alert(data.password)
    }
  }

  return <>
    <div className="w-full font-bold text-dracula flex items-center justify-center -mt-24">
      <div className="flex flex-col items-center justify-center">
        <svg className="z-30 text-nosferatu lg:text-aro lg:w-60rem w-30rem" fill="currentColor" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.4,-63.2C47.6,-54.2,60.5,-48.3,66.1,-38.2C71.8,-28.2,70.2,-14.1,66.3,-2.2C62.4,9.6,56.2,19.2,51.9,31.7C47.7,44.1,45.3,59.3,37,63.2C28.7,67.2,14.3,59.8,3.5,53.8C-7.4,47.8,-14.8,43.2,-28.9,42.5C-42.9,41.9,-63.5,45.2,-69.3,38.8C-75.2,32.3,-66.4,16.2,-66.3,0.1C-66.2,-16.1,-74.8,-32.1,-70.3,-40.9C-65.8,-49.7,-48.1,-51.2,-34.2,-59.2C-20.3,-67.2,-10.1,-81.7,0.7,-83C11.6,-84.2,23.1,-72.2,35.4,-63.2Z" transform="translate(100 100)" />
        </svg>
        <Form>
          <Field.Title title="Hey, Nick" />
          <Field.Input id="username" title="Who are you?" type="text" placeholder="It's me, Korvo, let me in!" />
          <Field.Input id="password" title="What's the passcode?" type="password" placeholder="Kitty Litter!" />
          <Field.Buttons>
            <Field.Button func={signin} title="Let's Go!" />
            <Field.Button func={() => {alert('hi')}} title="Test" />
          </Field.Buttons>
        </Form>
      </div>
    </div>
    <StarryNight />
  </>
}
