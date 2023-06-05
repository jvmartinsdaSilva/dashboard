export const homeRouter = (req, res) => {
    const values = req.body
    // const itsNull = Object.keys(values).some(value => !values[value])
    Object.keys(values).map(value => values[value] ?? console.log("dados incompletos"))

    console.log(values)

    
}