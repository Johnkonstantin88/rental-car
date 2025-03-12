import { useField } from 'formik';

export const MyTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div style={{ position: 'relative' }}>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            left: '20px',
            color: '#e53e3e',
          }}
        >
          {meta.error}
        </span>
      ) : null}
    </div>
  );
};

export const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea {...field} {...props} rows="3" />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </>
  );
};
