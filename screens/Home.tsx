import React from 'react';
import { Text } from 'react-native';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { makeStyles, useStyles } from '@utils/theme';

export const HomeScreen = () => {
  const { layout } = useStyles(styles);

  return (
    <SafeAreaView style={layout}>
      <Text>Home screen</Text>
      <Link
        to={{
          screen: 'Popup',
        }}
      >
        Open popup
      </Link>
    </SafeAreaView>
  );
};

export const styles = makeStyles((theme) => ({
  layout: {
    backgroundColor: theme.colors.background,
    height: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
}));
