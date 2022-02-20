import React, { Component } from "react";
import "../../utilities.css";

import { Form, Select, Input, Modal, InputNumber } from "antd";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
};

class AddMapModal extends Component {
  render() {
    return (
      <Modal
        title="Add a map"
        visible={this.props.visible}
        confirmLoading={this.props.loading}
        onOk={this.props.handleOk}
        onCancel={this.props.handleCancel}
      >
        <Form {...layout} onValuesChange={this.props.onValuesChange}>
          <Form.Item name="id" label="Map ID">
            <Input />
          </Form.Item>
          <Form.Item name="mod" label="Mod">
            <Select placeholder="Select a mod">
              <Select.Option value="NM">Nomod</Select.Option>
              <Select.Option value="HD">Hidden</Select.Option>
              <Select.Option value="HR">Hard Rock</Select.Option>
              <Select.Option value="DT">Double Time</Select.Option>
              <Select.Option value="FM">Freemod</Select.Option>
              <Select.Option value="HDHR">Hidden + Hard Rock</Select.Option>
              <Select.Option value="HT">Half Time</Select.Option>
              <Select.Option value="EZ">Easy</Select.Option>
              <Select.Option value="CV">Convert</Select.Option>
              <Select.Option value="EX">Ex</Select.Option>
              <Select.Option value="TB">Tiebreaker</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="index" label="Index">
            <InputNumber min={1} max={64} />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default AddMapModal;
