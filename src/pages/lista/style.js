import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'gray',
  },
  item: {
    fontSize: 16,
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 3,
    margin: 5,
  },

  text: {
    fontWeight: 'bold',
  },

  imagem: {
    width: 60,
    height: 60,
  },
});

export default Style;
