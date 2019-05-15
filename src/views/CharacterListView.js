import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { starWarsFetch } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.starWarsFetch();
  }

  render() {
    if (this.props.fetching) {
      return (
        <ul>
          <li>Fetching People</li>
        </ul>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  return {
    ...charsReducer
  }
}

export default connect(
  mapStateToProps,
  {
    starWarsFetch,
  }
)(CharacterListView);
