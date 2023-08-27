import './TripPage.css'
import {Link} from "react-router-dom"

function TripPage() {
  return (
    <div class = "photos">
    <div class = "side">
      <button></button>
    <div>
    <h1 class = "head">Trips</h1>
      <Link to ="/" style={{ textDecoration: 'none' }}>
        <h2 class = "sideTitle">w/Nathan</h2>
      </Link>
    </div>
    </div>
    </div>
  );
}

export default TripPage;