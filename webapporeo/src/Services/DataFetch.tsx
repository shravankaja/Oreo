import { responsiveFontSizes } from '@material-ui/core'
import axios from 'axios'

export { }

export const fetchPieChartValues = () => {
    return new Promise((resolve,reject) => {
        axios.get("http://localhost:3000/PieChart").then(resp => {
            resolve(resp.data[0])
        })
    })
}

export const fetchBarchart = () => {
    return new Promise((resolve,reject) => {
        axios.get(" http://localhost:3000/dataBar").then(resp => {
            resolve(resp.data)
        })
    } )
}

export const fetchSmallTextAreaChartsData = () => {
    return new Promise((resolve,reject) => {
        axios.get(" http://localhost:3000/smallTextAreaChart").then(resp => {
            resolve(resp.data)
        })
    })
}

export const fetchCurveAreaChartsData = () => {
    return new Promise((resolve,reject) => {
        axios.get("http://localhost:3000/dataCurveChart").then(resp => {
            resolve(resp.data[0])
        })
    })
}