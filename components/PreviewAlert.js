import { Alert } from 'react-bootstrap';

const PreviewAlert = () => {
  return (
    <Alert variant='info'>
      This is preview mode <Alert.Link href='/api/exit-preview'>Click here to exit</Alert.Link>
    </Alert>
  );
};

export default PreviewAlert;
