const User = require("./model/user.model.js")
const bcrypt = require('bcryptjs')
const jwt = require('')
const registerUser=async(req,res)=>{
  try{  const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
        res.json({ status: 'ok' })
    }
    catch(err){
        es.json({ status: 'error', error: 'Duplicate email' })
	}
    
    const Auth= async(req,res )=>{
        const user= await  User.find(req.body.email)
        
            if (!user) {
                return { status: 'error', error: 'Invalid login' }
            }
        
            const isValidPassword= await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (isValidPassword){
                const token = jwt.sign({
                    name: user.name,
                    email: user.email,
                },
                'secret123')

            
            return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}

    }
    const verifyToken=async(req,res)=>{
        const token= req.headers['x-aces-token']
        
            try {
                const decoded = jwt.verify(token, 'secret123')
                const email = decoded.email
                const user = await User.findOne({ email: email })
        
                return res.json({ status: 'ok', quote: user.quote })
            } catch (error) {
                console.log(error)
                res.json({ status: 'error', error: 'invalid token' })
            }
        
    }
    const UpdateUser= async(req,res)=>{
        const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
    }


}