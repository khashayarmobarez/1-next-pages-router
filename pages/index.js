import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home() {
  
  const router = useRouter()

  const clickHandler = () => {
    router.push('/students')
    // or
    // router.replace('/login')

    // replace: it deletes the history of the user and user can't return to the last pages
  }

  return (
    <div className={styles.container}>
      <h1>khashayarmobarez dev</h1>
      <ul>
        <li style={{display: 'flex' , flexDirection: 'column'}}>
          {/* replace: it deletes the history of the user and user can't return to the last pages */}
          <Link href='/courses' replace>go to courses page</Link>
          <Link href='/users' >go to users page</Link>
          <button onClick={clickHandler}>students</button>
        </li>
      </ul>
    </div>
  )
}
