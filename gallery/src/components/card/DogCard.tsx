import { Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material"
import { FC } from "react"

interface CardProps {
  imgSrc: string,
  alt: string,
  breedName: string,
  paragraph: string
}

const DogCard: FC<CardProps> = ({ imgSrc, alt, breedName, paragraph }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
      <CardMedia
        sx={{ height:isSmallScreen ? 90 : 200 }}
        image={imgSrc}
        title={alt}
      />
      <CardContent>
        <Typography sx={{ mb: 4 }} gutterBottom variant="h5" component="div">
          {breedName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {paragraph}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DogCard