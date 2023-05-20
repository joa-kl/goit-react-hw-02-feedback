import React, { Component } from "react";
import propTypes from 'prop-types';
import css from './Feedback.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((option, index) => (
            <button
                key={index}
                onClick={() => onLeaveFeedback(option)}
                className={css.feedbackbtn}
            >
                {option}
            </button>
        ))}
    </div>
)
