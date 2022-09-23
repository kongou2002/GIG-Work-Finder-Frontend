import React from 'react'
import PropTypes from 'prop-types'
import Userfront from "@userfront/react";

Userfront.init("wn99xm6n");

const SignupForm = Userfront.build({
    toolId: "bkkkak",
});

const Register = props => {
  return (
    <SignupForm />
  )
}


export default Register