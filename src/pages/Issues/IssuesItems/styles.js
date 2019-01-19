import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
  },
  img: {
    height: 50,
    width: 50,
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  names: {
    flex: 1,
    flexDirection: 'column',
    margin: metrics.baseMargin,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
   
  },
  button: {
    padding: metrics.basePadding,
    margin: metrics.baseMargin,
  },
  seta: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  login: {
    marginTop: metrics.baseMargin / 2,
  },
});

export default styles;
