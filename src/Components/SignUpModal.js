import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import Onboarding from "./Onboarding";

const SignUpModal = () => (
    <Modal trigger={<Button>Sign Up</Button>}>
      <Modal.Header>Wedding Planner Info</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
        
            <Onboarding />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
  
  export default SignUpModal