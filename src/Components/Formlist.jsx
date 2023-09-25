import React from "react";
import { Button, Form } from "antd";
import FormInput from "./FormInput";
function Formlist({ name, color, parField }) {
  return (
    <div
      style={{
        backgroundColor: color,
        marginLeft: 40,
        marginTop: 20,
        borderLeft: "10px solid rgba(85, 85, 85, 1)",
        minWidth: "560px",
      }}
    >
      {" "}
      <Form.List name={parField ? [parField.name, "sublist"] : name}>
        {(fields, { add, remove }) => (
          <div
            style={{
              display: "flex",
              rowGap: 10,
              flexDirection: "column",
              padding: "0px 40px",
            }}
          >
            {fields.map((field) => (
              <Form.Item key={field.key + field.name}>
                <FormInput
                  remove={remove}
                  field={field}
                  color={
                    color === "rgba(255, 102, 0, 1)"
                      ? "rgba(0, 102, 204, 1)"
                      : "rgba(255, 102, 0, 1)"
                  }
                ></FormInput>
              </Form.Item>
            ))}

            <Button
              style={{
                width: fields.length === 0 ? 200 : "100%",
                background: "rgba(51, 51, 51, 1)",
              }}
              type="primary"
              onClick={() => {
                add();
              }}
              block
            >
              + Add Item
            </Button>
          </div>
        )}
      </Form.List>
    </div>
  );
}

export default Formlist;
