import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return <div className='login'>
      <div className='login-wrapper'>
          <div className='login-left'>
              <h3 className='login-logo'>Social Media</h3>
              <p className='login-desc'>Social Media giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
          </div>
          <div className='login-right'>
              <form className='login-box'>
                  <input type='email' className="input-form" placeholder='Địa chỉ Email' required/>
                  <input type='password' className="input-form" placeholder='Mật khẩu' required/>
                  <Link to ='/home' className='btn-form'><button className='btn-login'>Đăng nhập</button></Link>
                  <p className='forgot-password'>Quên mật khẩu?</p>
              </form>
              <Link to ="/register"><button className='btn-register'>Tạo tài khoản mới</button></Link>
          </div>
      </div>
  </div>;
};

export default Login;
