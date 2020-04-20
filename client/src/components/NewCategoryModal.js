import React from 'react'
import { Modal, Button } from 'antd'
import '../styles/NewCategoryModal.scss'
import NewCategoryForm from './NewCategoryForm'

class NewCategoryModal extends React.Component {
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
          Nuova categoria
        </Button>
        <Modal
          title="Nuova categoria"
          visible={this.state.visible}
          centered
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <NewCategoryForm></NewCategoryForm>
        </Modal>
      </div>
    );
  }
}

export default NewCategoryModal