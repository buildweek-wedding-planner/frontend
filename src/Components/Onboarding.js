import React, { Component } from 'react'
import { Button, Icon, Modal,Form, Input, TextArea, Select, Checkbox } from 'semantic-ui-react'

class NestedModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header>Sign Up Complete</Modal.Header>
        <Modal.Content>
          <p>We look forward on working with you</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const Onboarding = () => (

  <Modal trigger={<Button>Sign Up</Button>}>
    <Modal.Header>Sign Up</Modal.Header>
    <Modal.Content image>
      {/* <div className='image'>
        {/* <Icon name='right arrow' /> 
      </div> */}
      <Modal.Description>

  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='About Me'
      placeholder='I like/love to'
    />
    <Form.Field
      control={Checkbox}
      label={{ children: 'I agree to the Terms and Conditions' }}
    />   
    <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Confirm'
        label=''
    />
    </Form>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default Onboarding
