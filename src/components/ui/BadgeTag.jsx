import React from 'react';

const BadgeTag = ({ badgeLabel, badgeType = "default", customClasses = "" }) => {
  let badgeClasses;

  if (badgeType === "reverse") {
    badgeClasses = `
      bg-accent-primary/20 dark:bg-accent-secondary/20
      text-accent-secondary dark:text-accent-primary
      border border-accent-primary/30 dark:border-accent-secondary/30
      shadow-[0_0_8px_var(--color-scroll-secondary)]
      hover:shadow-[0_0_14px_var(--color-scroll-secondary)]
    `;
  } else if (badgeType === "custom") {
    badgeClasses = customClasses;
  } else {
    badgeClasses = `
      bg-accent-secondary/20 dark:bg-accent-primary/20
      text-accent-primary dark:text-accent-secondary
      border border-accent-secondary/30 dark:border-accent-primary/30
      shadow-[0_0_8px_var(--color-scroll-primary)]
      hover:shadow-[0_0_14px_var(--color-scroll-primary)]
    `;
  }

  return (
    <span
      className={`
        inline-block align-middle mb-4 px-3 py-1 rounded-full
        cursor-default select-none
        ${badgeClasses}
        transition-all duration-500 backdrop-blur-md
      `}
    >
      <span className="text-sm font-body font-semibold">
        {badgeLabel}
      </span>
    </span>
  );
};

export default BadgeTag;
