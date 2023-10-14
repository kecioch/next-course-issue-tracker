import { Issue } from "@/types/Issue";
import React from "react";
import { Box, Card, Text } from "@radix-ui/themes";

interface Props {
  data: Issue;
}

const IssueItem = ({ data }: Props) => {
  return (
    <Card asChild>
      <Box>
        <Text as="div" size="2" weight="bold">
          {data.title}
        </Text>
        <Text as="div" color="gray" size="2">
          {data.description}
        </Text>
      </Box>
    </Card>
  );
};

export default IssueItem;
