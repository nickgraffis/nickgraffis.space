import React, { useContext, useState, useEffect } from "react"
import Loading from '../Loader'
import Twemoji from 'react-twemoji'
import axios from 'axios'

export function Modal({ children, classes}) {
  return <div className={`h-screen w-full absolute z-40 flex items-center justify-center ${classes}}`}>
    {children}
  </div>
}

export function EmojiList({ category }) {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const emojisCall = await axios.get(`https://emoji-api.com/categories/${category}?access_key=743427fd43bdd0732c92f2625e94eb8a3ce83459`)
      console.log(emojisCall.data)
      setEmojis(emojisCall.data ? emojisCall.data : [])
      console.log(emojis)
      setLoading(false)
    }
    fetchData()
  }, []);
  return <>
    <ul className="w-full flex flex-wrap justify-between">
      {loading ? <Loading /> : emojis.map((e, i) => {
        return <li className="p-1 text-4xl cursor-pointer rounded-lg hover:bg-vonCount" key={i}>
            <Twemoji options={{ className: 'twemoji' }}>{e.character}</Twemoji>
          </li>
      })}
    </ul>
  </>
}

//First list the categories

export default function EmojiPicker({ children, classes }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const emojiCategories = await axios.get('https://emoji-api.com/categories?access_key=743427fd43bdd0732c92f2625e94eb8a3ce83459')
    console.log(emojiCategories)
    setCategories(emojiCategories.data)
    setLoading(false)
  }, []);

  return <Modal>
    <div className={`dark:bg-aro z-40 rounded-lg h-96 overflow-scroll lg:w-4/12 w-8/12 dark:text-cullen flex flex-col ${classes}`}>
      <div className="w-full bg-aro py-4">
        <div className="bg-nosferatu mx-8 rounded-md py-1 px-2">Search</div>
      </div>
      { loading ? <Loading /> :
        categories.map((c) => {
          return <>
            <p>{c.slug}</p>
            { loading ? <Loading /> : <EmojiList category={c.slug} /> }
          </>
        })
      }
    </div>
  </Modal>
}
