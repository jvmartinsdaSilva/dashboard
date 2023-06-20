import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'


Chart.register(CategoryScale)

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    overflow: auto;

`

export const GraphTest = () => {
    return (
        <Container>
            <Bar
                data={{
                    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
                    datasets: [
                        {
                            label: "Tv",
                            data: [14, 25, 38, 98, 110, 150, 160, 45],
                            backgroundColor: "#0202ff",
                            borderColor: "#0202ff"
                        },
                        {
                            label: "Books",
                            data: [60, 89, 45, 12,47 , 20, 10, 15, 30],
                            backgroundColor: "#1BCA04",
                            borderColor: "#1BCA04"
                        }
                    ]
                }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: ""
                        }
                    }
                }}
            />
        </Container>
    )
}