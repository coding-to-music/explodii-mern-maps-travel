/* eslint-disable global-require */
import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import { StyledReview, StyledStar, UtilSvg } from "./ReviewBoxStyle";

import { setStarRatingStyle } from "../utils/StarFunctionStyle";

import UpdateSvg from "../../assets/svgs/chat.svg";
import DeleteSvg from "../../assets/svgs/bin2.svg";

export const ReviewBox = (props) => {
    // Props
    const {
        userReview,
        isExcursion,
        setIsUpdateReviewOpen,
        setSelectedReview,
        setIsDeleteReviewOpen,
    } = props;
    const { review, rating, user, tour } = userReview;
    const { photo: userPhoto, name: userName } = user;
    const { name: ExcursionName } = tour;

    //variables
    const userImage = `${process.env.REACT_APP_URL}/api/v1/users/images/${userPhoto}`;
    const worldImage = require("../../assets/img/users/world.jpg").default;
    const quoteSvg = require("../../assets/svgs/quotes.svg").default;
    const starSvg = require("../../assets/svgs/star-review.svg").default;

    const excursionStyle = `
    
    `;

    return (
        <StyledReview img={worldImage} svg={quoteSvg} isExcursion={isExcursion}>
            <img src={userImage} alt="user" />
            <p>{review}</p>
            <p>{isExcursion ? userName : ExcursionName}</p>
            <span />
            <ul>
                {[1, 2, 3, 4, 5].map((el) => {
                    return (
                        <StyledStar
                            style={setStarRatingStyle(rating, el)}
                            key={el}
                            id={el}
                            svg={starSvg}
                            // rating={el <= 4.5 ? null : 4.5}
                        />
                    );
                })}
            </ul>
            {!isExcursion && (
                <div style={{ display: "flex", marginLeft: "auto" }}>
                    <UtilSvg
                        svg={UpdateSvg}
                        style={{ marginRight: "1rem" }}
                        onClick={() => {
                            setIsUpdateReviewOpen(true);
                            setSelectedReview(userReview);
                        }}
                    />
                    <UtilSvg
                        svg={DeleteSvg}
                        onClick={() => {
                            setIsDeleteReviewOpen(true);
                            setSelectedReview(userReview);
                        }}
                    />
                </div>
            )}
        </StyledReview>
    );
};

ReviewBox.propTypes = {
    isExcursion: PropTypes.bool.isRequired,
    userReview: PropTypes.shape({
        review: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        user: PropTypes.shape({
            photo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
        tour: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    }).isRequired,
    setIsUpdateReviewOpen: PropTypes.func,
    setSelectedReview: PropTypes.func,
    setIsDeleteReviewOpen: PropTypes.func,
};

ReviewBox.defaultProps = {
    setIsUpdateReviewOpen: () => {},
    setSelectedReview: () => {},
    setIsDeleteReviewOpen: () => {},
};
