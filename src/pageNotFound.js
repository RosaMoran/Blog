import { Link } from "react-router-dom";
const pageNotFound = () => {
    return ( 
        <div className="not-found">
           <h2>Sorry ...! :(</h2> 
            <p>Page can not be found </p>
                <Link to = "/">Back to homepage...</Link>
        </div>
     );
}
 
export default pageNotFound;