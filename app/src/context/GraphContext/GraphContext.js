import { createContext, useState, useContext } from "react";
import { UserContext } from "../User/UserContext";

import { createDefaultGraph, createDefaultLabel ,createDefaultDataset  } from "@/constants/graphStructure";

export const GraphContext = createContext({
    allGraphs: [],
    graphOn: {},
    graphMethods: {},
})


export const GraphProvider = ({ children }) => {
    const {user} = useContext(UserContext)

    const [allGraphs, setAllGraphs] = useState(user.graphs)//Lembrete, modificar para salvar todos os gráficos OU adicionar um aviso de que o gráfico tem modificações não salva
    const [graph, setGraph] = useState()

    class graphMethods{
        toggleGraph = (graph) => setGraph(graph)

        newGraph = () => setGraph(createDefaultGraph())

        attGraphs = (newGraphs) => setAllGraphs(newGraphs)

        modifyHeader = (newHeader) => {

            const newGraph = {
                header: newHeader,
                datas: graph.datas
            }
            setGraph(newGraph)

        }

        addLabel = () => {
            const newLabel = createDefaultLabel()
            const labels = graph.datas.labels

            labels.push(newLabel)

            const newGraph = {
                header: graph.header,
                datas: {
                    labels: labels,
                    datasets: graph.datas.datasets
                }
            }
            setGraph(newGraph)
        }

        modifyLabels = (newLabel) => {
            const labels = graph.datas.labels

            labels.map(label => {
                if(label.id == newLabel.id) {
                    label.label = newLabel.label
                } 
            })

            const newGraph = {
                header: graph.header,
                datas: {
                    labels: labels,
                    datasets: graph.datas.datasets
                }
            }
            setGraph(newGraph)
        }

        removeLabel = (labelId) => {
            const labels = graph.datas.labels
            const newLabels = labels.filter(label => label.id !== labelId)

            const newGraph = {
                header: graph.header,
                datas: {
                    labels: newLabels,
                    datasets: graph.datas.datasets
                }
            }
            setGraph(newGraph)
        }

        modifyDatasets = (id, datas) => {
            const defaultDataset = createDefaultDataset()

            const newDatasets = graph.datas.datasets.filter(item => item.id !== id)
            newDatasets.unshift(datas ?? defaultDataset)
    
            const newGraph = {
                header: graph.header,
                datas: {
                    labels: graph.datas.labels,
                    datasets: newDatasets
                },
            }
            setGraph(newGraph)
        }

        removeDataset = (id) => {
            const newDatasets = graph.datas.datasets.filter(item => item.id !== id)
            const newGraph = {
                header: graph.header,
                datas: {
                    labels: graph.datas.labels,
                    datasets: newDatasets
                },
            }
            console.log("ola2")
            setGraph(newGraph)

        }

        // addDataset = () => {
        //     const newDataset = createDefaultDataset()
        //     const datasets = graph.datas.datasets 
        //     datasets.unshift(newDataset)

        //     const newGraph = {
        //         header: graph.header,
        //         datas: {
        //             labels: graph.datas.labels,
        //             datasets: datasets
        //         },
        //     }
        //     setGraph(newGraph)

        // }

        getDataset = (id) => {
            const datasets = graph.datas.datasets
            const dataset = datasets.filter(data => data.id === id)
            return dataset[0]
        }
    }


    return (
        <GraphContext.Provider value={{ allGraphs: allGraphs, graphOn: graph, graphMethods}}>
            {children}
        </GraphContext.Provider>
    )
}