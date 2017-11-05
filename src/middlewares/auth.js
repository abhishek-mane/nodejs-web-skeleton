module.exports = (req, res, next) => {
    console.log('Authentication midddleware');
    next();
}