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

    if (this.props.error) {
      return (
        <ul>
          <li>{`Error: ${this.props.error.status} ${this.props.error.statusText}`}</li>
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
