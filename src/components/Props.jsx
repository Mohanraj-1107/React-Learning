import "./style.css";
import PropTypes from "prop-types";
function Props(props)
{
     return(
        <>
         <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>{props.name}</td>
                <td>{props.Age}</td>
                <td>{props.mark > 50 ? "pass":"fail"}</td>
            </tr>
            </tbody>
         </table>
        </>
     )
}
export default Props;
Props.propTypes=
{
    name: PropTypes.string,
    Age: PropTypes.number,
    mark:PropTypes.number,
}
Props.defaultProps=
{
    name:"no",
    Age:0,
    mark:0,
}