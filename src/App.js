import './App.css';
import {useState, useRef } from 'react'


function App() {


  const [qq,setQuestion] = useState([
    {q: Math.floor(Math.random() * 9999)},
    {q: Math.floor(Math.random() * 9999)}
  ]);

  const [ans,setAnswer] = useState(
    {answer:0}
  );

  const [btn,setBtn] = useState(
    {b:"+"}
  )

  const [inputAns,setInputAns] = useState(
    {a:0}
  )

  const [correctAns,setCorrectAns] = useState(
    {a:""}
  )


  const calResetBtn = () => {

    if(btn.b==="+"){
      plusAnswer();
      setBtn({b:"Reset"});
    }else{
      resetQuestion();
      setBtn({b:"+"});
      setInputAns({a:""})
      setCorrectAns({a:""})
    }
    
  }

  const plusAnswer = () =>{
    const ans = qq[0].q + qq[1].q;
     setAnswer({answer:ans})
    let ga = inputAns.a
    
    console.log(ans)
    console.log(ga)
    //答えを照合
    if(Number(ans)===Number(ga)){
      setCorrectAns({a:"Correct!"})
    }else{
      setCorrectAns({a:"Wrong"})
    }

  }
  
  const resetQuestion = () => {
    setQuestion([
      {q: Math.floor(Math.random() * 10000)},
      {q: Math.floor(Math.random() * 10000)}
    ]);
    setAnswer({answer:""})
  }

const handleOnChange = (e) => {
  const inputElement = e.target.value;
  setInputAns({a:inputElement})
}

  



    return (
      <>
        <p>{qq[0].q} + {qq[1].q}</p>
       
        <button onClick={calResetBtn}>{btn.b}</button>
        <p> <input type="number" onChange={handleOnChange} value={inputAns.a}/></p>
        <p>{ans.answer}</p>
        <p>{correctAns.a}</p>
      </>
    );
}


export default App;
