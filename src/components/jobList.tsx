export function JobList({jobs}){
    return(
        <ul>
        {jobs.map(item=> (
          <li>
          <h2>{item.title}</h2>
          <h2> payment: {item.payment} per month</h2>
        </li>
        ))}
        </ul>
    )
}