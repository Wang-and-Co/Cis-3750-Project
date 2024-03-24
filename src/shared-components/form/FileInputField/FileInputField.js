import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { FileUpload } from '@mui/icons-material';
import { useField } from 'formik';
import { useEffect, useRef, useState } from 'react';

const FileInputField = ({ name, label, description, defaultImage }) => {
  const [field, meta, helpers] = useField(name);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(defaultImage);
  const handleFileUpload = (e) => {
    setImage(e.target.files[0]);
    helpers.setValue(e.target.files[0]);
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
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt="image"
        ></CardMedia>
        <CardContent>
          <Typography align="center" variant="h6">
            {label}
          </Typography>
          <Typography align="center">{`Selected image: ${image?.name ?? 'None'}`}</Typography>
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
