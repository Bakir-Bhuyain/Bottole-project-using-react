import { Suspense } from 'react'
import './App.css'
import Bottles from './bottols/Bottles/Bottles'

function App() {

  const bottlePromise = fetch('./data.json').then(res => res.json())
  // const localApi = [
  //   {id: 1, name: 'Pink Bottle', color: 'pink', metal:'stianless steel'},
  //   {id: 2, name: 'Pink Bottle', color: 'pink', metal:'stianless steel'},
  //   {id: 3, name: 'Pink Bottle', color: 'pink', metal:'stianless steel'},
  //   {id: 4, name: 'Pink Bottle', color: 'pink', metal:'stianless steel'},
  // ]
  return (
    <>
      <div>
        <h3>My awesome Water Bottle</h3>
        <Suspense fallback={<h3>Bottles are loading...</h3>}>
          <Bottles bottlePromise={bottlePromise}></Bottles>
        </Suspense>
      </div>
    </>
  )
}

export default App
