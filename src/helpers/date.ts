
function timeAgo(params: Date) {
    let timeunit = ""
    let timeamount = 0
    const dateNow = new Date()
    const msdiff = dateNow.getTime() - params.getTime()
    const datediff = msdiff / (1000 * 3600 * 24)
    if (datediff > 1) {
        timeamount = datediff
        timeunit = "days"
    } else if (datediff * 24 > 0) {
        timeamount = datediff * 24
        timeunit = "hours"
    } else {
        timeamount = datediff * 24 * 3600
        timeunit = "minutes"
    }
    const timeamountstr = Math.round(timeamount).toFixed(0)
    return { timeamount: timeamountstr, timeunit: timeunit }
}

export default timeAgo