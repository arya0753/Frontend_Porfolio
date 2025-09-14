import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Typography } from "@mui/material";

const Box2 = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'transparent',
                    // height: 100,
                    borderRadius: 10,
                    // boxShadow: "inset 0 4px 10px rgba(0,0,0,0.6)",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    
                    // p: 2,
                }}
            >
                <Typography
                    sx={{
                        // border: '2px solid #fff',
                        backgroundColor: 'transparent',
                        textAlign: 'left',
                        // height: 100,
                        minWidth: {xs:0.7,md:.7},
                        
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'left',
                        borderRadius: 10,
                        p: 3,
                        gap: 1,
                    }}
                >
                    <Typography
                        sx={{
                            // border: '2px solid #fff',
                            fontSize:12,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            opacity: 0.7,
                            color: '#fff',
                            // mb: 2,
                        }}>
                        A Fullstack Developer
                    </Typography>

                    <Typography
                        sx={{
                            // fontFamily:'monospace',
                            // marginTop:"6px",
                            // marginBottom:"6px",
                            fontWeight: 'bold',
                            fontFamily:'MyFont-Bold',
                            fontSize: 15,
                            letterSpacing:1.5,
                            // fontWeight: 'normal',
                            textTransform:'uppercase',
                            // letterSpacing:4,
                            color: '#fff'
                        }}
                    >
                         Arya  Sunirmal.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 12,
                            // fontWeight: 'bold',
                            opacity: 0.7,
                            color: '#fff',
                        }}
                    >
                        A Software Developer <br /> Based in Banglore.
                    </Typography>


                </Typography>
                <Typography
                    sx={{
                        mt: 15,
                    }}
                >
                    <NavigateNextIcon
                        sx={{ color: '#fff', fontSize: 30, mt: 2 }}
                    />
                </Typography>
            </Box>

        </>
    )
}

export default Box2