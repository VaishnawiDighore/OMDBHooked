import { Stack } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import * as React from "react";
const FavMovie = ({ data }) => {
  return (
    <>
      <Stack>
        <Card sx={{ boxShadow: "1px 1px 10px rgba(0,0,0,0.5)" }}>
          <CardContent>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              {data.Title}
              <hr />
            </Typography>
          </CardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              image={
                data.Poster !== "N/A"
                  ? data.Poster
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              }
            />
            <CardContent>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                {data.Year}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </>
  );
};

export default FavMovie;
