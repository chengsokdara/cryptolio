import React from "react";
import { Text } from "react-native-paper";

import { Layout } from "src/components";
import styled from "src/styled";

const PortfolioScreen = () => {
  return (
    <Layout>
      <Container>
        <Text>Portfolio</Text>
      </Container>
    </Layout>
  );
};

const Container = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 20px;
`;

export default PortfolioScreen;
