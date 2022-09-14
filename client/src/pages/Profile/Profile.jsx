import React from "react";
import "./profile.css";

import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Typography,
  Row,
  Select,
} from 'antd';

import { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
// import { height, width } from '@mui/system'

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Profile() {
  const [form] = Form.useForm();
  const [Loading, setLoading] = useState(false);

  const [name, setName] = useState("Muhammad Ali");
  const [email, setEmail] = useState("alighouri@gmail.com");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("Rawalpindi");
  const [phone, setPhone] = useState("+92-334-0058007");
  const [birth, setBirth] = useState("26 Nov,2000");
  const [pass, setPass] = useState("");
  const [old, setOld] = useState("");
  const [confirm, setConfirm] = useState("");

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="92">+92</Option>
        <Option value="93">+93</Option>
      </Select>
    </Form.Item>
  );

  const onButtonClick = (e) => {
    console.log('Button Clicked')
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }


  return (
    <div style={{ bacgroundColor: "black" }}>
      {/* // header */}

      <div className="profile">
        <Row>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 8 }}
            xs={{ span: 24, push: 2 }}
          >
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="avatar"
              />
            </div>
          </Col>
          <Col
            lg={{ span: 16, push: 8 }}
            md={{ span: 16, push: 8 }}
            sm={{ span: 16, push: 8 }}
            xs={{ span: 24, pull: 3 }}
          >
            <div className="name">
              <div className="info">
                <h4>Muhammad Ali</h4>
                <h5>Project Manager</h5>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* // profile information */}










      <div
        className="profile"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="info">
          <h3>Profile Information</h3>
        </div>

        {/* first Row */}

        <div className='form1'>
          <Form {...layout}
            form={form}
            name="register"
            className='form'

            scrollToFirstError>




            <Form.Item className='forms' label="Name" name='username'
            >

              <Input
                className='input1'
                placeholder={name}
                prefix={<UserOutlined />}

                style={{
                  width: '340px',
                  position: 'relative',
                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  border: '1px solid #434343',

                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                maxLength={20}
                allowClear
              >
              </Input>

            </Form.Item>






            <Form.Item className='forms' label="Email" name='email'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },

              ]}
            >
              <Input
                className='input1'
                placeholder={email}
                style={{
                  width: '340px',
                  position: 'relative',


                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',

                  border: '1px solid #434343',

                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                prefix={<UserOutlined />}
                maxLength={20}
                allowClear
              >
              </Input>

            </Form.Item>







            <Form.Item className='forms' label="Contact" name='phone'
            >
              <Input
                className='cont'
                placeholder={phone}
                addonBefore={prefixSelector}

                maxLength={20}
                allowClear
                style={{
                  width: '340px',
                  position: 'relative',


                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
              >
              </Input>

            </Form.Item>






            <Form.Item className='forms' label="Birth Date" name='datepicker'>

              <DatePicker className='date'
                style={{
                  width: '340px',
                  position: 'relative',


                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }} placeholder={birth}></DatePicker>

            </Form.Item>






            <Form.Item className='forms' label="Address" name='address'>
              <Input
                className='input1'
                maxLength={20}
                allowClear
                style={{
                  width: '340px',
                  position: 'relative',


                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',

                  border: '1px solid #434343',

                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                placeholder={address}
              >
              </Input>

            </Form.Item>




            <Form.Item className='forms' label="Gender" name='gender'>


              <Select className='gen'
                style={{
                  width: '340px',
                  position: 'relative',


                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',


                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                allowClear
                placeholder={gender}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit"
                onClick={onButtonClick}>
                Register
              </Button>
            </Form.Item>

          </Form>


        </div>



      </div>

      {/* Reset Password */}

      <div
        className="profile"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="info">
          <h3>Reset Password</h3>
        </div>

        <div className='form1'>

          <Form {...layout}
            form={form}
            name="register"
            className='form'
            initialValues={{
              prefix: '92',
            }}
            scrollToFirstError>


            <Form.Item className='forms' label="Current Password:" name='password'

              hasFeedback>
              <Input.Password
                className='input1'
                placeholder={old}
                style={{
                  width: '340px',
                  position: 'relative',


                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  border: '1px solid #434343',

                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                maxLength={20}
                allowClear
              >
              </Input.Password>

            </Form.Item>






            <Form.Item className='forms' label="New Password" name='new password'

              hasFeedback>
              <Input.Password
                className='input1'
                placeholder={pass}
                style={{
                  width: '340px',
                  position: 'relative',


                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  border: '1px solid #434343',

                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                maxLength={20}
                allowClear
              >
              </Input.Password>

            </Form.Item>








            <Form.Item className='forms' label="Confirm New Pass" name='confirm'
              dependencies={['new password']}
              hasFeedback
              rules={[

                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('new password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}>
              <Input.Password
                className='input1'
                placeholder={confirm}
                style={{
                  width: '340px',
                  position: 'relative',


                  padding: '4px 11px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '10px',
                  border: '1px solid #434343',

                  transition: 'all 0.3s',
                  display: 'inline-flex'

                }}
                maxLength={20}
                allowClear
              >
              </Input.Password>

            </Form.Item>



            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit"
                onClick={onButtonClick}>
                Register
              </Button>
            </Form.Item>



          </Form>

        </div>





      </div>
    </div>
  );
}