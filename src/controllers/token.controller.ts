export class TokenController {
    static token(req,res){
        res.status(200).json({
            message : 'ok'
        })
    }
}