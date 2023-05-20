import React, { Component } from "react";
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((option, index) => (
            <button
                key={index}
                onClick={() => onLeaveFeedback(option)}
                // className={ }
            >
                {option}
            </button>
        ))}
    </div>
)