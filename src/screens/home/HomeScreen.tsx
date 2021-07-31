import React from "react";
import { RefreshControl } from "react-native";
import { Caption, Subheading, Surface, Text } from "react-native-paper";

import { Layout, List } from "src/components";
import { useAssetsQuery, IAssets } from "src/slices/coinCapSlice";
import styled, { ThemeContext } from "src/styled";
import { USD } from "src/utils/currency";
import { fullDateTime } from "src/utils/datetime";

const HomeScreen = () => {
  const { data, error, isLoading, isFetching, refetch } = useAssetsQuery();
  const theme = React.useContext(ThemeContext);
  console.info({
    theme: theme.colors.accent,
  });

  console.info({
    data: data?.data[0],
    time: data?.timestamp,
    error,
  });

  const renderItem = (item: IAssets) => {
    return (
      <Item key={item.id}>
        <Text>{`Symbol: ${item.symbol}`}</Text>
        <Text>{`Price: ${USD(item.priceUsd)}`}</Text>
        <Text>{`Market Cap: ${USD(item.marketCapUsd)}`}</Text>
        <Text>{`Supply ${USD(item.supply)}`}</Text>
        <Text>{`Max Supply: ${USD(item.maxSupply)}`}</Text>
        <Text>{`Change: ${parseFloat(item.changePercent24Hr).toFixed(
          2
        )}%`}</Text>
      </Item>
    );
  };

  const handleRefresh = React.useCallback(() => {
    refetch();
  }, []);

  return (
    <Layout>
      <Container
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={handleRefresh} />
        }
      >
        <Label>Top 10</Label>
        <ListTop10 data={data?.data} renderItem={renderItem} />
      </Container>
      {data ? (
        <Status>{`Updated at: ${fullDateTime(data.timestamp)}`}</Status>
      ) : null}
    </Layout>
  );
};

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 10,
  },
})`
  flex: 1;
`;

const Item = styled(Surface)`
  padding: 20px;
`;

const Label = styled(Subheading)`
  align-self: center;
  margin-bottom: 10px;
`;

const ListTop10 = styled(List)`
  padding-horizontal: 10px;
`;

const Separator = styled.View`
  height: 10px;
`;

const Status = styled(Caption)`
  align-self: center;
  text-align: center;
  padding-vertical: 5px;
`;

export default HomeScreen;
