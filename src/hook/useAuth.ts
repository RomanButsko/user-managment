import { useAppSelector } from './useSelector'

export const useAuth = () => useAppSelector((state) => state.auth)
