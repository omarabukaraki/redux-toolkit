import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counterSlice';
import AuthComponentT from './components/AuthComponentT';
import PostsComponent from './components/PostsComponent';


function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.counter.value);
   
  return (
  <>
    {/* <div style={{display:'flex'}}>
      <button onClick={()=>{
        dispatch(decrement());
      }} style={{ margin: '10px' }}>-</button>
      <h1>{selector}</h1>
      <button onClick={()=>{
        dispatch(increment());
      }} style={{ margin: '10px' }}>+</button>
    </div>
    <AuthComponentT/> */}
    <PostsComponent/>
    
     

  </>
  );
}

export default App;
