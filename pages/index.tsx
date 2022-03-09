import { useState } from 'react'
import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { programs } from '../programs'
import Program from '../components/ProgramCard'
import { Grid, Page, Text, Input } from '@geist-ui/core'

export const getStaticProps = async () => {
  return {
    props: {
      programs,
    },
  }
}

const Home = ({ programs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchField, setSearchField] = useState('')

  const filteredPrograms = programs.filter((program) => {
    return (
      program.name.toLowerCase().includes(searchField.toLowerCase()) ||
      program.description.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value)
  }

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

      <Grid.Container justify="center" height="300px">
        <Grid xs={12} justify="center" direction="column">
          <Image src="/logo.svg" height={100} width={100} alt="Logo" />
          <Text h1 style={{ textAlign: 'center' }}>
            Solana Programs
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container justify="center" height="60px">
        <Grid xs={12} justify="center">
          <Input
            type="default"
            placeholder="Search programs"
            onChange={handleChange}
            width="100%"
          />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={1.5}>
        {filteredPrograms.map((program) => (
          <Grid xs={24} sm={12} md={8} lg={6} justify="center" key={program.id}>
            <Program program={program} />
          </Grid>
        ))}
      </Grid.Container>
    </Page>
  )
}

export default Home
