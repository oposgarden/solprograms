import { programs } from '../../programs'
import { Box, Github } from '@geist-ui/icons'
import { Card, Link, Text } from '@geist-ui/core'

const ProgramCard = ({ program }: { program: typeof programs[0] }) => {
  return (
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
  )
}

export default ProgramCard
