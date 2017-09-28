var React = require("react")
var PropTypes = require("prop-types")
class Post extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.String,
  body: PropTypes.String
};
module.exports = Post
