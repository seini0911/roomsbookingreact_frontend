import React, { useState } from 'react'
import { addRoom } from '../utils/ApiFunctions'
const AddRoom = () => {

    const [newRoom, setNewRoom]  = useState({
        photo: null,
        roomType: "",
        roomPrice: ""
    })

    const [imagePreview, setImagePreview] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    const handleRoomInputCHange = (room)=>{
        const name = room.target.name
        let value =  room.target.value

        if(name == "roomPrice"){
            if(!isNaN(value)){
                value.parseInt(value)
            }else{
                value = ""
            }

        }

        setNewRoom({...newRoom, [name]: value})

    }

    const handleImageChange = (e)=>{
        const selectedImage = e.target.files[0]
        setNewRoom({...newRoom, photo: selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }


    const handleSubmit  = async (e)=>{
        e.preventDefault()

        try {
            const successAdd = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
            
            if(successAdd != undefined){
                setSuccessMessage("A new room was added successfully")
                setNewRoom({ photo: null, roomType: "", roomPrice: ""})

                setImagePreview("")
                setErrorMessage("")
            }else{
                setErrorMessage("Error adding a new room")
            }


        } catch (error) {
            console.log(error.getMessage())
            setErrorMessage(error.message)
        }
    }


  return (
    <div>AddRoom</div>
  )
}

export default AddRoom