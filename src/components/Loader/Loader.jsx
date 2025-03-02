import { SyncLoader } from 'react-spinners';

const override = {
  position: 'fixed',
  display: 'block',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  margin: '0 auto',
  borderColor: 'var(--blue)',
  zIndex: '999',
};

const Loader = ({ loading }) => {
  return (
    <SyncLoader
      loading={loading}
      cssOverride={override}
      size={25}
      color="var(--blue)"
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
