import { NowRequest, NowResponse } from '@vercel/node'
import jwt from 'jsonwebtoken'

const users = [
	{ username: 'admin', password: 'passwords' } // Replace with a secure way to store passwords
]

const secret = 'my-secret-key' // Use a secure, private key

export default (req: NowRequest, res: NowResponse) => {
	const { username, password } = req.body

	const user = users.find((u) => u.username === username && u.password === password)

	if (user) {
		const token = jwt.sign({ username: user.username }, secret, { expiresIn: '1h' })
		res.status(200).json({ token })
	} else {
		res.status(401).json({ message: 'Invalid credentials' })
	}
}
