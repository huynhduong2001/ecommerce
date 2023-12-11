import { Avatar, Box, Grid, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-75">April 5, 2023</p>
            </div>
          </div>
          <Rating readOnly precision={.5} value={4.5} name="half-rating"></Rating>
          <p>
            nice product!
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
