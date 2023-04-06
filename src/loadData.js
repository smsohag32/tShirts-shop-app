const loadData = async() => {
    const jsonData = await fetch(`https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json`);
    const data = await jsonData.json();
    return data;
}



export default loadData