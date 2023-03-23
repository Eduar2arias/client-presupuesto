

export const createId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
}

export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha)
    const option ={
        year:'numeric',
        month:'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', option)

}


const invertirNum = (num , acc ="") => {
    let numToString = num.toString()
    let newArr = numToString.split("")
    if (!num ) {
            return Number(acc)
    }
    acc =   acc + newArr.pop()
    let stringToNum = newArr.join("")
     numToString = Number(stringToNum)

    return invertirNum( numToString , acc)

  
}


console.log(invertirNum(123));