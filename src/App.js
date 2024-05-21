
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Students from './Components/Students';
import Favstudent from './Components/fstudents';
import "./index.css"
import { useState } from 'react';

function App() {
  const [studentarr, setstudent] = useState([
    { id: 1, name: "Priya", disabled: false },
    { id: 2, name: "Kannan", disabled: false },
    { id: 3, name: "Manoj", disabled: false },
    { id: 4, name: "Dhamu", disabled: false },
    { id: 5, name: "Pragathi", disabled: false },
    { id: 6, name: "Ram kumar", disabled: false }
  ])

  const [favarr, setfavstudent] = useState([])
  return (
    <div>
      <BrowserRouter>
        <nav className='bg-blue-400 m-2 p-2 text-xl flex gap-4 underline'>
          <Link to={"/"}>List of Students</Link>
          {"    "}
          <Link to={"/favstudent"}>Favourite Students</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Students studentarr={studentarr} favarr={favarr} setfavstudent={setfavstudent} setstudent={setstudent} />}></Route>
          <Route path='/favstudent' element={<Favstudent studentarr={studentarr} favarr={favarr} setfavstudent={setfavstudent} setstudent={setstudent} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;
