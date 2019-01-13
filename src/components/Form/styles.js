import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    margin: metrics.baseMargin,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: metrics.baseMargin,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,

    borderRadius: metrics.baseRadius,
  },
  button: {
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
    marginLeft: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
  },
  icon: {
    color: colors.darker,
  },
  line: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 1,
    padding: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
});

export default styles;
