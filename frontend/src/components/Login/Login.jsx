// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3000/api/user/login', form);
//       if (res.data.success) {
//         localStorage.setItem('token', res.data.token);
//         toast.success('Login successful!');
//         setTimeout(() => navigate('/dashboard'), 1000);
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (err) {
//       toast.error('Login failed.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
