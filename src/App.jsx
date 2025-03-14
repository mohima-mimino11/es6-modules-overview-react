import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  // in memory object json data showing
  // const watches = [
  //   {
  //     "id": 1,
  //     "brand": "TechTime",
  //     "model": "Chrono X1",
  //     "price": 299.99,
  //     "features": {
  //       "display": "AMOLED",
  //       "batteryLife": "7 days",
  //       "waterResistance": "50 meters",
  //       "sensors": ["Heart Rate", "SpO2", "GPS"],
  //       "connectivity": ["Bluetooth 5.0", "Wi-Fi"]
  //     },
  //     "releaseDate": "2023-09-15",
  //     "colorsAvailable": ["Black", "Silver", "Rose Gold"]
  //   },
  //   {
  //     "id": 2,
  //     "brand": "FitSphere",
  //     "model": "Active Pro",
  //     "price": 199.99,
  //     "features": {
  //       "display": "LCD",
  //       "batteryLife": "5 days",
  //       "waterResistance": "30 meters",
  //       "sensors": ["Heart Rate", "Step Tracker", "Sleep Monitor"],
  //       "connectivity": ["Bluetooth 4.2"]
  //     },
  //     "releaseDate": "2022-12-01",
  //     "colorsAvailable": ["Blue", "Gray", "Green"]
  //   },
  //   {
  //     "id": 3,
  //     "brand": "PulseWear",
  //     "model": "Edge 2.0",
  //     "price": 349.99,
  //     "features": {
  //       "display": "Retina Display",
  //       "batteryLife": "10 days",
  //       "waterResistance": "100 meters",
  //       "sensors": ["ECG", "Heart Rate", "GPS", "Barometer"],
  //       "connectivity": ["Bluetooth 5.1", "Wi-Fi", "NFC"]
  //     },
  //     "releaseDate": "2024-01-10",
  //     "colorsAvailable": ["Black", "White"]
  //   },
  //   {
  //     "id": 4,
  //     "brand": "WellnessGear",
  //     "model": "Balance 4",
  //     "price": 249.99,
  //     "features": {
  //       "display": "OLED",
  //       "batteryLife": "6 days",
  //       "waterResistance": "50 meters",
  //       "sensors": ["Heart Rate", "Stress Monitor", "Sleep Tracker"],
  //       "connectivity": ["Bluetooth 5.0", "Wi-Fi"]
  //     },
  //     "releaseDate": "2023-03-20",
  //     "colorsAvailable": ["Pink", "Gold", "Black"]
  //   },
  //   {
  //     "id": 5,
  //     "brand": "NextStep",
  //     "model": "Trail Blazer",
  //     "price": 179.99,
  //     "features": {
  //       "display": "LCD",
  //       "batteryLife": "8 days",
  //       "waterResistance": "25 meters",
  //       "sensors": ["Step Counter", "Heart Rate"],
  //       "connectivity": ["Bluetooth 4.0"]
  //     },
  //     "releaseDate": "2023-05-05",
  //     "colorsAvailable": ["Black", "Blue"]
  //   },
  //   {
  //     "id": 6,
  //     "brand": "EliteTech",
  //     "model": "Vision Ultra",
  //     "price": 499.99,
  //     "features": {
  //       "display": "AMOLED",
  //       "batteryLife": "14 days",
  //       "waterResistance": "200 meters",
  //       "sensors": ["ECG", "SpO2", "GPS", "Temperature Sensor"],
  //       "connectivity": ["Bluetooth 5.2", "Wi-Fi", "NFC", "LTE"]
  //     },
  //     "releaseDate": "2024-05-18",
  //     "colorsAvailable": ["Silver", "Titanium"]
  //   },
  //   {
  //     "id": 7,
  //     "brand": "GearFit",
  //     "model": "Spark 3",
  //     "price": 139.99,
  //     "features": {
  //       "display": "TFT",
  //       "batteryLife": "4 days",
  //       "waterResistance": "10 meters",
  //       "sensors": ["Heart Rate", "Calorie Tracker"],
  //       "connectivity": ["Bluetooth 4.1"]
  //     },
  //     "releaseDate": "2022-08-25",
  //     "colorsAvailable": ["Red", "Black"]
  //   },
  //   {
  //     "id": 8,
  //     "brand": "HealthSync",
  //     "model": "CoreFit",
  //     "price": 279.99,
  //     "features": {
  //       "display": "OLED",
  //       "batteryLife": "7 days",
  //       "waterResistance": "30 meters",
  //       "sensors": ["Heart Rate", "Sleep Monitor", "Body Composition"],
  //       "connectivity": ["Bluetooth 5.0", "Wi-Fi"]
  //     },
  //     "releaseDate": "2023-07-11",
  //     "colorsAvailable": ["Black", "Silver", "Green"]
  //   },
  //   {
  //     "id": 9,
  //     "brand": "MotionWear",
  //     "model": "TrackForce",
  //     "price": 319.99,
  //     "features": {
  //       "display": "AMOLED",
  //       "batteryLife": "9 days",
  //       "waterResistance": "75 meters",
  //       "sensors": ["Heart Rate", "GPS", "Stress Level"],
  //       "connectivity": ["Bluetooth 5.1", "Wi-Fi"]
  //     },
  //     "releaseDate": "2023-10-22",
  //     "colorsAvailable": ["Gray", "Black", "Blue"]
  //   },
  //   {
  //     "id": 10,
  //     "brand": "LifePulse",
  //     "model": "Infinity",
  //     "price": 399.99,
  //     "features": {
  //       "display": "Retina Display",
  //       "batteryLife": "12 days",
  //       "waterResistance": "150 meters",
  //       "sensors": ["ECG", "SpO2", "Heart Rate", "Sleep Tracker"],
  //       "connectivity": ["Bluetooth 5.2", "Wi-Fi", "NFC"]
  //     },
  //     "releaseDate": "2024-02-15",
  //     "colorsAvailable": ["Gold", "Silver"]
  //   }
  // ];

  const [watches, setWatches] = useState([]);
  // local fake json from project
  // useEffect(()=>{
  //   fetch('watches.json')
  //     .then(res => res.json())
  //     .then(data=> setWatches(data));
  // },[])
  // from github fake data
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mohima-mimino11/fake-json/refs/heads/main/watches.json')
      .then(res => res.json())
      .then(data=> setWatches(data));
  },[])

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
