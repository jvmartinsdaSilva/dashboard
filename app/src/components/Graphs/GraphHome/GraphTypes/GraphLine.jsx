import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'

import * as S from "./style"

Chart.register(CategoryScale)


export const GraphLine = ({datas, type}) => {

    const datasFormat = {
        labels: datas?.labels.map(item => item?.label),
        datasets: datas.datasets.map(dataset => {
            const dataValues = dataset.data.map(data => data.label)

            return{
                label: dataset.label,
                data: dataValues,
                backgroundColor: dataset.backgroundColor,
                borderColor: dataset.borderColor
            }
        })
    }

    const labels = datas?.labels.map(item => item?.label)
    const datasets = datas.datasets

    return (
        <S.Container>
            {/* {console.log("Gráfico: ", datas)} */}
            <Line key={datas} // Lembrete - Remover assim que não ser mais necessário
                // data={{
                //     labels: labels,
                //     datasets: datasets.map(dataset => {
                //         const dataValues = dataset.data.map(data => data.label)

                //         return{
                //             label: dataset.label,
                //             data: dataValues,
                //             backgroundColor: dataset.backgroundColor,
                //             borderColor: dataset.borderColor
                //         }
                //     })
                // }}
                data={datasFormat}
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