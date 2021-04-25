import { useState } from "react"

const Search = () => {

    const [name, setName] = useState(null); // name state is used to set the input value 
    const [data, setData] = useState([]); // data state is used to store the api data in array format for the search term.

    // This function is used to handle user input
    const handleInput = event => {
        setName(event.target.value);
    };

    // This function is used to get the data from the iTunes search API and set taht data in the name state.
    const getIdata = async () => {

        let url = "https://itunes.apple.com/search?term=" + name;
        // let cors = "https://cors-anywhere.herokuapp.com/";

        // setData([]);

        fetch(url)
        .then( data => data.json() )
        .then( json => { 
            setData(json.results) } )

        console.log(data);
    }

    return (
        <>
            <div>
                {/* This is heading of our page */}
                <h1>iTunes App</h1>

                {/* This is the input field with submit button */}
                <div>
                    <p>Search: <input className="input-field col s6" id="daal" onChange={handleInput} /></p>
                    <button onClick={getIdata} id="btn">submit</button>
                </div>
                <div className="row" id="output"></div>
            </div>


            <div className="row" id="output">
            {
                // Here we take the data and display it in grid     
                data.map(curr => {
                //    console.log(curr.trackId)
                    return (
                        <div key={curr.trackId}>
                            
                                <div className="col s4 m4 l4">
                                    <div className="card">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator" alt="album" src={curr.artworkUrl100} />
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">{curr.artistName}<i
                                                className="material-icons right">more_vert</i></span>
                                            {/* <p><a>This is a link</a></p> */}
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">{curr.trackCensoredName}<i
                                                className="material-icons right">close</i></span>
                                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    );
                    })
            }    
            </div>    
        </>
    )
}

export default Search
