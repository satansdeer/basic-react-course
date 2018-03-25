import React from 'react'

import { PasswordForgetForm } from '../components/PasswordForget'

const PasswordForgetPage = () => (
  <div
    style={{
      background: '#fff',
      margin: 'auto',
      boxShadow:
        '0 0 0 1px rgba(16,22,26,.1),0 4px 8px rgba(16,22,26,.2),0 18px 46px 6px rgba(16,22,26,.2)',
      borderRadius: 8,
      padding: 20,
      maxWidth: 500,
    }}
  >
    <h1>Reset Password</h1>
    <PasswordForgetForm />
  </div>
)

export default PasswordForgetPage
