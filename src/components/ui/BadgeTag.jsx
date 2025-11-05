import React from 'react';

const BadgeTag = ({badgeLabel, badgeType="default", customClasses = ""}) => {

    let badgeClasses;
    
    if(badgeType == "reverse") {
        badgeClasses = "bg-accent-primary/10 dark:bg-accent-secondary/10 text-accent-secondary dark:text-accent-primary"
    } else if(badgeType == "custom") {
        badgeClasses = customClasses
    } else {
        badgeClasses = "bg-accent-secondary/10 dark:bg-accent-primary/10 text-accent-primary dark:text-accent-secondary";
    }


    return (
        <span
            className={`
                inline-block align-middle mb-4 px-3 py-1 rounded-full
                ${badgeClasses}
                transition-colors duration-500 backdrop-blur-lgborder
                border-accent-secondary/30 shadow-lg shadow-accent-primary/10
            `}
        >
            <span className="text-sm font-body font-semibold">
                {badgeLabel}
            </span>
        </span>
    )
};

export default BadgeTag;