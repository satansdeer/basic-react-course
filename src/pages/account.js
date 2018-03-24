import React from 'react'
import PropTypes from 'prop-types'

import { PasswordForgetForm } from '../components/PasswordForget'
import PasswordChangeForm from '../components/PasswordChange'
import withAuthorization from '../components/Session/withAuthorization'

import SignOutButton from '../components/SignOut'

const AccountPage = (props, { authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
    <SignOutButton />
  </div>
)

AccountPage.contextTypes = {
  authUser: PropTypes.object,
}

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(AccountPage)
