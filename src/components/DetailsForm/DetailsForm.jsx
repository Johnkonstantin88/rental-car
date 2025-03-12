import { Formik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { StyledForm, StyledInput, StyledTextArea } from './DetailsForm.styled';
import CustomButton from '../CustomButton/CustomButton';

const initialValues = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

const toastStyles = {
  border: '1px solid var(--blue)',
  padding: '10px',
  fontSize: '16px',
  color: 'var(--blue)',
  backgroundColor: 'var(--white)',
};

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]{1}/, 'First symbol must be letter')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  bookingDate: Yup.string()
    .matches(
      /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
      'Choose future date in format <2025-01-01>'
    )
    .required('Required'),
});

const DetailsForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    try {
      const { bookingDate } = values;
      const isFutureDate =
        new Date(bookingDate).toISOString() > new Date().toISOString();

      if (!isFutureDate) {
        toast.error('To book a car, please select a date in the future.');
        return;
      }

      console.log(values);
      toast('This car has been successfully booked.');
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        <StyledForm>
          <StyledInput name="name" type="text" placeholder="Name*" />
          <StyledInput name="email" type="email" placeholder="Email*" />
          <StyledInput
            name="bookingDate"
            type="text"
            placeholder="Booking date"
          />
          <StyledTextArea name="comment" rows="6" placeholder="Comment" />
          <CustomButton variant="search" type="submit">
            Send
          </CustomButton>
        </StyledForm>
      </Formik>
      <Toaster toastOptions={{ style: toastStyles }} />
    </>
  );
};

export default DetailsForm;
