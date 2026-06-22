/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const FIELD_CLASSES = 'w-full box-border px-4 py-3.5 text-base text-theme-blue font-light rounded-xl border border-gray-300 bg-white shadow-sm placeholder-gray-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-theme-purple/30 focus:border-theme-purple';

export const Form = (props) => {
  const {
    id, name, value, type, placeholder, className, errorResponse,
  } = props;

  const [hasError, setHasError] = useState(null);

  let pattern;
  if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === 'number') pattern = /^[0-9]{10}$/;

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === 'email') {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === 'number') {
      if (event.target.validity.valid) props.onChange(target);
      if (!pattern.test(event.target.value)) {
        setHasError(errorResponse);
      } else {
        setHasError(null);
        props.onChange(target);
      }
    } else {
      props.onChange(target);
    }
  };

  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className={[FIELD_CLASSES, 'min-h-36 resize-y', className].join(' ')}
        onChange={onChange}
        rows="6"
        required
      />
    );
  }

  if (type === 'number') {
    return (
      <div className="flex w-full flex-col">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          className={[FIELD_CLASSES, className].join(' ')}
          onChange={onChange}
          required
        />
        {hasError && (
          <span className="mt-1 text-sm text-white bg-red-500 p-1 rounded">
            {hasError}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={[FIELD_CLASSES, className].join(' ')}
        onChange={onChange}
        required
      />
      {hasError && (
        <span className="mt-1 text-sm text-white bg-red-500 p-1 rounded">
          {hasError}
        </span>
      )}
    </div>
  );
};

Form.defaultProps = {
  id: undefined,
  errorResponse: 'Please match the requested format.',
  type: '',
  placeholder: '',
  className: '',
};

Form.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorResponse: PropTypes.string,
};
