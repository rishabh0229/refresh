let dic={}
if (process.env.ENV==="production"){
    dic.PORT=process.env.PORT
    dic.mongo_url="atlas"
}
else 
{
    dic.PORT=3333
    dic.mongo_url="localhost"

}
module.exports=dic