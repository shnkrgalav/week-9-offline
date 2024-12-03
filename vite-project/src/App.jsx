import { useState, useEffect,useRef } from 'react'
 
 

function App() {

  const inputRef = useRef();

function focusOnInput(){
  // behave the same as document.getElementById("name")
  inputRef.current.focus();
}
 return (
   <div>
    Sign Up
    <input ref={inputRef}  type ={"text"} />
    <input type={"text"} /> 
    <button onClick={focusOnInput}>Submit</button>
   </div>
 )

}

























//   const [currentTab, setCurrentTab] = useState("feed");
   
//   useEffect( function(){
//     console.log("api request has been send to backend from " +currentTab)
    
//   },[currentTab])
 
// return <div>
//   <button onClick={ function(){
//     setCurrentTab("Feed")
//   }} style={{color:currentTab =="feed" ? "red": "black"}}>Feed</button>

//   <button onClick={ function(){
//     setCurrentTab("Notifications")
//   }} style={{color:currentTab =="Notifications" ? "red": "black"}}>Notifications</button>

//   <button onClick={ function(){
//     setCurrentTab("Messages")
//   }} style={{color:currentTab =="Messages" ? "red": "black"  }}>Messages</button>

//   <button onClick={ function(){
//     setCurrentTab("Jobs")
//   }} style={{color:currentTab == "Jobs" ? "red":"black"}}>Jobs</button>  

// </div>
  















//const [count, setcount] = useState(1);

  // function incrementCount(){
  //   //setcount(c=>c+1);
  // }

  // useEffect( function(){
  // console.log("before setInterval");
  //   setInterval(incrementCount, 1000);

  // }, [])
  // useEffect( function(){

  //   console.log("the count has been updated to "+ count);

  // }, [count]) // if you pyt count inside the dependency array it will update whenever dependency changes 
   
  // return(
  // <div>
  //   {count}
  // </div>
  // )












// const ToggleMessage = () => {


//   let [isVisible, setIsVisible] =  useState(true); // useState return [,]array of two variables
   
//   function toggle(){
//     setIsVisible(!isVisible);// change the value from true to false
//   }


//   return (
//     <div>
//       <button onClick={toggle}>Toggle Message</button>
//       {isVisible && <p>This mesage is conditionally rendered</p>}
//     </div>
//   )
// }

export default App
