import { Suspense } from 'react'
import './App.css'
import Bottles from './bottols/Bottles/Bottles'

function App() {

  // const bottlePromise = fetch('./data.json').then(res => res.json())

  const bottlePromise = fetch('./data.json').then(res=>res.json());
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
