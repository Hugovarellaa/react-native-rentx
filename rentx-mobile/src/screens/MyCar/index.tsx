import { useEffect, useState } from "react";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/axios";
import { MyCarContainer } from "./styles";

export function MyCar() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchCar(){
      try {
        const response = await api.get(`/schedules_byuser?user_id=1`)
        console.log(response.data)
        setCars(response.data)
      }catch (error){
        console.log(error)
      }finally {
        setLoading(false)
      }
    }
    fetchCar()
   }, [])

  return (
    <MyCarContainer />
  )
}
