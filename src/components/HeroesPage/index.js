import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadHeroes} from '../../AC'
import HeroesGrid from '../HeroesGrid'
import SearchInput from '../SearchInput'
import Loading from '../Loading'
import './style.scss'

class HeroesPage extends Component{
  static propTypes = {
    heroes: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {search: ''};
  }
  componentDidMount() {
    const {loadHeroes, isLoading, isLoaded} = this.props;
    if (!isLoading && !isLoaded) loadHeroes()
  }

  render() {
    const {heroes, isLoading, isError, match} = this.props;

    const heroesGrid = isError.length > 0 ? <div>{isError}</div> : <div className='heroes-page-row'>
      <HeroesGrid title='Strength' match={match} search={this.state.search} bgColor='green' filter='str' data={heroes}/>
      <HeroesGrid title='Intelligence' match={match} search={this.state.search} bgColor='blue' filter='int' data={heroes}/>
      <HeroesGrid title='Agility' match={match} search={this.state.search} bgColor='red' filter='agi' data={heroes}/>
    </div>;

    const loading = <Loading />;

    return (
      <div className='heroes-page'>
        <div className="container">
          <SearchInput onSearch={this.handleSearchChange}/>

          {isLoading ? loading : heroesGrid}
        </div>
      </div>
    )
  }

  handleSearchChange = (value) => {
    this.setState({
      search: value
    })
  }
}

export default connect((state) => ({
  heroes: state.heroes.entities.valueSeq().toArray(),
  isLoading: state.heroes.loading,
  isLoaded: state.heroes.loaded,
  isError: state.heroes.error
}), {loadHeroes})(HeroesPage);