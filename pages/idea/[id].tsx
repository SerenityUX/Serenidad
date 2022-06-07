import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Grey from '../../assets/serenidad_grey.png'


export async function getServerSideProps(context: any) {
  const { id } = context.params;

  const ideas = await fetch(
    "https://dev.createforever.media/api:l36tuZkn/ideas"
  ).then((res) => res.json());

  const idea = await fetch(
    "https://dev.createforever.media/api:l36tuZkn/ideas/" + id
  ).then((res) => res.json());

  return { props: { idea, ideas } };
}
export default function Home(props: any) {
  console.log(props.ideas)
  console.log(props.idea.idea_image)

  return (
    <div className={styles.majorcontainer}>
      <div className={styles.side_bar}>
        <a href={"/"} className={styles.main_title}>Serenidad</a>
        {props.ideas.map((idea: any, indexposition: any) => {
          return (
          <div className={styles.ideanav}>
            {props.idea.id !== idea.id ? (
            <a href={"./" + idea.id} className={styles.ideanav} key={indexposition}>{idea.title}</a> ) : 
            ( <a href={"./" + idea.id} className={styles.ideanavactive} key={indexposition}>{idea.title}</a> ) }
          </div>
        )})}
        </div>
      <div className={styles.main_content}>
            <Image className={styles.thumbnail} width={496} height={216} src={props.idea.idea_image.url}></Image>
            <p>
                {props.idea.title}
            </p>
            <p>
              {props.idea.description} 
            </p>

            {props.idea.question_and_answer.map((question: any, indexpositiontwo: any) => {
          return (
          <div>
            <p>{question.question}</p>
            <p>{question.answer}</p>
          </div>
        )})}

      </div>

    </div>
  )
}
