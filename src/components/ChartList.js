const ChartList = ({chart}) => {

    const chartItems = chart.map((item, index) => {
        return (
            <div>
                <img src={item["im:image"][0].label} alt="Album Cover" width="150px"/>
                <h3>Position: {index + 1}</h3>
                <h3>Song Name: {item["im:name"].label}</h3>
                <h3>Artist Name: {item["im:artist"].label}</h3>
               
                <hr></hr>
            </div>
        );
    })

    return (
        <>
            {chartItems}
        </>
        );

}

export default ChartList;