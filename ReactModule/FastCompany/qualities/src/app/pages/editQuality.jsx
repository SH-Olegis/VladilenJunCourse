import React, {useState} from "react";
import QualitiesForm from "../components/ui/qualitiesForm";
import {useParams} from "react-router-dom";
import {useQualities} from "../hooks/useQualities";

const EditQualityPage = () => {
    const id = useParams().id;
    const {getQuality, updateQuality} = useQualities();
    const quality = getQuality(id)
    const handleSubmit = (data) => {
        updateQuality(data)
    }

    return (
        <>
            {
                <>
                    <h1>Edit Quality Page</h1>
                    <QualitiesForm data={quality} onSubmit={handleSubmit}/>
                </>
            }
        </>
    );
};

export default EditQualityPage;
