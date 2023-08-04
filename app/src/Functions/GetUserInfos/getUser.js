export const getUserInfos = async id => {
    // const apiUrl = "http://localhost:8080"
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"
    
    const datas = await fetch(`${apiUrl}/dashboard/userInfos/${id}`)
    const user = await datas.json()

    return user
    
}