
exports.pUser = async (req, res) => {
    try{
        const {
            name,
            carne
        } = req.body

        res.status(200).json({"status":1,"message":"usuario creado", "data":{"name":name,"carne":carne}})
    }catch (error) {
        console.log(error)
        res.status(500).json({"status":0,"message":error, "data":{}})
    }
}