// Write your code here.
import './index.css'

//  banner component making in jsx syntax.

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  const cardClass = `${className} card-container`
  return (
    <li className={cardClass}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="button-style" type="button">
          show More
        </button>
      </div>
    </li>
  )
}

export default Banner
