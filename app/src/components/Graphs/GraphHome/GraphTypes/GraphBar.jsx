import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import * as S from "./style"

Chart.register(CategoryScale)


export const GraphBar = ({datas, type}) => {

    const labels = datas?.labels.map(item => item?.label)
    const datasets = datas.datasets

    return (
        <S.Container>
            {/* {console.log("Gráfico: ", datas)} */}
            <Bar key={datas} // Lembrete - Remover assim que não ser mais necessário
                data={{
                    labels: labels,
                    datasets: datasets.map(dataset => {
                        const dataValues = dataset.data.map(data => data.label)

                        return{
                            label: dataset.label,
                            data: dataValues,
                            backgroundColor: dataset.backgroundColor,
                            borderColor: dataset.borderColor
                        }
                    })
                }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: ""
                        }
                    },
                    hover: "index",

                }}
                />
        </S.Container>
    )
}