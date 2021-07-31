import React from "react";
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled from "src/styled";

interface ILayoutProp {
  style?: ViewStyle;
  children: React.ReactNode;
}

const Layout = ({ style, children }: ILayoutProp) => {
  return (
    <Container edges={["top", "left", "right"]} style={style}>
      {children}
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
`;

export default Layout;
