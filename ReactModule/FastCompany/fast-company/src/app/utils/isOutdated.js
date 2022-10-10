function isOutdated(date) {
    return Date.now() - date > 10 * 60 * 100;
}
export default isOutdated;
