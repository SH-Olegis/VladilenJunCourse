import React from "react";
import QualitiesForm from "../components/ui/qualitiesForm";
import {useQualities} from "../hooks/useQualities";
const AddQualityPage = () => {
    const {addQuality} = useQualities();

    const handleSubmit = (data) => {
        addQuality(data)
    }

    return (
        <>
            <h1>Add Quality</h1>
            <QualitiesForm onSubmit={handleSubmit}/>
        </>
    );
};

export default AddQualityPage;
