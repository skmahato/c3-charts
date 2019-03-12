import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const CardViewHeader = ({ title, className, children, noBorder}) => (
  <section className={`card-view__header ${noBorder ? 'card-view__header--no-border' : ''} ${className || ''}`}>
    <h3 className="card-view__header__title">{title}</h3>
    {children}
  </section>
);

CardViewHeader.propTypes = {
  title: PropTypes.any,
  className: PropTypes.string,
  noBorder: PropTypes.bool
};

export const CardViewBody = ({ className, scrollable, children }) => (
  <section className={`card-view__body ${scrollable ? 'scrollable' : ''} ${className || ''}`}>{children}</section>
);

CardViewBody.propTypes = { className: PropTypes.string, scrollable: PropTypes.bool };

const CardView = ({ title, className, bodyClassName, children }) => {
  if (title) {
    return (
      <section className={`card-view ${className || ''}`}>
        <CardViewHeader title={title} />
        <CardViewBody className={bodyClassName}>{children}</CardViewBody>
      </section>
    );
  }
  return <section className={`card-view ${className || ''}`}>{children}</section>;
};

CardView.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  bodyClassName: PropTypes.string
};

export default CardView;
