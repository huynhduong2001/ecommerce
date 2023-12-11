import { Box, Grid } from "@mui/material";
import AddressCard from "../Addresscard/AddressCard";
import OrderTraker from "./OrderTraker";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
    return ( 
        <div className="px-5 lg:px-20">
            <div>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
                <AddressCard/>
            </div>
            <div className="py-20">
                <OrderTraker activeStep={3}/>
            </div>
            <Grid container className="space-y-5">
                {[1,1,1,1,1].map((item)=> 
                    <Grid item container sx={{alignItems:"center", justifyContent:"space-between"}} className="shadow-xl rounded-md border p-5">
                        <Grid item xs={6}>
                            <div className="flex items-center space-x-4">
                                <img 
                                    className="w-[5rem] h-[5rem] object-cover object-top"
                                    src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" 
                                    alt="adsasa" />
                                <div className="space-y-2 ml-5">
                                    <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                                    <p className="space-x-5 opacity-50 text-xs font-semibold">
                                        <span>Color: Pink</span>
                                        <span>Size: M</span>
                                    </p>
                                    <p>Seller: Duong</p>
                                    <p>$199</p>
                                </div>
                            </div>
                            
                        </Grid>

                        <Grid item>
                            <Box sx={{color:deepPurple[500]}}>
                                <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>
                    </Grid>
                )}
                
            </Grid>
        </div>
     );
}
 
export default OrderDetails;