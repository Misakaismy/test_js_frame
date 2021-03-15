class UserController{
    getuser = (req, res)=>{
        const name = "Jack";
        const {token} = req.query;
        res.status(200).json({message:`${token}.${name}`});
    }

    postuser = (req, res)=>{
        const {body} = req;
        const {name, phone} = body;
        const profile = {
            name,
            phone,
        }
        res.status(200).json({profile});
        console.log(body);
        console.log(req);
    } 
}

export default new UserController();