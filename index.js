// Code your solution in this file!
const logDriverNames = (drivers) => {
    for(let driver of drivers){
        console.log(driver.name)
    }
}

const logDriversByHometown = (drivers, location) => {

    let driversWithLocation = drivers.filter(driver => driver.hometown === location)

    return logDriverNames(driversWithLocation)
}

const driversByRevenue = (drivers) => {

   return drivers.slice().sort((driverA, driverB) => driverA.revenue - driverB.revenue)
}

const driversByName = (drivers) => {

    return drivers.slice().sort((driverA, driverB) => driverA.name.localeCompare(driverB.name))
    
 }
 
 const totalRevenue = (drivers) => {
     return drivers.reduce((sum, driver) => sum + driver.revenue, 0)
 }

 const averageRevenue = (drivers) => {
    return totalRevenue(drivers)/drivers.length
 }
