exports.sendSuccess = (res, data, message = 'Success') => {
    res.json({ success: true, message, data });
};
exports.sendError = (res, message, statusCode = 500) => {
    res.status(statusCode).json({ success: false, message });
};
  