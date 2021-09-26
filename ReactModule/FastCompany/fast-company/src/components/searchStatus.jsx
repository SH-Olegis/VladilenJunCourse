import React from "react";

const SearchStatus = ({countUsers}) => {
    const renderPhrase = () => {
        if (countUsers === 0) return "Никто с тобой не тусанет";

        let endPeoples = "";

        if (countUsers % 10 === 1) endPeoples = "человек";
        else if (
            countUsers % 10 >= 2 &&
            countUsers % 10 <= 4 &&
            (countUsers > 14 || countUsers < 5)
        )
            endPeoples = "человека";
        else endPeoples = "человек";

        return `${countUsers} ${endPeoples} тусанет с тобой сегодня`;
    };
    const renderBgPhrase = () => (countUsers === 0 ? "danger" : "primary");

    return <h2>
        <span className={`badge bg-${renderBgPhrase()}`}>{renderPhrase()}</span>
    </h2>
}

export default SearchStatus