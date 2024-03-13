import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {
  return (
    <>
     <div className='mx-auto container'>
      <Header></Header>
    <hr />
     <div className='flex gap-4 mt-4'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
     </div>
     

     </div>
      
    </>
  )
}

export default App
