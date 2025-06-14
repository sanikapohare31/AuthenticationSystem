// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


// const Register = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3000/api/user/register', form);
//       if (res.data.success) {
//         toast.success('Registered successfully!');
//         setTimeout(() => navigate('/login'), 1000);
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (err) {
//       toast.error('Registration failed.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" onChange={handleChange} required />
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
