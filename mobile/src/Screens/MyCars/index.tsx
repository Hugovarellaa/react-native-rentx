import { useEffect, useState } from "react";
import { CarDto } from "../../dtos/CarDto";
import { api } from "../../services/axios/api";
import { MyCarsContainer } from "./styles";

export function MyCars() {
  const [cars, setCars] = useState<CarDto[]>([])
  const [loading, setLoading] = useState(true)


  async function fetchCars() {
    try {
      const response = await api.get(`/schedules_byuser?user_id=1`)
      setCars(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])
  return (
    <MyCarsContainer>

    </MyCarsContainer>
  )
}