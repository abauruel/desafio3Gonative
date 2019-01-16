import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.regular,
    margin: metrics.baseMargin * 2,
    padding: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,
    justifyContent: 'space-between',
  },
  button: {
    marginLeft: metrics.baseMargin,
    backgroundColor: colors.regular,
    marginRight: metrics.baseMargin,
    paddingLeft: metrics.basePadding,
    paddingRight: metrics.basePadding,
  },
});

export default styles;
