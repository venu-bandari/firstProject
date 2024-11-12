import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Cgpa: {props.cpga}</p>
        </div>
    );
}
Student.defaultProps = {
    name:"Guest",
    age : 0,
    cpga:10
}
export default Student