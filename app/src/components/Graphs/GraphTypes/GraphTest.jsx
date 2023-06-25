import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import {Line} from  "react-chartjs-2"

Chart.register(CategoryScale)

import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;

    canvas{
        width: 100%;
    }

`
export const GraphTest = ({datas, type}) => {

    const labels = datas?.labels.map(item => item?.label)

    return (
        <Container>
            {console.log("Gráfico: ", datas)}
            <Bar key={datas} // Lembrete - Remover assim que não ser mais necessário
                data={{
                    labels: labels,
                    datasets: datas.datasets
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
        </Container>
    )
}