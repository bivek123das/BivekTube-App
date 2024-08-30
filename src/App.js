
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { useDispatch, useSelector} from 'react-redux'
import {createBrowserRouter} from 'react-router-dom'
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';
import { toggleTheme } from './utils/themeSlice';
import Search from "./components/Search";
import Error from './components/Error';



function App() {

  const darkMode = useSelector((store)=>store.theme.darkMode);
  const dispatch = useDispatch();
  
  const handleToggle = ()=>{
    dispatch(toggleTheme());
  }


   const darkModeButton = (
      <button onClick={handleToggle} className='theme border-solid outline-none border-black border-[0.5px] px-2 py-1 rounded-2xl'><i class="fa-regular fa-moon pr-2"></i><span>{darkMode? 'Light Theme':'Dark Theme'}</span></button>
)

    return(
      <div className={darkMode?' text-white hover:bg-gray-900':' text-black hover:bg-gray-100'} style={{backgroundColor: darkMode ?'#2a3541':'#ffffff'}}>
         <Head btn={darkModeButton}/>
         <Body/>
      </div>
    )
}


export const appRouter = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[{
    path:'/',
    element:<MainContainer/>
  },
  {
    path:'watch',
    element:<Watchpage/>
  },
  {
    path:'search',
    element:<Search/>
  }
]
}])




export default App;
