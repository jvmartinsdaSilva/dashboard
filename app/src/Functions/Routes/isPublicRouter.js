import { APP_ROUTES } from "@/constants/appRoutes"

export const checkIsPublicRouter = router => {
    const publicRoutes = Object.values(APP_ROUTES.public)
    
    return publicRoutes.includes(router)
}