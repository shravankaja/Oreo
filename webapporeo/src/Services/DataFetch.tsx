import { responsiveFontSizes } from '@material-ui/core'
import axios from 'axios'

export { }

export const fetchPieChartValues = () => {
    return new Promise((resolve,reject) => {
        axios.get("https://oreodata.herokuapp.com/PieChart").then(resp => {
            resolve(resp.data[0])
        })
    })
}

export const fetchBarchart = () => {
    return new Promise((resolve,reject) => {
        axios.get("https://oreodata.herokuapp.com/dataBar").then(resp => {
            resolve(resp.data)
        })
    } )
}

export const fetchSmallTextAreaChartsData = () => {
    return new Promise((resolve,reject) => {
        axios.get("https://oreodata.herokuapp.com/smallTextAreaChart").then(resp => {
            resolve(resp.data)
        })
    })
}

export const fetchCurveAreaChartsData = () => {
    return new Promise((resolve,reject) => {
        axios.get("https://oreodata.herokuapp.com/dataCurveChart").then(resp => {
            resolve(resp.data[0])
        })
    })
}

export const fetchProductData = () => {
    return new Promise((resolve,reject) => {
        axios.get("https://oreodata.herokuapp.com/produts").then(resp => {
            
            resolve(resp.data)
        })
    })
}

export const fetchParticularProductData = (id:number) => {
    return new Promise((resolve,reject)=> {
        axios.get(`https://oreodata.herokuapp.com/produts/${id}`).then(resp => {
        console.log(resp.data)    
        resolve(resp.data)
        })
    })
}

