import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    marginTop: 5,
  },

  text: {
    margin: 10,
    color: 'black',
    fontSize: 18,
  },

  titulo: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    height: 40,
    margin: 12,
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    color: 'black',
    backgroundColor: 'white',
  },

  button: {
    margin: 10,
    height: 40,
    width: 270,
    borderRadius: 100,
    alignItems: 'center',
    align: 'center',
    color: 'white',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  button2: {
    alignItems: 'center',
  },
});

export default Style;
