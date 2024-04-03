import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1664303013273-56121108954e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1688804790068-4a0978939cd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://media.istockphoto.com/id/464542668/photo/freezing.jpg?s=612x612&w=is&k=20&c=nOOjToYHbzfdmCLM-iv9e0IHrIj0C9NDJYRNlbk607g=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1066533618/photo/adorable-little-boy-playing-at-rainy-day.webp?b=1&s=170667a&w=0&k=20&c=tQU9N67mSH3E1w_sqwxcnLIQH4Q8SLHd8V-TJbRVPFY=";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temp={info.tempMin}&deg;C</p>
              <p>Max Temp={info.tempMax}&deg;C</p>
              <p>
                The weather can be described as {info.weather} and feels like{" "}
                {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
