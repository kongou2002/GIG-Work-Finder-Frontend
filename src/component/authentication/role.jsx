import { Box } from '@mui/material'
import React from 'react'

function role() {
  return (
    <div style={{ display: 'inline-block'}}>
        <form>
          <input name="role" id="applicant" type="radio" value="Applicant" checked />
          <label for="applicant" style={{paddingRight:'5px'}}>Applicant</label>
          <input name="role" id="recruiter" type="radio" value="Recruiter" />
          <label for="recruiter">Recruiter</label>
        </form>
    </div>
  )
}

export default role