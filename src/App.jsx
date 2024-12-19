import Background from "./components/Background"
import Foreground from "./components/Foreground"



const App = () => {
  return (
    <div className='w-full h-[100dvh] bg-zinc-800 relative'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App