import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
  ScrollView,
  useState,
  useEffect
} from 'react-native'
import { TextInput } from 'react-native'
import { font } from 'expo'

const App = () => {
  const [masaSubstancji, onChangeMasaSubstancji] = React.useState('')
  const [masaMolowa, onChangeMasaMolowa] = React.useState('')
  const [liczbaMoli, onChangeLiczbaMoli] = React.useState('')
  const [objetosc, onChangeObjetosc] = React.useState('')

  var [liczbaMoliWynik, setLiczbaMoliWynik] = React.useState(false)
  var [stezenieMoloweWynik, setStezenieMoloweWynik] = React.useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.h1}>Stężenie molowe</Text>
      </View>
      <ScrollView>
        <View style={styles.div}>
          <Text style={styles.t}>Cm = n/Vr</Text>
          <Text style={styles.p}>Cm - stężenie molowe [mol/dm^3]</Text>
          <Text style={styles.p}>n - liczba moli [mol]</Text>
          <Text style={styles.p}>Vr - objętość roztworu [dm^3]</Text>
          <Text style={styles.p}>___________________</Text>
          <Text style={styles.t}>n = ms/M</Text>
          <Text style={styles.p}>n - liczba moli [mol]</Text>
          <Text style={styles.p}>ms - masa substancji [g]</Text>
          <Text style={styles.p}>M - masa molowa substancji [g/mol]</Text>
        </View>

        <View style={styles.div}>
          <Text style={styles.t}>Liczba moli</Text>
          <Text style={styles.p}>Podaj masę substancji: [g]</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMasaSubstancji}
            value={masaSubstancji}
            placeholder='Wpisz tutaj'
            placeholderTextColor='#FFF'
            keyboardType='numeric'
          />
          <Text style={styles.p}>Podaj masę molową substancji: [g/mol]</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMasaMolowa}
            value={masaMolowa}
            placeholder='Wpisz tutaj'
            placeholderTextColor='#FFF'
            keyboardType='numeric'
          />
          <Pressable
            onPress={() => {
              if (masaSubstancji !== '' && masaMolowa !== '') {
                const result = masaSubstancji / masaMolowa
                setLiczbaMoliWynik(result)
              }
            }}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? 'rgba(255, 255, 255, 0.15)'
                  : 'rgba(255, 255, 255, 0.31)'
              }
            ]}
          >
            <Text style={styles.p}>Oblicz</Text>
          </Pressable>
          {}
          {liczbaMoliWynik !== false && (
            <Text style={styles.t}>Wynik: {liczbaMoliWynik.toFixed(10)} [mol]</Text>
          )}
        </View>

        <View style={styles.div}>
          <Text style={styles.t}>Stężenie molowe</Text>
          <Text style={styles.p}>Podaj liczbę moli: [mol]</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLiczbaMoli}
            value={liczbaMoli}
            placeholder='Wpisz tutaj'
            placeholderTextColor='#FFF'
            keyboardType='numeric'
          />
          <Text style={styles.p}>Podaj objętość roztworu: [dm^3]</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeObjetosc}
            value={objetosc}
            placeholder='Wpisz tutaj'
            placeholderTextColor='#FFF'
            keyboardType='numeric'
          />
          <Pressable
            onPress={() => {
              if (liczbaMoli !== '' && objetosc !== '') {
                const result = liczbaMoli / objetosc
                setStezenieMoloweWynik(result)
              }
            }}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? 'rgba(255, 255, 255, 0.31)'
                  : 'rgba(255, 255, 255, 0.15)'
              }
            ]}
          >
            <Text style={styles.p}>Oblicz</Text>
          </Pressable>
          {}
          {stezenieMoloweWynik !== false && (
            <Text style={styles.t}>Wynik: {stezenieMoloweWynik.toFixed(10)} [mol/dm^3]</Text>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  h1: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center'
  },
  h2: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  t: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    padding: 7
  },
  p: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 6
  },
  content: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  div: {
    backgroundColor: 'rgba(255, 255, 255, 0.31)',
    borderRadius: 25,
    margin: 10,
    padding: 15
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.31)',
    borderRadius: 25,
    margin: 10,
    padding: 15,
    color: '#FFF'
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.31)',
    borderRadius: 25,
    margin: 10,
    padding: 15
  },
  buttonClicked: {
    backgroundColor: 'rgba(255, 255, 255, 0.27)',
    borderRadius: 25,
    margin: 10,
    padding: 15
  }
})

export default App
