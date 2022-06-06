import type { NextPage } from 'next'
import Grey from '../assets/serenidad_grey.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const ideas = await fetch(
    "https://dev.createforever.media/api:l36tuZkn/ideas"
  ).then((res) => res.json());

  return { props: { ideas } };
}
export default function Home(props: any) {
  console.log(props)

  return (
    <div>
      <div className={styles.side_bar}>
        <h1 className={styles.main_title}>Serenidad</h1>
        {props.ideas.map((idea: any, indexposition: any) => {
          return (
          <div>
            <a href={"./idea/" + idea.id} key={indexposition}>{idea.title}</a>
          </div>
        )})}
        </div>
      <div className={styles.main_content}>
            <Image width={496} height={216} src={Grey}></Image>
            <p>
              Welcome to the stories of two friends who make mistakes, learn from their mistakes, and use their knowledge to improve the world. 
            </p>
            <p>
              Serenidad is a secluded space where we store our lessons learned, ideas for the future, and fun memories. We do not intend to monetize Serenidad in the near future nor do we actively promote the space as our purpose is only to learn and not necessarily to make Serenidad the source of the change we enact in the world. 
            </p>
      </div>

    </div>
  )
}

