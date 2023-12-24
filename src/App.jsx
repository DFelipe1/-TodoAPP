import { GroupTask } from "./components/GroupTasks"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Cover } from "./components/Cover"
import { Find } from "./components/Find"




function App() {

  return (
    <div className="container">
      <div className="content">
        <Header/>
        <main className="main">
          <Find/>
          <GroupTask/>
        </main>

        <Footer/>
      </div>
      <Cover/>
    </div>
    
  )
}

export default App
