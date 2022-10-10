import React, {useContext, useEffect, useState, useRef} from "react";
import qualityService from "../services/quality.service";
import {toast} from "react-toastify/dist/react-toastify.esm";

export const QualitiesContext = React.createContext()

export const useQualities = () => {
    return useContext(QualitiesContext)
}

export const QualitiesProvider = ({children}) => {
    const [qualities, setQualities] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const prevQualities = useRef()

    useEffect(() => {
        const getQualities = async () => {
            try {
                const {content} = await qualityService.fetchAll()
                setQualities(content)
                setIsLoading(false)
            } catch (error) {
                catchErrors(error)
            }
        }

        getQualities();
    }, [])

    const getQuality = (id) => {
        return qualities.find(quality => quality._id === id)
    }

    const updateQuality = async ({_id: id, ...data}) => {
        try {
            const {content} = await qualityService.update(id, data)

            setQualities(prevState =>
                prevState.map(quality => {
                    if(quality._id === content._id) {
                        return content
                    }

                    return quality
                })
            )

            return content
        } catch (error) {
            catchErrors(error)
        }
    }

    const addQuality = async (data) => {
        try {
            const {content} = await qualityService.create(data)

            setQualities((prevState) => [content, ...prevState])
        } catch (error) {
            catchErrors(error)
        }
    }

    const deleteQuality = async (id) => {
        prevQualities.current = qualities
        setQualities(prevState => prevState.filter(quality => quality._id !== id))

        try {
            await qualityService.delete(id)
        } catch (error) {
            setQualities(prevQualities.current)
            catchErrors(error)
        }
    }

    function catchErrors (error) {
        const { message } = error.response.data

        setError(message)
    }

    useEffect(() => {
        toast.error(error)
        setError(null)
    }, [error])

    return <QualitiesContext.Provider value={{qualities, getQuality, updateQuality, addQuality, deleteQuality}}>
        {!isLoading ? children : <h1>Qualities loading...</h1>}
    </QualitiesContext.Provider>
}