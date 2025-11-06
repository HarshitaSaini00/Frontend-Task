import React, { useMemo, useState } from 'react'

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/'

export default function App() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [statusText, setStatusText] = useState('')
	const [submitting, setSubmitting] = useState(false)
	const [errors, setErrors] = useState({})

	const isValidEmail = useMemo(() => {
		if (!email) return false
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
		return emailRegex.test(email)
	}, [email])

	function validateFields() {
		const newErrors = {}
		if (!name.trim()) newErrors.name = 'Name is required'
		if (!email.trim()) newErrors.email = 'Email is required'
		else if (!isValidEmail) newErrors.email = 'Enter a valid email'
		if (!phone.trim()) newErrors.phone = 'Phone is required'
		if (!message.trim()) newErrors.message = 'Message is required'
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	async function handleSubmit(event) {
		event.preventDefault()
		setStatusText('')
		if (!validateFields()) return
		try {
			setSubmitting(true)
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, phone, message }),
			})
			if (response.ok) {
				setStatusText('Form Submitted')
				setName('')
				setEmail('')
				setPhone('')
				setMessage('')
				setErrors({})
			} else {
				const text = await response.text()
				setStatusText(text || 'Submission failed')
			}
		} catch (error) {
			setStatusText('Network error. Please try again.')
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<div className="page">
			<header className="header">
				<div className="container">
					<div className="brand">EZ Labs</div>
					<nav className="nav">
						<a href="#home">Home</a>
						<a href="#contact">Contact</a>
					</nav>
				</div>
			</header>

			<main className="main" id="home">
				<section className="hero container">
					<div className="hero-text">
						<h1>Let’s talk about your project</h1>
						<p>We’ll get back to you shortly.</p>
					</div>
					<div className="card" id="contact">
						<h2>Contact Us</h2>
						<form onSubmit={handleSubmit} noValidate>
							<div className="field">
								<label htmlFor="name">Name</label>
								<input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" aria-invalid={Boolean(errors.name)} />
								{errors.name && <span className="error">{errors.name}</span>}
							</div>

							<div className="field">
								<label htmlFor="email">Email</label>
								<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} />
								{errors.email && <span className="error">{errors.email}</span>}
							</div>

							<div className="field">
								<label htmlFor="phone">Phone</label>
								<input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9876543210" aria-invalid={Boolean(errors.phone)} />
								{errors.phone && <span className="error">{errors.phone}</span>}
							</div>

							<div className="field">
								<label htmlFor="message">Message</label>
								<textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" aria-invalid={Boolean(errors.message)} />
								{errors.message && <span className="error">{errors.message}</span>}
							</div>

							<div className="actions">
								<input className={`status ${statusText ? 'visible' : ''}`} value={statusText} readOnly aria-live="polite" />
								<button type="submit" disabled={submitting}>
									{submitting ? 'Submitting...' : 'Submit'}
								</button>
							</div>
						</form>
					</div>
				</section>
			</main>

			<footer className="footer">
				<div className="container">© {new Date().getFullYear()} EZ Labs</div>
			</footer>
		</div>
	)
}


