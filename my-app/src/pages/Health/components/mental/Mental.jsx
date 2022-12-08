import "./mental.scss"

export default function mental() {
  return (
    <div className="mental" id="mental">
      <h1> Mental Wellbeing </h1>
      <ul>
        <li> Finding Work/Life Balance </li>
        <li> Breathing techniques </li>
        <li> Screentime and mental health </li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/databaee.png" alt=""/>
          <h3> Finding Work/Life Balance </h3>
        </div>
        <div className="item">
          <img src="assets/weatherdash.png" alt=""/>
          <h3>Breathing techniques</h3>
        </div>
        <div className="item">
          <img src="assets/workdaysched.png" alt=""/>
          <h3>Screentime & mental health</h3>
        </div>
      </div>
    </div>
  )
}
