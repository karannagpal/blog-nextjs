import { Alert } from 'react-bootstrap';

const PreviewAlert = () => {
  return (
    <Alert variant='info'>
      This is preview mode <Alert.Link href='#'>Click here to exit</Alert.Link>
    </Alert>
  );
};

export default PreviewAlert;
