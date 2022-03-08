import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { programs } from '../programs'
import { Box, Github } from '@geist-ui/icons'
import { Grid, Card, Link, Page, Text } from '@geist-ui/core'

export const getStaticProps = async () => {
  return {
    props: {
      programs,
    },
  }
}

const Home = ({ programs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page>
      <Head>
        <title>Solana Programs</title>
        <meta
          name="description"
          content="A list of Solana programs ready to be used."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid.Container gap={2} justify="center" height="300px">
        <Grid xs={12} justify="center" direction="column">
          <Image src="/logo.svg" height={100} width={100} alt="Logo" />
          <Text h1 style={{ textAlign: 'center' }}>
            Solana Programs
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={1.5}>
        {programs.map((program) => (
          <Grid xs={24} sm={12} md={8} lg={6} justify="center" key={program.id}>
            <Card
              style={{ display: 'flex', flexDirection: 'column' }}
              hoverable
              width="100%"
            >
              <Link target="_blank" href={program.url}>
                <Text h4 my={0}>
                  {program.name}
                </Text>
              </Link>
              <Text>
                {program.description}
                {program.mainnet_address && (
                  <div>
                    <Text font="12px" mt="24px" style={{ color: '#aaa' }}>
                      Mainnet address:
                      <br />
                      {program.mainnet_address}
                    </Text>
                  </div>
                )}
                {program.devnet_address && (
                  <div>
                    <Text font="12px" mt="24px" style={{ color: '#aaa' }}>
                      Devnet address:
                      <br />
                      {program.devnet_address}
                    </Text>
                  </div>
                )}
              </Text>
              <Card.Footer
                style={{
                  marginTop: 'auto',
                }}
              >
                {program.crate && (
                  <Link color target="_blank" href={program.crate}>
                    <Box size={16} />
                  </Link>
                )}
                {program.github && (
                  <Link color target="_blank" href={program.github}>
                    <Github size={16} />
                  </Link>
                )}
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Page>
  )
}

export default Home
