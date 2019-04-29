import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './style.scss'

function HeroesGrid(props) {
  const search = props.search.toLowerCase();

  const el = props.data.map((item) => {
    const heroName = item.localized_name.toLowerCase();

    if (item.primary_attr === props.filter) {
      return <li key={item.id} style={{backgroundColor: props.bgColor || 'gray'}}
                 className={(search === '' || heroName.indexOf(search) > -1) ? 'active' : null}>
        <Link to={`/${item.name}`} >
          <img title={item.localized_name} src={`https://api.opendota.com${item.icon}`} alt={item.name} />
        </Link>
      </li>
    }

    return null
  });

  return (
    <div className='heroes-grid'>
      <h2 className='heroes-grid__ttl'>{props.title}</h2>
      <ul className='heroes-grid__list'>
        {el}
      </ul>
    </div>
  )
}

HeroesGrid.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  search: PropTypes.string,
  bgColor: PropTypes.string,
  match: PropTypes.object.isRequired,
};

export default HeroesGrid;