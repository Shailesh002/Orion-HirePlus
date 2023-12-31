
import React from 'react'
import { Row, Col, Form, Input, Button, message } from "antd";
import { useDispatch } from 'react-redux';
import { registerUser} from '../redux/actions/userActions';
import Link from 'antd/es/typography/Link';


function Register() {
    const dispatch=useDispatch()

    function register(values){
        if(values.password!==values.confirmpassword){
            message.error('passwords not matching')
        }
        else{
            console.log(values)
            dispatch(registerUser(values))
        }
    }
  return (
    <div className="login-bg" style={{backgroundImage: "url('https://wallpaperaccess.com/full/1393334.jpg')", backgroundSize: 'cover' , height: '100vh'}}>
    <div className="login">
            <Row justify='center'>

                <Col lg={10} sm={24} className="bs p-3" style={{backgroundColor :'white',  borderRadius: '10px'}}>
                    <h3>Register</h3>
                    <hr/>

                    <Form layout="vertical" onFinish={register}>
                        <Form.Item label="username" name='username' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="password" name='password' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="confirmpassword" name='confirmpassword' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Button htmlType="submit" className='mb-3'>Register</Button><br/>
                        <Link to='/login' className='mt-3'> Already Registered? </Link>
                    </Form>
                </Col>
            </Row>
        </div>
        </div>
  )
}

export default Register
