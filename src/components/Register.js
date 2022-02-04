import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return <div className='login'>
     <div className='login-wrapper'>
     <div className='login-left'>
              <h3 className='login-logo'>Social Media</h3>
              <p className='login-desc'>Social Media giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
          </div>
          <div className='login-right register'>
              <div className='register-title'>
                 <h3 className='register-title-title'>Đăng ký</h3>
                 <p className='register-title-desc'>Nhanh chóng và dễ dàng.</p>
              </div>
              <form className='login-box'>
                  <div className='input-name'>
                       <input type='text' className="input-form" placeholder='Họ' required/>
                       <input type='text' className="input-form" placeholder='Tên' required/>
                  </div>
                  <input type='email' className="input-form" placeholder='Địa chỉ Email' required/>
                  <input type='password' className="input-form" placeholder='Mật khẩu mới' required/>
                  <Link to ="/home" className='btn-form'><button className='btn-login'>Đăng ký</button></Link>
                  
              </form>
              <Link to="/"><button className='btn-register'>Đăng nhập</button></Link>
              
          </div>
     </div>
  </div>;
};

export default Register;
