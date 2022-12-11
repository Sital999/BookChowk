const errorHandler=async(err,req,res,next)=>{
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode).json({ msg: err.message });
}

module.exports =errorHandler