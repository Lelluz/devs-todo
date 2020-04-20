import React from 'react'
import { Modal, Button } from 'antd'
import '../styles/NewTaskModal.scss'
import NewTaskForm from './NewTaskForm'

class NewTaskModal extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className={'action-bar-item'}>
        <Button type="primary" onClick={this.showModal}>
          Nuovo task
        </Button>
        <Modal
          title="Nuovo task"
          visible={this.state.visible}
          centered
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <NewTaskForm></NewTaskForm>
        </Modal>
      </div>
    );
  }
}

export default NewTaskModal