/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    debugger;
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = array => {
    const employeeObj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObj
}

const createEmployeeRecords = arrOfArrays => {
    return arrOfArrays.map(arr => createEmployeeRecord(arr))
}

function createTimeInEvent(date) {
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    })
    return this
}

function createTimeOutEvent(date) {
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(obj => obj.date === date)
    const timeOut = this.timeOutEvents.find(obj => obj.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(employee){
        return  employee.firstName === firstName
    })
}

function calculatePayroll(arrayOfRecords){
    return arrayOfRecords.reduce(function(accumulator, currentRecord){
        return accumulator + allWagesFor.call(currentRecord)
    }, 0)
}

