import React from "react";
import { Button } from "react-native-paper";

import { Layout } from "src/components";
import { useDispatch } from "src/hooks/useRedux";
import { toggleIsDark } from "src/slices/appSlice";
import styled from "src/styled";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Container>
        <Button mode="contained" onPress={() => dispatch(toggleIsDark())}>
          Toggle Dark Mode
        </Button>
      </Container>
    </Layout>
  );
};

const Container = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 20px;
`;

export default ProfileScreen;
