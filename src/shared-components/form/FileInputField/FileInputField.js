import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const FileInputField = ({ name, label, description, defaultImage }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(defaultImage);
  const handleFileUpload = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (image) {
      setImageUrl(URL?.createObjectURL(image));
    }
  }, [image]);

  const fileInput = useRef(null);
  return (
    <Card>
      <CardActionArea onClick={() => fileInput.current.click()}>
        <CardMedia component="img" height="140" image={imageUrl} />
        <CardContent>
          <Typography>{label}</Typography>
        </CardContent>
        <input
          type="file"
          hidden
          onChange={handleFileUpload}
          ref={fileInput}
        ></input>
      </CardActionArea>
    </Card>
  );
};
export default FileInputField;
