// all the error that are going to get handled over are - OPERATIONAL ERROR
// means we expected these error to happen

class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
      this.statusCode = statusCode;
      this.isOperational = true;
  
      // capturing error stack trace
      Error.captureStackTrace(this, this.contructor);
    }
  }
  
  module.exports = AppError;
  