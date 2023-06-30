import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'

import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'

Chart.register(CategoryScale)

import * as S from "./style"

export const GraphIndex = ({ datas, type }) => {

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: ""
            }
        },
        hover: "index",
    }

    const GraphTypes = {
        Bar: <Bar data={datas} options={options}/>,
        Line: <Line data={datas} options={options} />,
    }

    return (
        <S.Container>
            {GraphTypes[type]}
        </S.Container>
    )

}