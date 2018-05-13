import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Repo from '../components/Repo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doUserRepos } from '../../../actions/home/doUserRepos';

class UserRepos extends Component {
  componentDidMount() {
    let username = 'mohandere';
    this.props.doUserRepos(username);
  }

  render() {
    let { repos } = this.props;
    let pageContent = '';

    if (this.props.loading) {
      pageContent = <div className="userReposLoader">Loading...</div>;
    } else {
      pageContent = <ul className="repos">{repos.map((repo, i) => <Repo key={i} {...repo} />)}</ul>;
    }

    return (
      <div>
        <h3>Github Projects</h3>
        {pageContent}
      </div>
    );
  }
}

UserRepos.propTypes = {
  repos: PropTypes.array
};

const mapStateToProps = state => {
  return {
    repos: state.home.userRepos.repos,
    loading: state.home.userRepos.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      doUserRepos
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);
