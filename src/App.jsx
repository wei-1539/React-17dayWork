import './App.css';
import { HashRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';




// logout 元件
function Logout(){
  let navigate = useNavigate()
 return <button onClick={()=>{
  {navigate('/login')}
 }}>登出</button>
}


const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout/>
    </>
  )
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path='/resister' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
