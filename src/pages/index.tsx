/*
 * Import
 */
import Head from 'next/head'
import Image from 'next/image'
import { getUserByName } from 'utils/helper'
import { Button } from 'components/button'
import styles from 'styles/pages/index.module.scss'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className={styles.kv}>
        <h1 className={styles.title}>Aggregate your knowledge</h1>
        <p>
          It’s the easiest, fastest way to manage content: Integrate your tools.
        </p>

        <div className={styles.buttonWrap}>
          <Button
            label="Sign up for Bookmarks"
            onClick={() => {
              getUserByName('kazuhe')
            }}
          />
        </div>
      </div>
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
      </a>
    </footer>
  </div>
)

export default Home
