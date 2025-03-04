export const getUserInfos = async id => {
    const apiUrl =  process.env.NEXT_PUBLIC_API_URL

    
    const datas = await fetch(`${apiUrl}/userInfos/${id}`)
    const user = await datas.json()

    return user
    
}