const randomId = () => {
    const id = (Math.random() * 10).toString(36)
    return id.split(".")[1]
}

export const createDefaultDataset = () => {
    return {
        id: randomId(),
        label: "Product",
        data: [10, 5],
        backgroundColor: "#a7a5a9",
        borderColor: "#a7a5a9"
        
    }
}

export const createDefaultLabel = () => {
    return{
        id: randomId(),
        label: "info"
    }
}

export  const defaultGraph = {
    header: {
        id: randomId(),
        title: "Novo Gráfico",
        description: "Descrição",
        type: "Bar"
    },
    datas: {
        labels: [
            {
            id: randomId(),
            label: "jan"
            },
            {
            id: randomId(),
            label: "fev"
            }
    ],
        datasets: [
            createDefaultDataset()
        ],
    }
}