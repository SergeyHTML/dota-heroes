import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {loadHeroes} from '../../AC'
import Loading from '../Loading'
import './style.scss'
import {connect} from 'react-redux'

class HeroItemPage extends Component {
  static propTypes = {
    heroes: PropTypes.object,
    match: PropTypes.object.isRequired
  };
  componentDidMount() {
    const {loadHeroes, hero} = this.props;
    if (!hero) loadHeroes()
  }

  render() {

    const {hero} = this.props;

    const groupObj = {
      'str': 'Strength',
      'int': 'Intelligence',
      'agi': 'Agility'
    };

    if (!hero){
      return(
          <div className='hero-item-page'>
            <div className="container">
              <div className="hero-item-page__loading">
                <Loading />
              </div>

            </div>
          </div>
      )
    }

    return (
      <div className='hero-item-page'>
        <div className="container">
          <h1 className='hero-item-page__ttl'>
            {hero.localized_name}
          </h1>

          <div className="hero-item-page">
            <div className="hero-item-page__left col">
              <div className="hero-item-page__left-img">
                <img src={`https://api.opendota.com${hero.img}`} alt=""/>
              </div>
            </div>
            <div className="hero-item-page__right col">
              <ul className="hero-item-page__stat-list">
                <li>
                  <strong className="hero-item-page__stat-list__attr">
                    Group:
                  </strong>
                  <span className="hero-item-page__stat-list__value">
                    {groupObj[hero.primary_attr]}
                  </span>
                </li>
                <li>
                  <strong className="hero-item-page__stat-list__attr">
                    Type attack:
                  </strong>
                  <span className="hero-item-page__stat-list__value">
                    {hero.attack_type}
                  </span>

                </li>
                <li>
                  <strong className="hero-item-page__stat-list__attr">
                    Roles:
                  </strong>
                  <span className="hero-item-page__stat-list__value">
                    {hero.roles.join(', ')}
                  </span>
                </li>
                <li>
                  <strong className="hero-item-page__stat-list__attr">
                    Pro win:
                  </strong>
                  <span className="hero-item-page__stat-list__value">
                    {hero.pro_win}
                  </span>
                </li>
                <li>
                  <strong className="hero-item-page__stat-list__attr">
                    Pro pick:
                  </strong>
                  <span className="hero-item-page__stat-list__value">
                    {hero.pro_pick}
                  </span>
                </li>
                <li>
                  <strong className="hero-item-page__stat-list__attr">
                    Move speed:
                  </strong>
                  <span className="hero-item-page__stat-list__value">
                    {hero.move_speed}
                  </span>
                </li>
                <li>
                  <strong className="hero-item-page__stat-list__attr">
                    Pro ban:
                  </strong>
                  <span className="hero-item-page__stat-list__value">
                    {hero.pro_ban}
                  </span>
                </li>
                <li>
                  <strong className="hero-item-page__stat-list__attr">
                    Legs:
                  </strong>
                  <span className="hero-item-page__stat-list__value">
                    {hero.legs}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state, {match}) => ({
  hero: state.heroes.getIn(['entities', match.params.name])
}), {loadHeroes})(HeroItemPage)