/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class streamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
   
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading.....</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps, { fetchStream })(streamShow);
