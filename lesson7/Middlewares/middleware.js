export const addDate = (req, res, next) => {
    req.currentDate = new Date();
    next();
};

export const printDate = (req, res, next) => {
    console.log(req.currentDate)
    next();
};

export function blockDays(req, res, next) {
    const now = req.currentDate;

    if ((now.getDay() == 5 && now.getHour() > 12) || (now.getDay() == 6 && now.getHour() < 10)) {
        res.status(400).json({ error: "האתר חסום היום, נסה ביום אחר..." });
    } else {
        next();
    }
};

export const ErrorM=(error,req,res,next)=>{
     res.status(error.status||500)
        .json({error:{massage:"...",type:"server error",stack:error.stack}})
};

export const PageNotFound=(req,res,next)=>{
    const error=new error("the page is Not Found");
    error.status=404;
    next(error);
}

