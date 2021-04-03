/*
 * Import
 */
import Head from 'next/head'
import Image from 'next/image'
import { Wrapper } from 'components/templates/wrapper'
import { Title } from 'components/atoms/title'
import { SignupContainer } from 'components/molecules/signup'

export const Home = (): JSX.Element => (
  <div className="home">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="mv">
      <Wrapper>
        <Title />
        <div className="mv_signup">
          <SignupContainer />
        </div>
      </Wrapper>
    </div>

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

    <style jsx>{`
      .mv {
        background: var(--color-background);
        color: var(--color-white-dark);
        padding: 3rem 0 5rem;
      }

      .mv_signup {
        margin: 1.5rem 0 0;
      }
    `}</style>
  </div>
)

export default Home
