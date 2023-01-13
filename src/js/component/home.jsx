import React, {useState,useEffect} from "react";
//include images into your bundle

import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [SongURL, setSongURL] =useState([]);



	

	useEffect(()=>{
		//codigo a ejecutar
	console.log("La pagina se ha cargado exitosamente");
	fetch("https://assets.breatheco.de/apis/sound/songs") //1.ir a buscar info en la url agrege
	.then((response)=>response.json()) //2.Convierte la respuesta en un json
	.then((data)=>setSongURL(data)) //3. Guarda el json en un objeto data

	},[])
	console.log(SongURL);

	function ReproCancion() {
		const [inputValue, setInputValue] = useState("");
		const count = useRef(0);
	  
		useEffect(() => {
		  count.current = count.current + 1;
		});
	  


	return (
	       <>
 <div onChange={(e) => setInputValue(e.target.value)}/>
      

			<ul>
				{SongURL.map((item)=><li key={item.id}>{item.name}</li>)}
			</ul>
<div/>
			<div>	
<audio controls>
  <source src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3" type="audio/ogg"/>
  {/* <source src="horse.mp3" type="audio/mpeg"> */}
 
</audio>

		</div>
       </>
		);
		
		
// 		<audio controls>
//   <source src="horse.ogg" type="audio/ogg">
//   <source src="horse.mp3" type="audio/mpeg">
//   Your browser does not support the audio tag.
// </audio>



}};

export default Home;
