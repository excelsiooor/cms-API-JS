
const Select = ({options, ...props}) => {
    return ( 
        <select
        className="select"
        {...props}
        >
        {options?.map(
            option => 
            <option
                key={option.id}
                value={option.id}
            >
                {option.name}
            </option>
        )}
        </select>
    );
}

export default Select;