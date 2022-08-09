import { useEffect, useState } from 'react'
import './App.css'
import { JobList } from './components/jobList'


function App() {
const [jobs, setJobs]=useState([
])

useEffect(()=>{
  fetch('http://localhost:4000/posts')
  .then(resp=>resp.json())
  .then(postsFromServer=>setJobs(postsFromServer))
},[])


  return (
    <div className="App">
     <h1>Xhulia's jobs</h1>
  <JobList
  jobs={jobs}
  />

<form onSubmit={(event)=>{
event.preventDefault()
fetch('http://localhost:4000/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'},
    body: JSON.stringify({
      title:event.target.title.value,
      payment:event.target.payment.value
    }
    )
})


let answers={
  title:event.target.title.value,
  payment:event.target.payment.value
}
setJobs([...jobs, answers])
}
}>
<input name="title" placeholder="enter title"></input>
<input name="payment" placeholder="enter payment"></input>
  <button> Submit </button>
</form>
    </div>
  )
}

export default App
