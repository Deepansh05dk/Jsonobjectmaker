import React, { useCallback } from "react";
import { Form, Typography } from "antd";
import FormList from "./Components/Formlist";
const App = () => {
  const [form] = Form.useForm();
  const convertObject = useCallback((obj) => {
    const result = {};
    if (obj.list) {
      for (const item of obj.list) {
        if (item === null || item === undefined) {
          result[""] = "";
        } else if (item.fieldType && item.fieldName) {
          if (item.fieldType === "nested") {
            result[item.fieldName] = convertObject({
              list: item.sublist ? item.sublist : [],
            });
          } else {
            result[item.fieldName] = item.fieldType;
          }
        } else if (item.fieldName) {
          result[item.fieldName] = "";
        } else {
          result[""] = item.fieldType;
        }
      }
    }

    return result;
  }, []);
  return (
    <>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        form={form}
        name="dynamic_form_complex"
        style={{}}
        autoComplete="off"
        initialValues={{
          list: [null],
        }}
      >
        <Form.Item>
          <FormList name="list" color={"rgba(0, 102, 204, 1)"}></FormList>
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {() => (
            <Typography>
              <pre>
                {JSON.stringify(convertObject(form.getFieldsValue()), null, 2)}
              </pre>
            </Typography>
          )}
        </Form.Item>
      </Form>
    </>
  );
};
export default App;
