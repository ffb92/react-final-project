import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
  Image,
} from "@nextui-org/react";

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Ersetzen Sie YOUR_KEY durch Ihren tatsächlichen API-Schlüssel
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Cologne&units=metric&APPID=d502fb7f386668e8f26a09e9e5b18218"
        );
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <Card>
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={60}
            radius="sm"
            src="https://www.timeanddate.de/scripts/cityog.php?title=Wetter%20in&tint=0x007b7a&city=K%C3%B6ln&state=Nordrhein-Westfalen&country=Deutschland&image=cologne1"
            width={600}
          />
        </CardHeader>
        <Divider />
        <CardBody className="text-center">
          <p>Das aktuelle Wetter in Köln</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-center">
          {weatherData ? (
            <div>
              <h2>{weatherData.name}</h2>
              <p>Temperatur: {weatherData.main.temp}°C</p>
              <p>Wetter: {weatherData.weather[0].description}</p>
            </div>
          ) : (
            <Spinner size="lg" />
          )}
        </CardFooter>
      </Card>
    </main>
  );
};

export default WeatherScreen;
