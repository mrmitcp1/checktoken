export const  checkToken = async (req,res,next)=>{
    let token = req.body.token
    if(token==='1'){
            console.log('token is ok');
            next()
    }else{
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
}