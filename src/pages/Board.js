
import { Grid, Card, CardActionArea } from '@mui/material';


import CardContent from '@mui/material/CardContent';

function BoardFormation() {
   const  doAction= ()=>{
       alert('Item triggered')
    }
    return (
        <div className='container'>
            <Grid container my={4}>
                <Grid item xs>
                    <div className='container'>
                        <Card className='item'>

                            <CardActionArea>
                                <CardContent>
                                    <li className='items'>Create UI<span onClick={doAction} className='action'>update</span></li>
                                    <li className='items'>Fill Documents <span className='action'>update</span></li>
                                    <li  className='items'>Deploy application <span className='action'>update</span></li>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </Grid>
                <Grid item xs>
                    <Card className='item'>Card 1</Card>
                </Grid>
                <Grid item xs>
                    <Card className='item'>Card 2</Card>
                </Grid>

            </Grid>
        </div>

    )
}

export default BoardFormation;