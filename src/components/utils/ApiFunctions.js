import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:9192',
})


//function used to add a new room based on the picture , roomtype and roomprice
export async function addRoom(photo, roomType, roomPrice){
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice",roomPrice)


    const response = await api.post("/rooms/add/new-room", formData)
    if(response.status === 201) {
        return true
    }else{
        return false
    }
}

//function used to get all room types 
export async function getRoomTypes(){
    try {
        const roomTypes = await api.get("/rooms/room-types")
        return roomTypes.data
    } catch (error) {
        console.log(error.getMessage())
        throw new Error("Error fetching room types.")
    }
}


