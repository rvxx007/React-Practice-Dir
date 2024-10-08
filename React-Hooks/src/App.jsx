import ArrayStateCom from './useState/ArrayStateCom';
import CountStateCom from './useState/CountStateCom';
import SignUpForm from './useState/SignUpForm';

function App() {

  const styleVar = {border:"1px solid black",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"5px"
  }
return (
  <div>
    <div style={styleVar} className=''>
      <div style={styleVar}>
      <h1>Counter Example</h1>
      <CountStateCom/>
      </div>
      <div style={styleVar}>
        <h1>ArrayList Example</h1>
      <ArrayStateCom/>
      </div>
      <div style={styleVar}>
        <h1>Form Example</h1>
      <SignUpForm/>
      </div>
    </div>
  </div>
)
}

export default App
