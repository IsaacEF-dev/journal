
export const GetGifs=async (categoria)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=rOFOXBFEGB3HorkWIF5LZNpCWI77ziqw&q=${categoria}&limit=5`;
    const resp=await fetch(url);
    const {data}=await resp.json();
    const gifs=data.map(gif=>({
        id:gif.id,
        title:gif.title,
        imagen:gif.images.downsized_medium.url
    }))

    return gifs;
}