import React from "react";
import { ViewStyle } from "react-native";

import styled from "src/styled";

type TListProps<TItem = any> = {
  data?: TItem[];
  spacing?: number;
  style?: ViewStyle;
  renderItem: (item: TItem, index: number) => React.ReactElement | null;
};

const List = ({ data, spacing = 10, style, renderItem }: TListProps) => {
  if (!data) return null;

  return (
    <Container style={style}>
      {data.map((item, index) => (
        <Item key={item.id} spacing={index !== 0 ? spacing : 0}>
          {renderItem(item, index)}
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.View``;

const Item = styled.View`
  margin-top: ${({ spacing }) => spacing}px;
`;

export default List;
