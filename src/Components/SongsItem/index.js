import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const SongsItem = props => {
  const {details, ondeletesong} = props
  const {id, imageUrl, name, genre, duration} = details
  const deletesong = () => {
    ondeletesong(id)
  }

  return (
    <li className="list">
      <div className="subcard">
        <img className="playlistimage" src={imageUrl} alt="track" />
        <div className="textcard">
          <p className="headingsong">{name}</p>
          <p className="genrepara">{genre}</p>
        </div>
      </div>
      <div className="subcard">
        <p className="durationpara">{duration}</p>
        <button
          className="deletebutton"
          type="button"
          onClick={deletesong}
          data-testid="delete"
        >
          {' '}
          <AiOutlineDelete />{' '}
        </button>
      </div>
    </li>
  )
}

export default SongsItem
