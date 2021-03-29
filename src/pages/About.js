import Header from '../components/Header'

export default function About () {
  let content = `Where to begin? I grew up in Long Beach, Calif. Graduated from Long Beach Poly High School 🐰, Long Beach State 🦈,
   and then spent the next 11 years coaching water polo. That's a big part of my life and something that I still am extreamly
    active in, but I'll skip that story for now and let you <span class="underline text-blade">check it out</span> on
     your own time. <br><br> In March of 2020, after being out of work and spending 100% of my time inside, like the rest of the world 🦠.
      I decided to beign exploring the possibility of starting a new challenge in my life. I took my first <span class="italic font-semibold">
      real</span> dive into computer science with CS50X from edX and Harvard. Can't recemmonded it enough by the way. <br><br>
      I was hooked, I took CS50AI, CS50W that spring and summer and was so excited about building tools that me and the rest of the world
      could use, and exploring the history, theory, and thought process that made up computer science. Then when I made the exreamly difficult
      decision of attempting to jump into this subject as a career, I knew I needed more strucutre and support. I began taking a course at UC
      Irvine 🐜 in Web Devlopment, and really accelerated my passion. <br><br> I met a lot of great people and made a ton of great things, and in
       March of 2021 I started my first job at Model Match. Depending on when you're reading this, I guess, the rest is history!
       <br><br>If you're still curious, you can learn more about my passsions, work, family, friends, hobbys, and more:
       <ul class="mt-3 space-y-2">
        <li class="text-blade cursor-pointer">
          🤽‍♂️ Water Polo
        </li>
        <li class="text-blade cursor-pointer">
          🏄‍♂️ Surfing
        </li>
        <li class="text-blade cursor-pointer">
          🍇 Food, Wine, and Coffee
        </li>
        <li class="text-blade cursor-pointer">
          🧑‍🎤 Music, Movies, and Books
        </li>
        <li class="text-blade cursor-pointer">
          👨‍👩‍👧‍👦 Family & Friends
        </li>
        <li class="text-blade cursor-pointer">
          🐶 Wesley
        </li>
       </ul>`
  return (
    <Header title="Hi, I'm Nick Graffis" content={content}/>
  )
}
