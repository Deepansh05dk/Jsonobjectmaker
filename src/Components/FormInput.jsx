import React, { useState } from "react";
import { Form, Input, Space, Select, Button } from "antd";
import Formlist from "./Formlist";
function FormInput({ remove, field, color }) {
  const [fieldType, seFieldType] = useState("");
  return (
    <>
      {" "}
      <Space>
        {" "}
        <Form.Item noStyle name={[field.name, "fieldName"]}>
          <Input
            style={{
              width: 200,
            }}
            placeholder="Field Name"
          />
        </Form.Item>
        <Form.Item noStyle name={[field.name, "fieldType"]}>
          <Select
            style={{
              width: 200,
            }}
            placeholder="Field Type"
            onChange={(value) => {
              seFieldType(value);
            }}
          >
            <Select.Option value="nested">nested</Select.Option>
            <Select.Option value="string">string</Select.Option>
            <Select.Option value="number">number</Select.Option>
          </Select>
        </Form.Item>
        <Button type="dashed" onClick={() => remove(field.name)}>
          remove
        </Button>
      </Space>
      {fieldType === "nested" ? (
        <Formlist name={"sublist"} color={color} parField={field} />
      ) : (
        <></>
      )}
    </>
  );
}

export default FormInput;
