

 export const asyncCatch = theFun => (req, res, next) => {
    Promise.resolve(theFun(req,res,next)).catch((e)=>next(e))
}