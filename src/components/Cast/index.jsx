import { Box, Card, CardMedia, CardContent, Typography  } from '@mui/material'

export default function Cast({ cast }) {
    return (
        <Box className="d_flex  js_center mt_3">
            <Box className='w_60' sx={{
                display: 'flex',
                overflowX: 'auto',
                p: 1,
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }}>
                {cast.map((actor) => (
                    <Card key={actor.id} sx={{ minWidth: 160, m: 1 }}>
                        <CardMedia
                            component="img"
                            height="240"
                            image={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {actor.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                as {actor.character}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>

    )
}