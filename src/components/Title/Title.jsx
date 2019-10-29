import React from 'react';
import PropTypes from 'prop-types';
import style from './title.scss';

const Title = ({ title }) => <div className={style.hello}>{title}</div>;

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
