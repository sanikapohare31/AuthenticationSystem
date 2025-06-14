"use client"

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "./AuthForm.css"

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setForm({ name: "", email: "", password: "" })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const url = isLogin ? "http://localhost:3000/api/user/login" : "http://localhost:3000/api/user/register"

    try {
      const res = await axios.post(url, form)
      if (res.data.success) {
        if (isLogin) {
          localStorage.setItem("token", res.data.token)
          toast.success("Login successful!")
          navigate("/dashboard")
        } else {
          toast.success("Registered successfully! Please log in.")
          setIsLogin(true)
        }
      } else {
        toast.error(res.data.message)
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong!"
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-container auth-form-enter">
      <h2>{isLogin ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={toggleMode} className="toggle-link">
          {isLogin ? "Create Account" : "Login"}
        </span>
      </p>
    </div>
  )
}

export default AuthForm
