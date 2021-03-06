import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {whyDidYouUpdate} from 'why-did-you-update';

import * as UserActions from 'actions/user';
import UserList from 'components/users/UserList';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

class Users extends Component {
  constructor(props) {
    super(props);

    this.handleChangeClientState = this.handleChangeClientState.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  handleChangeClientState(newState) {
    console.log(newState);
  }

  render() {
    const {users} = this.props;
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
          title="React Babel Webpack Boilerplate"
          titleTemplate="Users - %s"
          defaultTitle="My Default Title"
          base={{target: '_blank', href: 'http://mysite.com/'}}
          meta={[
              {name: 'description', content: 'Helmet application'},
              {property: 'og:type', content: 'article'}
          ]}
          link={[
              {rel: 'canonical', href: 'http://mysite.com/example'},
              {rel: 'apple-touch-icon', href: 'http://mysite.com/img/apple-touch-icon-57x57.png'},
              {rel: 'apple-touch-icon', sizes: '72x72', href: 'http://mysite.com/img/apple-touch-icon-72x72.png'}
          ]}
          script={[
            // {src: 'http://include.com/pathtojs.js', type: 'text/javascript'},
            {type: 'application/ld+json', innerHTML: `{ "@context": "http://schema.org" }`}
          ]}
          onChangeClientState={this.handleChangeClientState} />
        <UserList users={users} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {users: state.userReducer.users};
};

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
