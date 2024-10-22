import { useEffect, useState } from "react";
import { FaWind } from "react-icons/fa";
import clouds from "./assets/clouds.png";
import clear from "./assets/clear.png";
import haza from "./assets/haza.png";
import smoke from "./assets/smoke.png";
import rain from "./assets/rain.png";
// import clear from "./assets/clear.png";
function App() {
  const [input, setInput] = useState("");
  const [humaidity, setHumaidaty] = useState(62);
  const [wind, setWind] = useState(6.17);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  console.log(input);

  let search = async () => {
    try {
      console.log(input);

      const APIKEY = "98092c54b629e85a8a8adc138825a7b2";
      const url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIKEY}`
      );
      const response = await url.json();
      setWind(Math.round(response.wind.speed));
      setHumaidaty(response.main.humidity);
      setName(response.name);
      setIcon(response.weather[0].main);
      switch (true) {
        case response.weather[0].main == "Clouds":
          setIcon(clouds);
          break;
        case response.weather[0].main == "Clear":
          setIcon(clear);
          break;
        case response.weather[0].main == "Haze":
          setIcon(haza);
          break;
        case response.weather[0].main == "Rain":
          setIcon(rain);
          break;
        case response.weather[0].main == "Smoke":
          setIcon(smoke);
          break;
        default:
          setIcon("Not Found");

          break;
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // search()
    console.log("useeffect called");
    search();
  }, [input]);
  return (
    <>
      <div className="w-[100%] py-20 flex justify-center flex-col">
        <h1 className="text-center text-white font-bold mt-5 text-xl">
          Weather App
        </h1>
        <div className=" w-[35%] rounded-xl mt-10 bg-[rgba(0,0,0,0.3)] mx-auto flex justify-center flex-col align-middle items-center py-10">
          <div className="flex gap-3 w-[95%]">
            <input
              className="w-[95%] h-10 rounded-md bg-white text-black outline-none px-4"
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            
            />
            <select
              className="rounded-md bg-white text-black outline-none"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            >
              <option value="Karachi">Karachi</option>
              <option value="Tokyo">Tokyo</option>
              <option value="New York">New York</option>
              <option value="Paris">Paris</option>
              <option value="London">London</option>
              <option value="Shanghal">Shanghal</option>
              <option value="Los Angleles">Los Angleles</option>
              <option value="Beijing">Beijing</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Moscow">Moscow</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Dubai">Dubai</option>
              <option value="Singapore">Singapore</option>
              <option value="Bangkok">Bangkok</option>
              <option value="Istambul">Istambul</option>
              <option value="Sydney">Sydney</option>
              <option value="Mexico City">Mexico City</option>
              <option value="Berlin">Berlin</option>
            </select>
          </div>
          <div className="felx">
            <div className="flex  flex-col pt-7">
              <div className="flex justify-center items-center text-white text-3xl">
                <img className="h-36 w-36" src={icon} alt="" />
              </div>
              <div className="flex justify-center items-center text-white text-3xl">
                {name}
              </div>
            </div>
            <div className="flex items-end gap-10 mt-20">
              <div className="flex gap-5">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAjCAYAAAAJ+yOQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKNSURBVHgB7VjhedowFHyeoGxQbVBvUGeC0AkKE5ROkGaDZgLcCUImwJ0AMoHVCeJOoL6HT0hRJVn8133ffQah08lCfodojDEnIpqYL8xD0zSaIuB+HV++MlvmiqnBX6wZEhrpew9NCx8NryHmxRoZe8P8BM224UYT9OvFGAMKOuY3pqI0Bmg02ELTZTQ60LWY2I7mRbC4k0k+YwItLWPCwBM0HZXhDCqPpV6P1xb5api9iePE/IGvwtcotI8RzRvzp/QJ3bltwzwmvKR97fdvIgPIROy+u6xCap8GOtEo6GTVNOumBY0it7JTqVdFRUUBpE4eySXOsJA4kh6KvCef+ZTR2PT47Gmk72/W9JSAl26K+T1MHBlgIJcCgjUm11EaB2jOeK9gssloNM2FWjST5xWm251dSUXlKaBxtfW0BJrcTfs1uMRre22RKp9JgbdM4vT4PJUeXeiOxBkTGkm3ne8VSxxF/yfOmRaAyShvFYaCxPFTqtiroqKiALZOyhP1WpACkhwK1KKh/LnIP6/4ifOSOhd5XvfQPFFQo0bUsBadpQ52Jl0/LfbotwLl9UOmfqa8dhGvTlbyRO9r1RI0uYNTqcamB1F5SlmvL9d3Jp8CS4mTwtEEiYOVvskrljj2jKywApeTXi49jEsphSabOJoyMC6lFFZN5/ZqRUXFDZA6uefrH5qfxiHV0bxPD4E8wa+UPxfZX+82PQheh9zvRjz19g+sx2jihAIzJ0oOe+P954Na+GDyiXOM1NBYul0SZ6T4+Ubj7sNUmcidcVKfqUQ73egl7Vt7B5IcuRQQPBfeuY8R4648zVJKFSXOmub98JH5F3fTLySO9O/I7deSPa6gEe0HeMk+PYRe/wAZZsqtKSzwgAAAAABJRU5ErkJggg=="
                  alt=""
                />
                <p className="text-white">
                  {`${humaidity}%`} <p>Humaidity</p>
                </p>
              </div>

              <div className="flex gap-5">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM9SURBVHgBzVjhddpADJb78j/eoJcJygalE5RMUGeCkAlwJggbQCZIM4HpBKQT2J0AMoEq2RIWh21Iwtn53tOzT9Zx3+l0QncR9AxEHNNjRPKNxJFsSQqS5yiKVjA0mCBJhjU2JLk8FdxOYCjQ4DNDLiVx3nfHBIUoY0ESQ58wJDOfYIt9qvbQF8RLjCdPz2EwFc+lErdNZFPoA7KUufUkvT9gMzLPLpNQCRsCNMBECCQNJBckI9E548FciYnXw3tVyKB6yQw8b7Gf+sR0RSAkaIA1C7QQb+mTe32W3IHfv0A48BJuTduRFJTUi44+f6D6M1CUtsT164VqqHHrGR3Dlga9M30dyT3ptmaQkfGgE10XLmF/copXMERzfBt2OxLrf5jY/N6koc+4haBuKsZvo3vi34XQkMHnIqMOu1hiGrHOBrFMvkz8dunHUC39ufOWLiV7eNLwnZc7kXE5dF5E/0t0j2BIznBYZGjCAquVKIsW1UVYxRXHAc/kGvrH1mzAkiQ9eLn5ebXLElgH8RQGBla1gZZ9if0WiQF7lGd1D8OAi+gEqpgsSG78IlqJ8ibiCsfBcFhBlfDnNhQUkb5IrL4l4Z8L5VGkiZxFZBt4QmEbANtjJHeQDZXjcMixKlpcG0eNUc5XmlxPm9158Z1kLO9LkrsDL+MnSU94WEA73yCWj0/wCUA8RkKU//tj/2OKw4ET/AL3z0sj+ZaqzqanBKr0dAn9wkEdnwnF5qPwSenBde7VyVnhvcAqrKYirsNOs84G6zOWlnnl3rEe1ULgveBZ/9DZy4B8/tE4K+R7AS1k6cHZZ0k2N4bTK7UnF8b2L3wM/vIsRHctZLk9J2mqSYEnQMRWUIeBcvoJISFLmZl2hkeOvmhOndJOtU/IUyjDppd/3Mbumw+uol68/gW/hCTKlZAzxJYy8KzJ2GQdS5T/sQoICawvyBKjy0Q3w/0T6y3W96VOdM7vH4pobAaPjS4zyV5TEuLhZdoCQ1/nmMH0PunB0yeycTIhNG3wcHhveqSWTWQ77JXkHPoGVhcQurwJNux83L/j75+kIWLv6BlrIbY2cbppW+4IeoYQGUOVM/XGj1PSM8mqrQD5D1fWoFqLlOJdAAAAAElFTkSuQmCC"
                  alt=""
                />

                <p className="text-white">
                  {wind}kM/H <p>Wind Speed</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
