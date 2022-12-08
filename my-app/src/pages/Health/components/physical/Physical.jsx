import "./physical.scss"

export default function physical() {
  return (
    <div className="physical" id="physical">
      <h1> Physical Fitness</h1>
      <ul>
        <li> Weekly schedule </li>
        <li> Fall workout outfits</li>
        <li> Yoga </li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/databaee.png" alt=""/>
          <h3>Weekly schedule</h3>
        </div>
        <div className="item">
          <img src="assets/weatherdash.png" alt=""/>
          <h3>Fall workout outfits</h3>
        </div>
        <div className="item">
          <img src="assets/workdaysched.png" alt=""/>
          <h3>Yoga</h3>
        </div>
      </div>
    </div>
  )
}
