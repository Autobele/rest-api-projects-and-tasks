export default function hello(req, res, next) {
    console.log('Hello');
    next();
}