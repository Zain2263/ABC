import {Grid, Button, Typography} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiQrcode, mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";
import "./home.css";
function Home() {

    return (
        <div className='bg'>
            <a href='/'><button style={{fontSize:'20px',float : 'left',backgroundColor : 'grey'}}> 
        Main
    </button> <br></br></a>
            <p className='member' style={{fontSize:'30px'}}>
                FAKE PRODUCT IDENTIFICATION : <br></br>
                    Team members :  <br></br>
                    M. Zain Hassan <br></br>
                    Abdul Mannan <br></br>
                    Muhammad Ali<br></br>
            </p>

            <Typography style={{margin:30}} variant="h2">
            React QR Code
            </Typography>

            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Link to="/qr_generator">
                    <Button variant="outlined" size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcode}
                        title="QR Generator"
                        size={10}
                        color="white"
                        />
                    </Button>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/qr_scanner">
                    <Button variant="outlined" size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={10}
                        color="white"
                        />
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        
        </div>
    );
  }
  
  export default Home;
  