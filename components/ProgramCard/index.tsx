import { programs } from "../../programs";
import { Box, Github } from "@geist-ui/icons";
import { Card, Link, Text, useToasts } from "@geist-ui/core";
import copy from "copy-to-clipboard";

const ProgramCard = ({ program }: { program: typeof programs[0] }) => {
  const { setToast } = useToasts();

  return (
    <Card
      style={{ display: "flex", flexDirection: "column" }}
      hoverable
      width="100%"
    >
      <Link target="_blank" href={program.url}>
        <Text h4 my={0}>
          {program.name}
        </Text>
      </Link>
      <Text>{program.description}</Text>
      {program.mainnet_address && (
        <Text
          font="12px"
          mt="24px"
          style={{
            color: "#aaa",
            cursor: "pointer",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: "260px",
          }}
          onClick={() => {
            copy(program.mainnet_address.toString());
            setToast({ text: "Mainnet address copied", delay: 2000 });
          }}
        >
          Mainnet address:
          <br />
          {program.mainnet_address}
        </Text>
      )}
      {program.devnet_address && (
        <Text
          font="12px"
          mt="24px"
          style={{
            color: "#aaa",
            cursor: "pointer",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: "260px",
          }}
          onClick={() => {
            copy(program.devnet_address.toString());
            setToast({ text: "Devnet address copied", delay: 2000 });
          }}
        >
          Devnet address:
          <br />
          {program.devnet_address}
        </Text>
      )}
      <Card.Footer
        style={{
          marginTop: "auto",
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
  );
};

export default ProgramCard;
